import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

const Stacks = () => {
    const { t } = useTranslation("stacks")

    return (
        <div id="stacks" className="w-full flex flex-col">
            <div id="frontend-stacks">
                <span>{t("frontend")}</span>

            </div>
            <div id="backend-stacks">
                <span>{t("backend")}</span>

            </div> 
            <div id="others">
                <span>{t("others")}</span>

            </div>
        </div>
    )
}

export default Stacks