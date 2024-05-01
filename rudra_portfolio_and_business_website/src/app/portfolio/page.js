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
            <p>My Business</p>
          </Link>
          <Link className={styles.navlinks} href="/about">
            <p>About Me</p>
          </Link>
          <Link className={styles.navlinks} href="/contact">
            <p>Contact Me</p>
          </Link>
        </div>
      </div>

      <div className={styles.center}>
      <a
          href="https://github.com/TheOrangeViper"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Github <span><img src={"/githubLogo.png"} width={30} height={30}/></span>
          </h2>
          <p>Want to check out the projects on my github, click here!</p>
        </a>

        <a
          href="http://www.youtube.com/@deyrudra"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Youtube <span><img src={"/youtubeLogo.png"} width={30} height={30}/></span>
          </h2>
          <p>To check out my youtube videos, click here!</p>
        </a>

        <a
          href="https://www.linkedin.com/in/deyrudra/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Smarter Heater Register
          </h2>
          <p>Check out my Linkedin profile over here!</p>
        </a>

        <a
          href="https://www.linkedin.com/in/deyrudra/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Linkedin <span><img src={"/linkedinLogo.png"} width={30} height={30}/></span>
          </h2>
          <p>Check out my Linkedin profile over here!</p>
        </a>

        <a
          href="https://www.linkedin.com/in/deyrudra/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Linkedin <span><img src={"/linkedinLogo.png"} width={30} height={30}/></span>
          </h2>
          <p>Check out my Linkedin profile over here!</p>
        </a>

        <a
          href="https://www.linkedin.com/in/deyrudra/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Linkedin <span><img src={"/linkedinLogo.png"} width={30} height={30}/></span>
          </h2>
          <p>Check out my Linkedin profile over here!</p>
        </a>


        <a
          href="https://www.linkedin.com/in/deyrudra/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Linkedin <span><img src={"/linkedinLogo.png"} width={30} height={30}/></span>
          </h2>
          <p>Check out my Linkedin profile over here!</p>
        </a>


        <a
          href="https://www.linkedin.com/in/deyrudra/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Linkedin <span><img src={"/linkedinLogo.png"} width={30} height={30}/></span>
          </h2>
          <p>Check out my Linkedin profile over here!</p>
        </a>


        <a
          href="https://www.linkedin.com/in/deyrudra/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Linkedin <span><img src={"/linkedinLogo.png"} width={30} height={30}/></span>
          </h2>
          <p>Check out my Linkedin profile over here!</p>
        </a>


        <a
          href="https://www.linkedin.com/in/deyrudra/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Linkedin <span><img src={"/linkedinLogo.png"} width={30} height={30}/></span>
          </h2>
          <p>Check out my Linkedin profile over here!</p>
        </a>


        <a
          href="https://www.linkedin.com/in/deyrudra/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Linkedin <span><img src={"/linkedinLogo.png"} width={30} height={30}/></span>
          </h2>
          <p>Check out my Linkedin profile over here!</p>
        </a>


        <a
          href="https://www.linkedin.com/in/deyrudra/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Linkedin <span><img src={"/linkedinLogo.png"} width={30} height={30}/></span>
          </h2>
          <p>Check out my Linkedin profile over here!</p>
        </a>

      </div>

      <div className={styles.grid}>
        
      </div>
    </main>
  );
}
