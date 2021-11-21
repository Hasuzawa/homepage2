import { Variants, Transition } from "framer-motion"


const fadeIn: Variants = {
    initial: {
        y: -30
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.3,

        }
    }
}

const cascade: Variants = {
    animate: {
        transition: {  
            //delayChildren: 
            staggerChildren: 0.2
        }
    }
}


export { fadeIn }