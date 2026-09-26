import styles from "./register.module.css";

export const metadata = { title: "Join IFRPS" };

export default function RegisterPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow">Account Preview</p>
          <h1>Join the Federation</h1>
          <p className="page-hero__lead">
            Front-end preview of future player registration. Account creation will be wired to secure authentication when the backend is introduced.
          </p>
        </div>
      </section>
      <section className="section">
        <div className={`container ${styles.wrap}`}>
          <form className={`panel ${styles.form}`}>
            <label>Display name<input name="displayName" autoComplete="name" disabled /></label>
            <label>Email<input type="email" name="email" autoComplete="email" disabled /></label>
            <label>Country<select name="country" disabled><option>Select country</option></select></label>
            <button className="button button--primary" disabled type="submit">Registration coming soon</button>
          </form>
        </div>
      </section>
    </main>
  );
}
