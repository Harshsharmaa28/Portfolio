import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import EducationShowcaseListItem from "./EducationShowcaseListItem";
import EducationShowcaseList from "./EducationShowcaseListItem";
import { useSelector } from "react-redux";

export default function ExperienceShowcaseList() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });
    const theme = useSelector((state) => state.navbar.selectedTheme);
    return (
        <div className={` mx-auto my-40 max-w-7xl px-6 sm:px-14 md:my-60 md:px-20 `}>
            <EducationShowcaseList />
        </div>
    );
}
