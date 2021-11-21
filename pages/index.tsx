import SideBar from '~/components/layouts/sidebar'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'

import type { NextPage } from 'next'
import Head from 'next/head'

import Introduction from "~/components/sections/introduction"
import Stacks from "~/components/sections/stacks"
import Contact from "~/components/sections/contact"


const Home: NextPage = () => {
  return (
    <>
      <SideBar />
      <div className='flex-1 h-full bg-blue-300'>
        <Head>
          <title>Hasuzawa@home</title>
          <meta name="keywords"           content="homepage, developer, frontend" />
          <meta name="description"        content="This is the homapge of Hasuzawa Yuichi." />
          <meta name="author"             content="Hasuzawa Yuichi" />

          {/*  Open Graph meta  */}
          
          <meta property="og:locale"      content="en" />
          <meta property="og:type"        content="website" />
          <meta property="og:url"         content="" />
          <meta property="og:title"       content="Homepage of Hasuzawa Yuichi" />
          <meta property="og:description" content="The homepage of Hasuzawa Yuichi with stacks used." />

          <meta property="og:site_name"   content="Hasuzawa@home" />

          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Introduction />
        <Stacks />
        <Contact />
      </div>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale!, ["sidebar", "locales", "introduction", "stacks", "contact"]),
  }
})