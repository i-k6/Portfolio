import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-row items-center">
      <div
        className={`${styles.paddingX} max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="mt-5">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Karan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-3 text-white-100`}>
            I'm a dedicated web developer <br className="sm:block hidden" />{" "}
            with a passion for crafting interactive and user-friendly websites.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
