import React, { Component } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";


const experiences = [
    {
        company: "WaffleJack",
        role: "Crew Member",
        duration: "May 2018 – August 2019",
        description: "Delivered excellent customer service, managed orders and payments, prepared meals, and handled store opening and closing duties.",
    },
    {
        company: "LAUSD",
        role: "Teacher’s Assistant",
        duration: "October 2023 – June 2024",
        description: "Supported lead teachers with lesson planning, provided targeted student support, managed classroom behavior, and graded assignments with feedback.",
    },
    {
        company: "MCOS Conservatory",
        role: "Administrative Assistant",
        duration: "October 2023- June 2024",
        description: "Managed emails promptly and communicated effectively with parents. Provided resources to support team success.",
    },
    {
        company: "5Head Games",
        role: "Enders Gate QA Intern",
        duration: "Jan 2024 - May 2024",
        description: "Conducted black box and regression testing on Enders Gate Beta, documenting reproducible cases for developers.",
    },
    {
        company: "Little Caesars",
        role: "Assistant Manager",
        duration: "May 2019 – Present",
        description: "Managed cash records to improve accuracy, assisted in scheduling and delegation, conducted inventory counts, and enforced policies to boost productivity and efficiency.",
    },
];

class Experience extends Component {
    render() {
        return (
            <section id="experience" className="pb-5 min-h-screen bg-[#333366] mx-auto py-16 px-6">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-semibold text-white border-b-4 inline-block pt-5">
                        Work Experience
                    </h2>
                </div>
                <div className="col-md-8 mx-auto">
                    <VerticalTimeline>
                        {experiences.map((work, i) => (
                            <InView triggerOnce={false} threshold={0.3} key={i}>
                                {({ inView, ref }) => (
                                    <motion.div
                                        ref={ref}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                    >
                                        <VerticalTimelineElement
                                            className="vertical-timeline-element--work"
                                            date={work.duration}
                                            position={i % 2 === 0 ? "left" : "right"}
                                            contentStyle={{
                                                background: "#CCCCFF",
                                                color: "white",
                                                boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
                                            }}
                                            contentArrowStyle={{ borderRight: "7px solid #CCCCFF" }}
                                            iconStyle={{
                                                background: "#CCCCFF",
                                                color: "#fff",
                                                textAlign: "center",
                                                fontSize: ".75rem",
                                            }}
                                            icon={<i className="fas fa-briefcase experience-icon"></i>}
                                        >
                                            <h3 className="text-left text-xl font-semibold text-[#333366]">{work.role}</h3>
                                            <h4 className="text-left text-lg font-semibold text-[#333366]">{work.company}</h4>
                                            <p className="text-left mt-2 text-[#333366]">{work.description}</p>
                                        </VerticalTimelineElement>
                                    </motion.div>
                                )}
                            </InView>
                        ))}
                    </VerticalTimeline>
                </div>
            </section>
        );
    }
}

export default Experience;