import { Suspense } from 'react';

import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';

import { LoginFormLazy } from '../form/index.lazy';

interface LoginModalProps {
    isOpen: boolean
    onClose: () => void
}

export const LoginModal = ({ onClose, isOpen }: LoginModalProps) => {
    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            <Suspense fallback={<Loader />}>
                <LoginFormLazy />
            </Suspense>
        </Modal>
    );
};
