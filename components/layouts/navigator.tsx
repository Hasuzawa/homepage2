import { useTranslation } from "next-i18next"

const Navigator = () => {

    const { t } = useTranslation("sidebar");

    return (
        <div>
            <ul>
                <li>{t("introduction")}</li>
                <li>{t("techs")}</li>
                <li>{t("contact")}</li>
            </ul>
        </div>
    )
}

export default Navigator