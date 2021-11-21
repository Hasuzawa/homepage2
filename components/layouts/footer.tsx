import { useTranslation } from 'next-i18next'

import LocaleSelect from "~/components/layouts/localeSelect"


const Footer = () => {
    const { t } = useTranslation('sidebar');

    return (
        <footer id="footer" className="flex flex-col items-center">
            <span>Presented by Hasuzawa Yuichi</span>
            <LocaleSelect />
            
        </footer>
    )
}

export default Footer