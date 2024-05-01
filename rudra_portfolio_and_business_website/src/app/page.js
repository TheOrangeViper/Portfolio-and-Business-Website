import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a>
            <div className={styles.vercelLogo}>
              {/* <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              /> */}
              <h1>Rudra Dey</h1>
            </div>
          </a>
        </div>
        <p className={styles.navbar}>
          <Link className={styles.navlinks} href="/">Home</Link>
          <Link className={styles.navlinks} href="/portfolio">My Portfolio</Link>
          <Link className={styles.navlinks} href="/business">My Business</Link>
          <Link className={styles.navlinks} href="/about">About Me</Link>
          <Link className={styles.navlinks} href="/contact">Contact Me</Link>
        </p>
      </div>

      <div className={styles.center}>
        <div className={styles.contentDisplay}>
          <Image className={styles.contentDisplayImage} src="/gif1.gif" width={330} height={330}/>
          <Image className={styles.contentDisplayImage} src="/gif2.gif" width={330} height={330}/>
          <div className={styles.advertisement}>
            <h1>Ad goes here!<br></br><br></br> (an image not text lol)</h1>
          </div>
        </div>
        {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
      </div>

      <div className={styles.grid}>
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
            Linkedin <span><img src={"/linkedinLogo.png"} width={30} height={30}/></span>
          </h2>
          <p>Check out my Linkedin profile over here!</p>
        </a>

        <Link href="/contact" className={styles.card} target="_blank" rel="noopener noreferrer">  
          <h2>
            Contact Me <span>-&gt;</span>
          </h2>
          <p>
            Need to contact me through email? Click here!
          </p>
        </Link>
      </div>
    </main>
  );
}
