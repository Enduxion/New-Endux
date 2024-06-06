import Button from "../../components/Button/Button";

import wip from "../../assets/image/setting.png";

import { mirrorEasing, motion } from "framer-motion";

export default function WIP({ pageName }) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-64px)] mt-16">
            <div className="h-1/2 aspect-square relative">
                <motion.img className="absolute top-0 left-0 w-full h-full" 
                    style={{
                        background: 'linear-gradient(0deg, #0fe, #0f6)',
                        maskImage: `url("${wip}")`,
                        maskSize: "cover",
                    }}
                    animate={{
                        rotate: "1080deg"
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>
            <span className="custom-primary-text mt-4">{pageName} page is work in progress!</span>
            <span className="flex custom-primary-text">Please check in later</span>
            <Button href="/" className="mt-4" decor={0}>Go Back</Button>
        </div> 
    )
}