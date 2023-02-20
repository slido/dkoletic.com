import styles from "../style";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import ProjectsCard from "./ProjectsCard";
import { useState } from "react";
import { projects } from "../constants";

const Projects = () => {
  const [active, setActive] = useState("project-1");
  return (
    <div className="relative" id="work">
      <h2 className={`${styles.heading2} pt-[50px] pb-[50px]`}>Work</h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-row`}
      >
        {projects.map((world, index) => (
          <ProjectsCard
            key={world.id}
            {...world}
            index={index}
            active={active}
            handleClick={setActive}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
