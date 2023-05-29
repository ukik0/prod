import { clsx } from '@/shared/lib/helprers/classNames/classNames';
import { Modal } from '@/shared/ui/Modal';

import { LoginForm } from '../LoginForm/LoginForm';

import cl from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void

}

export const LoginModal = ({ className, onClose, isOpen }: LoginModalProps) => {
    return (
        <Modal lazy isOpen={isOpen} onClose={onClose} className={clsx({ cls: cl.LoginModal, additional: [className] })}>
            <LoginForm />
        </Modal>
    );
};
