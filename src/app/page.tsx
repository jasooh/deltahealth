"use client"
// Home page

import {useRef} from "react";
import {motion, useInView} from "motion/react"
import Image from "next/image";
import { useRouter } from "next/navigation";

const spring_transition = {
    type: "spring",
    stiffness: 200, // Controls how tight the spring is
    damping: 40,    // Controls the resistance of the spring
    bounce: 0.3,    // Controls the amount of bounce (0 to 2 is common)
    duration: 0.8,  // Optional, spring usually ignores this unless combined
}

export default function Home() {
    const router = useRouter();
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, amount: 1})

    const handleClick = () => {
        router.push('/analyzer')
    }

    return (
        <>
            <main className="w-full min-h-screen p-4 md:px-28 md:py-16">
                <section className="h-[35rem] md:h-[25rem] flex flex-col gap-3 md:flex-row md:justify-between">
                    <motion.div className="md:w-1/2" initial={{x: "-100%", filter: "blur(10px)"}}
                                animate={{x: 0, filter: "blur(0px)"}} transition={spring_transition}>
                        <h1 className="text-3xl md:text-4xl font-bold leading-loose md:leading-loose text-center md:text-left">An
                            app that
                            cares.</h1>
                        <p className="text-center md:text-left mb-5">
                            When you’re feeling unwell, the last thing you want is <strong>uncertainty</strong>. That’s
                            where
                            DeltaHealth steps in.
                            Designed to be your first line of support, <u>DeltaHealth helps you understand your symptoms
                            and
                            take
                            action before things get worse.</u>
                        </p>
                    </motion.div>
                    <motion.div initial={{x: "75%", rotate: 10}} animate={{x: 0, rotate: 0}}>
                        <Image className="w-full md:w-[400px] h-[250px] rounded-xl shadow-2xl" src={'/stock_1.jpg'}
                               alt={"Man using phone"} height={200} width={200}/>
                    </motion.div>
                </section>
                <section ref={ref} className="h-[40rem] md:h-[25rem] flex flex-col gap-3 md:flex-row-reverse md:justify-between">
                    <motion.div className="md:w-1/2" initial={{x: "100%", filter: "blur(10px)", opacity: 0}}
                                animate={isInView ? {x: 0, filter: "blur(0px)", opacity: 1} : {}}
                                transition={spring_transition}>
                        <h1 className="text-3xl md:text-4xl font-bold leading-loose md:leading-loose text-center md:text-right">A.I
                            at your
                            service.</h1>
                        <p className="text-center md:text-right mb-5">
                            With advanced symptom-checking technology powered by <strong>Cohere</strong> and a
                            user-friendly
                            interface, DeltaHealth empowers you
                            to
                            take charge of your health. Whether it’s a common cold, stress-induced fatigue, or something
                            more,
                            DeltaHealth provides personalized insights to guide your next steps.
                        </p>
                    </motion.div>
                    <motion.div initial={{x: "-75%", rotate: -10, opacity: 0}}
                                animate={isInView ? {x: 0, rotate: 0, opacity: 1} : {}}>
                        <Image className="w-full md:w-[400px] h-[300px] rounded-xl shadow-2xl" src={'/stock_2.jpg'}
                               alt={"Man using phone"} height={200} width={200}/>
                    </motion.div>
                </section>
            </main>
            <motion.section className="pt-10 h-[16rem] md:h-[20rem] bg-black text-center space-y-8" initial={{ y: "100%" }} animate={isInView ? {y: 0} : {}} transition={spring_transition}>
                <div className="text-white font-medium text-2xl">
                    Stay healthy with DeltaHealth.
                </div>
                <button onClick={handleClick} className="p-3 text-white rounded-xl border border-white hover:bg-white hover:text-black duration-200">
                    Try now
                </button>
            </motion.section>
        </>
    )
}
