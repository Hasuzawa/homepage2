import { useRouter, NextRouter } from "next/router"
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { BsGlobe2 } from "react-icons/bs"

const LocaleSelect = () => {
    const router: NextRouter = useRouter()
    const { pathname, asPath, query } = router
    const { t } = useTranslation("locales")

    const [ locale, setLocale ] = useState<string>("")

    useEffect(() => {
        router.push({ pathname, query}, asPath, { locale: locale})
    }, [locale])

    return (
        <div id="localeSection" className="flex flex-row items-center gap-x-2" >
            <BsGlobe2 />
            <select
                defaultValue={router.locale}
                onChange={(event) => setLocale(event.target.value)}
                className="w-28 h-6"
                //aria-label="current locale"
            >
                <option value="en">{t("English")}</option>
                <option value="de">{t("German")}</option>
                <option value="ja">{t("Japanese")}</option>
            </select>
        </div>
    )
}

export default LocaleSelect