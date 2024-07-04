import styles from "./ProjectsStyles.module.css";
import newsletter from "../../assets/newletter.jpg";
import dropdown from "../../assets/intro-section-with-dropdown-navigation.jpg";
import qrcode from "../../assets/QR code.png";
import multiStepForm from "../../assets/Multi-step-form.jpg";
import ProjectCard from "../../common/ProjectCard";

const Project = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={newsletter}
          link="https://yudahtech.github.io/newsletter/"
          h3="Newletter"
          // p="Streaming App"
        />

        <ProjectCard
          src={dropdown}
          link="https://fastidious-arithmetic-aef84f.netlify.app/#"
          h3="Snap"
          // p="Hamburger Restaurant"
        />

        <ProjectCard
          src={qrcode}
          link="https://qr-code-project-005.netlify.app/"
          h3="QrCode"
          // p="Glasses Shop"
        />

        <ProjectCard
          src={multiStepForm}
          link="https://yudahtech.github.io/multi-step-form/"
          h3="Multi Step Form"
          // p="fitness App"
        />
      </div>
    </section>
  );
};

export default Project;
