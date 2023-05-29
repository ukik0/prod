import { Modal } from '@/shared/ui/Modal';

import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    isOpen: boolean
    onClose: () => void

}

export const LoginModal = ({ onClose, isOpen }: LoginModalProps) => {
    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            <LoginForm />
        </Modal>
    );
};
