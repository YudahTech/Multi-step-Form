import styles from "./SkillsStyles.module.css";
import checkMarkLight from "../../assets/checkmark-light.svg";
import checkMarkDark from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

const Skills = () => {
  const { theme } = useTheme();
  const checkMarkIcon = theme === "light" ? checkMarkLight : checkMarkDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Jest" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div>
    </section>
  );
};

export default Skills;
