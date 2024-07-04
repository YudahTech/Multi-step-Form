import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Mypicture.jpeg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/HABIB YUSUF CV.pdf";
import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="My photo" />

        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Habib
          <br />
          Yusuf
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://x.com/classiq005" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/habib-yusuf-aa163123b/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>

          <a href="https://github.com/YudahTech" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web Apps for Commercial
          Businesses
        </p>
        <a href={CV} target="_blank" download>
          <button className="hover">Download CV</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
