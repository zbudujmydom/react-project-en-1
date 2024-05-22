import styles from "./AboutCompany.module.css";
import CompanyDecrtiption from "./components/CompanyDecrtiption/CompanyDecrtiption";

const AboutCompany = () => {
  return (
    <section className={styles.container}>
      <p>We are small company...</p>
      <CompanyDecrtiption date={"22.05.2024"} />
    </section>
  );
};

export default AboutCompany;
