import { useTranslation } from "react-i18next"
import { BsGithub } from "react-icons/bs"
import Link from "next/link"

const Contact = () => {
    const { t } = useTranslation("contact")

    return (
        <div id="contact" className="w-full flex flex-col items-center">
            <span>{t("I can be reached at")}</span>
            <a href="mailto:hasuzawa.yuichi.international@gmail.com"><span>hasuzawa.yuichi.international@gmail.com</span></a>
            <span>{t("Please check out my GitHub for my latest progress")}</span>
            <Link href="https://github.com/Hasuzawa/homepage2" >
                <a
                    className="flex flex-row place-items-center gap-x-2"
                >
                    <BsGithub size={24}/>
                    <span className="">Hasuzawa</span>
                </a>
            </Link>
        </div>
    )
}

export default Contact