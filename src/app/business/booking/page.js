import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
export default function page() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <div className={styles.vercelLogo}>
            <h1>RUDRA <br></br>DEY.</h1>
          </div>
        </div>
        <div className={styles.navbar}>
          <Link className={styles.navlinks} href="/">
            <p>Home</p>
          </Link>
          <Link className={styles.navlinks} href="/portfolio">
            <p>My Portfolio</p>
          </Link>
          <Link className={styles.navlinks} href="/business">
            <p>Tutoring</p>
          </Link>
          <Link className={styles.navlinks} href="/about">
            <p>About Me</p>
          </Link>
          <Link className={styles.navlinks} href="/contact">
            <p>Contact Me</p>
          </Link>
        </div>
      </div>
      {/* This is temporary */}
      <iframe className={styles.booking} src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3_CL8QHjOyc92X6A-S-p2EOGKwrf3cUQL4wktUuSn6zKQa1moDr9-EPv21EY5SCcUTsl8kEvD0?gv=true"></iframe>
      <div className={styles.center}>
      </div>

      <div className={styles.grid}>
        
      </div>
    </main>
  );
}
