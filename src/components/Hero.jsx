import styles from "../style";
import Spline from "@splinetool/react-spline";
import Typist from "react-typist-component";

const Hero = () => {
  return (
    <section
      id="home"
      className={`relative home-holder flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full relative">
          <h1 className="flex-1 font-poppins font-semibold  ss:text-[56px] md:text-[72px] ss:pl-[20px] ss:pr-[20px] ss:leading-[110%] ss:left[0] md:left-[100px] md:leading-[150%] absolute z-20 h-[200px] top-[30%] ss:bg-blue-gradient md:text-[white]">
            <Typist
              typingDelay={100}
              loop={true}
              cursor={<span className="cursor"> </span>}
            >
              <div>Hi! ^^</div>
              <Typist.Delay ms={1500} />
              <Typist.Backspace count={6} />
              <div>
                Welcome <br />
                to my <br />
                website
              </div>
              <Typist.Delay ms={2500} />
              <Typist.Backspace count={30} />
              <div>
                My name is <br />
                Denis
              </div>
              <Typist.Delay ms={2500} />
              <Typist.Backspace count={25} />
              <div>
                I am a <br />
                Software <br />
                Developer
              </div>
              <Typist.Delay ms={2500} />
              <Typist.Backspace count={29} />
            </Typist>
          </h1>
          <div className="w-full h-full absolute z-10 ">&nbsp;</div>
          <Spline
            className="xl:canvas-xl lg:canvas-lg md:canvas-md  sm:canvas-sm ss:canvas-ss canvas-xs"
            scene="https://prod.spline.design/WwtGMymHyg3I2BVt/scene.splinecode"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
