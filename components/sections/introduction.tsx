import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"

const Introduction = () => {
    const { t } = useTranslation("introduction")

    return (
        <div id="introduction" className="w-full">
            <span>{t("Web Developer working in Japan")}</span>
        </div>
    )
}

export default Introduction