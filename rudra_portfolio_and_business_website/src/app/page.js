import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
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

      <div className={styles.center}>
        <div>
          <p style={{fontWeight:"bold", fontSize:"2rem", marginLeft:"1.5rem", fontStyle:"oblique"}}>Featured: </p>
          <div className={styles.contentDisplay}>
            <Image className={styles.contentDisplayImage} src="/vscode.gif" width={330} height={330}/>
            <Image className={styles.contentDisplayImage} src="/winterFleming.gif" width={480} height={330}/>
              <Link href="/business">
                <div className={styles.advertisement}>
                    <Image src="/bannerAD.png" width={240} height={390}></Image>
                  {/* <h1>Ad goes here!<br></br><br></br> Ad goes here!<br></br><br></br> Ad goes here!<br></br><br></br> Ad goes here!<br></br><br></br> Ad goes here!<br></br><br></br> Ad goes here!<br></br><br></br> (an image not text lol)</h1> */}
                </div>
              </Link>
          </div>
        </div>
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
