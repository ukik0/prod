import {
    MouseEvent, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';

import { clsx } from '@/shared/lib/helprers/classNames/classNames';
import { Portal } from '@/shared/ui/Portal';

import cl from './Modal.module.scss';

interface ModalProps {
    className?: string
    children: ReactNode
    isOpen: boolean
    onClose: () => void
}

export const Modal = ({
    className, onClose, isOpen, children,
}: ModalProps) => {
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleClose = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, 300);
        }
    }, [onClose]);

    const handleContentClick = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    }, [handleClose]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, handleKeyDown]);

    return (
        <Portal container={document.querySelector('.app')}>
            <div className={clsx({
                cls: cl.Modal,
                mods: { [cl.opened]: isOpen, [cl.isClosing]: isClosing },
                additional: [className],
            })}
            >
                <div className={cl.overlay} onClick={handleClose}>
                    <div className={cl.content} onClick={(e) => handleContentClick(e)}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
