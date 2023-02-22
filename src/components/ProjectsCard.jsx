import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

const ProjectsCard = ({
  id,
  imgUrl,
  title,
  description,
  index,
  active,
  handleClick,
  link,
  git,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5]   flex-[2]"
    } flex items-center justify-center min-w-[170px] h-[400px] transition-[flex] duration-[0.7s]  text-white ease-out-flex cursor-pointer  `}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] drop-shadow-sm text-[#00040F] absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <h2 className="mb-[10px] font-semibold sm:text-[32px] text-[24px]">
          {title}
        </h2>
        <p className="font-normal text-[16px] leading-[20.16px] mb-[10px] whitespace-pre">
          {description}
        </p>
        <div className="flex w-[20%] justify-start mt-[10px]">
          {link && (
            <a
              href={link}
              rel="noreferrer"
              target="_blank"
              className="w-[50%] border-[#fff] border-solid p-[5px] mr-[10px] border-[1px] rounded-[10px] flex justify-center"
            >
              Web
            </a>
          )}
          <a
            href={git}
            rel="noreferrer"
            target="_blank"
            className="w-[50%] border-[#fff] p-[5px] border-solid  border-[1px] rounded-[10px] flex justify-center"
          >
            Git
          </a>
        </div>
      </div>
    )}
  </motion.div>
);

export default ProjectsCard;
