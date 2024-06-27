import { Form } from "react-router-dom";

import Logo from "../../assets/icones/logo.png";

import styles from "./ConnectionPage.module.css";

export default function ConnectionPage() {

  return (
    <div className={styles.backgroundconnectionPage}>
      <div className={styles.connectionCard}>
        <img
          className={styles.logoconnection}
          src={Logo}
          alt="logo wildy gamy"
        />
        <h3>Connexion</h3>

        <Form method="post" className={styles.formconnection}>
          <label htmlFor="username">Pseudonyme ou Mail</label>{" "}
          <input
            placeholder="Zelda55"
            type="text"
            id="username"
            name="username"
            aria-label="Entrer pseudoname ou mail"
          />
          <label htmlFor="password">Mot de passe</label>{" "}
          <input
            type="password"
            id="password"
            name="password"
            aria-label=" Entrer mot de passe"
          />
          <button
            className={styles.buttonconnection}
            type="submit"
            aria-label="connection"
          >
        
            Connexion
          </button>
          <button
            className={styles.buttonCreateProfil}
            type="submit"
            aria-label="Créer un profil"
          >
          
            Créer un compte
          </button>
        </Form>
        <h4>Mot de passe oublié</h4>
      </div>
    </div>
  );
}
