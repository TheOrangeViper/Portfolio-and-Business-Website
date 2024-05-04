import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import banner from "../../public/bannerAD.png";
import vscode from "../../public/vscode.gif";
import winterFleming from "../../public/winterFleming.gif";
import github from "../../public/githubLogo.png";
import youtube from "../../public/youtubeLogo.png";
import linkedin from "../../public/linkedinLogo.png";

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
        </div>
      </div>

      <div className={styles.center}>
        <div>
          <p style={{fontWeight:"bold", fontSize:"2rem", marginLeft:"1.5rem", fontStyle:"oblique"}}>Featured: </p>
          <div className={styles.contentDisplay}>
            {/* <Image className={styles.contentDisplayImage} src={vscode} width={330} height={330}/> */}
            <Image className={styles.contentDisplayImage} src={winterFleming} width={350} height={290}/>
            <iframe width="350" height="200" style={{display: "flex", margin: "0.5rem", justifyContent:"center", border:"2.5px solid rgba(0,0,0, 1)", borderRadius:"5px", boxShadow: "0px 0px 100px gold"}} src="https://www.youtube.com/embed/MOIRHsI3CEc?si=wlu3qVH4dRwtJm4v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              
              <Link href="/business">
                <div className={styles.advertisement}>
                    <Image src={banner} width={240} height={390}></Image>
                </div>
              </Link>
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://github.com/deyrudra"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Github <span><Image src={github} width={30} height={30}/></span>
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
            Youtube <span><Image src={youtube} width={30} height={30}/></span>
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
            Linkedin <span><Image src={linkedin} width={30} height={30}/></span>
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
