import { techStack } from "../constants";
import styles, { layout } from "../style";

const TechStackCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] w-full ${
      index !== techStack.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img
        src={icon}
        alt="star"
        className="w-[100%] h-[100%] object-contain rounded-[50%]"
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>

      {index !== techStack.length - 1 ? (
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      ) : (
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          <a href="https://github.com/slido" target="blank">
            Link to my Github
          </a>
        </p>
      )}
    </div>
  </div>
);

const About = () => (
  <section id="about" className={`relative items-start ${layout.section}`}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} mb-[40px]`}>About me</h2>
      <p className={`${styles.paragraph}  mt-5`}>
        <img src="./io.jpg" alt="io" className="mb-[20px] rounded-[10px]" />
      </p>
      <p className={`${styles.paragraph}  mt-5`}>
        I'm an Senior Frontend / JavaScript Developer with over a decade of
        experience in the field. Had the opportunity to work on a variety of
        projects and technologies, which has given me a diverse skill set and
        the ability to adapt to new challenges.
      </p>
      <p className={`${styles.paragraph} mt-5`}>
        My expertise lies in JavaScript, React, TypeScript, Node and have great
        experience with creating frontend solutions with CSS frameworks like
        Tailwind CSS and Material UI with designs from Figma. I'm skilled in
        Agile environments and have led software development teams, conducted
        workshops and presentations, and provided software requirements and
        architecture as a project pre phase.
      </p>
      <p className={`${styles.paragraph}   mt-5`}>
        In my past roles, I have also worked as a Team Lead, have experience in
        managing developers and their work environment from employment technical
        interviews, to team ceremonies, assist and micromanagement of people
        within the project teams, evaluations, improvement, education,
        workshops, team buildings.
      </p>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      <h2 className={`${styles.heading2} mb-[40px]`}>Technologies</h2>
      {techStack.map((tech, index) => (
        <TechStackCard key={tech.id} {...tech} index={index} />
      ))}
    </div>
  </section>
);

export default About;
