import { useRouter, NextRouter } from "next/router"
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

const LocaleSelect = () => {
    const router: NextRouter = useRouter()
    const { pathname, asPath, query } = router
    const { t } = useTranslation("locales")

    const [ locale, setLocale ] = useState<string>("")

    useEffect(() => {
        router.push({ pathname, query}, asPath, { locale: locale})
    }, [locale])

    return (
        <select onChange={(event) => setLocale(event.target.value)}>
            <option selected={"en" == router.locale} value="en">{t("English")}</option>
            <option selected={"de" == router.locale} value="de">{t("German")}</option>
            <option selected={"ja" == router.locale} value="ja">{t("Japanese")}</option>
        </select>
    )
}

export default LocaleSelect