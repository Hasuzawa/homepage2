import { useTranslation } from 'next-i18next'

const SideBar = () => {
    const { t } = useTranslation('sidebar');

    return (
        <div className="bg-red-300 h-screen w-60">
            <ul>
                <li>{t('introduction')}</li>
                <li>{t('techs')}</li>
            </ul>
        </div>
    );
}

export default SideBar;



