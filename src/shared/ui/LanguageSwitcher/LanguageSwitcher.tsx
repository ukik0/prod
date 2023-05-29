import { useTranslation } from 'react-i18next';

import { clsx } from '@/shared/lib/helprers/classNames';
import { Button } from '@/shared/ui/Button';

interface LanguageSwitcherProps {
    className?: string
    short?: boolean
}

export const LanguageSwitcher = ({ className, short }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            size="L"
            className={clsx({ additional: [className] })}
            theme="clear"
            onClick={toggleLanguage}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
};
