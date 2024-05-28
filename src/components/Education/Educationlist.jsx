import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import EducationShowcaseListItem from "./EducationShowcaseListItem";

// Static data
const showcaseListData = {
    title: "My Experiences",
    details: [
        {
            title: "Frontend Developer",
            organisation: { name: "Tech Company", href: "https://techcompany.com" },
            date: "Jan 2021 - Present",
            location: "Remote",
            description: "Developing and maintaining the front end of the company's main product.",
        },
        // Add more static items as needed
    ],
};

export default function ExperienceShowcaseList() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    return (
        <div className="mx-auto my-40 max-w-7xl px-6 sm:px-14 md:my-60 md:px-20">
            {/* <h2 className="md:mb-30 mb-16 w-full bg-gradient-to-r from-accent/70 to-accent bg-clip-text text-center text-3xl font-bold text-transparent xs:text-4xl sm:text-6xl md:text-8xl">
        {showcaseListData.title}
      </h2> */}
            <div ref={ref} className="relative w-full md:mx-auto md:w-[80%]">
                {/* <motion.div
        //   style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-5 h-full w-[5px] origin-top rounded-lg bg-accent"
        ></motion.div> */}
                <ul className="ml-4 w-full items-center">
                    {showcaseListData.details.map((details, index) => (
                        <EducationShowcaseListItem key={index} {...details} />
                    ))}
                </ul>
            </div>
        </div>
    );
}
