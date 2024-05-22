import styles from "./App.module.css";
import AboutCompany from "./components/AboutCompany/AboutCompany";
import Heading from "./components/Heading/Heading";

function App() {
  return (
    <main>
      <Heading />
      <h1 className={styles.heading}>React app</h1>
      <AboutCompany />
    </main>
  );
}

export default App;

/*
  camelCase -> userFirstName
  PascalCase -> UserFirstName (this one we have to use for react component name)
  kebab-case -> user-first-name
*/
