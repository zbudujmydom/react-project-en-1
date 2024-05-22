import styles from "./CompanyDecrtiption.module.css";

function CompanyDecrtiption(props) {
  return (
    <div>
      <p>date: {props.date}</p>
      <div className={styles.companyDecrtiption}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis debitis veritatis commodi officia tempore,
        explicabo reiciendis vitae quia amet aliquam? Eius corporis in sed totam, tenetur quam similique dignissimos
        minima?
      </div>
    </div>
  );
}

export default CompanyDecrtiption;
