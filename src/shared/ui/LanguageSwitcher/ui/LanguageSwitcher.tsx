import {clsx} from "@/shared/lib/helprers/classNames/classNames";
import cl from './LanguageSwitcher.module.scss'
import {useTranslation} from "react-i18next";
import {Button} from "@/shared/ui/Button";

interface LanguageSwitcherProps {
    className?: string
}

export const LanguageSwitcher = ({className}: LanguageSwitcherProps) => {
    const {t, i18n} = useTranslation()

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return <Button className={clsx({cls: cl.LanguageSwitcher, additional: [className]})} theme={'clear'} onClick={toggleLanguage}>{t('Язык')}</Button>

}