import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

// Static data
const educationData = [
    {
        title: "Frontend Developer",
        organisation: { name: "Tech Company", href: "https://techcompany.com" },
        date: "Jan 2021 - Present",
        location: "Remote",
        description: "Developing and maintaining the front end of the company's main product.",
    },
    {
        title: "Backend Developer",
        organisation: { name: "Another Tech Company", href: "https://anothertechcompany.com" },
        date: "Feb 2019 - Dec 2020",
        location: "Remote",
        description: "Working on backend services and APIs.",
    },
    {
        title: "Frontend Developer",
        organisation: { name: "Tech Company", href: "https://techcompany.com" },
        date: "Jan 2021 - Present",
        location: "Remote",
        description: "Developing and maintaining the front end of the company's main product.",
    },
    {
        title: "Backend Developer",
        organisation: { name: "Another Tech Company", href: "https://anothertechcompany.com" },
        date: "Feb 2019 - Dec 2020",
        location: "Remote",
        description: "Working on backend services and APIs.",
    },
    {
        title: "Frontend Developer",
        organisation: { name: "Tech Company", href: "https://techcompany.com" },
        date: "Jan 2021 - Present",
        location: "Remote",
        description: "Developing and maintaining the front end of the company's main product.",
    },
    {
        title: "Backend Developer",
        organisation: { name: "Another Tech Company", href: "https://anothertechcompany.com" },
        date: "Feb 2019 - Dec 2020",
        location: "Remote",
        description: "Working on backend services and APIs.",
    },
    // Add more static items as needed
];

// ShowCaseLiIcon Component
function ShowCaseLiIcon({ iconRef }) {
    const { scrollYProgress } = useScroll({
        target: iconRef,
        offset: ["center end", "center center"],
        layoutEffect: false,
    });

    return (
        <figure className="absolute left-0 stroke-zinc-900">
            <svg width="75" height="75" viewBox="0 0 100 100">
                <circle
                    cx="50"
                    cy="27"
                    r="20"
                    className="fill-none stroke-accent stroke-1"
                />
                <motion.circle
                    style={{
                        pathLength: scrollYProgress,
                    }}
                    cx="50"
                    cy="27"
                    r="20"
                    className="fill-zinc-100 stroke-[5px] dark: dark:stroke-zinc-900"
                />
                <circle cx="50" cy="27" r="10" className="fill-accent stroke-1" />
            </svg>
        </figure>
    );
}

// EducationShowcaseListItem Component
function EducationShowcaseListItem({ data }) {
    const ref = useRef(null);

    return (
        <li ref={ref} className="mx-auto mb-14 flex w-[60%] flex-col gap-1">
            <ShowCaseLiIcon iconRef={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{
                    type: "spring",
                    duration: 0.4,
                }}
            >
                <h3 className="text-base font-bold text-foreground sm:text-xl md:text-2xl">
                    {data.title}{" "}
                    <a
                        href={data.organisation.href}
                        className="cursor-pointer text-accent"
                        target="_blank"
                        rel="nofollow"
                    >
                        @{data.organisation.name}
                    </a>
                </h3>
                <span className="text-sm font-medium text-foreground xs:text-base">
                    {data.date} | {data.location}
                </span>
                <p className="text-sm font-medium text-muted-foreground xs:text-base">
                    {data.description}
                </p>
            </motion.div>
        </li>
    );
}

// EducationShowcaseList Component
export default function EducationShowcaseList() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    return (
        <div className="mx-auto my-40 max-w-7xl px-6 sm:px-14 md:my-60 md:px-20">
            <h2 className="md:mb-30 mb-16 w-full bg-gradient-to-r from-accent/70 to-accent bg-clip-text text-center text-3xl font-bold text-transparent xs:text-4xl sm:text-6xl md:text-8xl">
               Education
            </h2>
            <div ref={ref} className="relative w-full md:mx-auto md:w-[80%]">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-5 h-full w-[5px] origin-top rounded-lg bg-accent"
                ></motion.div>
                <ul className="ml-4 w-full items-center">
                    {educationData.map((data, index) => (
                        <EducationShowcaseListItem key={index} data={data} />
                    ))}
                </ul>
            </div>
        </div>
    );
}
