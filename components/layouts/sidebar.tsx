import LogoSection from "~/components/layouts/logoSection"
import Navigator from "~/components//layouts/navigator"
import Footer from "~/components/layouts/footer"

const SideBar = () => {

    return (
        <div className="bg-red-300 h-screen w-60 flex flex-col">
            <LogoSection />
            <Navigator />
            <Footer />
        </div>
    );
}

export default SideBar;



