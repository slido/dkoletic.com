import styles from "./style";
import { About, CTA, Footer, Navbar, Hero } from "./components";
import Projects from "./components/Projects";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
      <div className="absolute z-[0] w-[60%] h-[60%] right-[10%] top-0 rounded-full blue__gradient bottom-40 z-1"></div>
    </div>

    <div className={`bg-primary ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div
      className={`bg-primary ${styles.paddingX} ${styles.flexCenter} lg:mt-[100px]`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] left-[-20%] top-[1700px] rounded-full blue__gradient bottom-40"></div>
      <div className="absolute z-[0] w-[60%] h-[60%] right-[-20%] top-[2590px] rounded-full blue__gradient "></div>
      <div className={`${styles.boxWidth}`}>
        <About />
        <Projects />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
