import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import github from "../../../public/githubLogo.png";
import websiteScreenshot from "../../../public/websiteHomePageScreenshot.png";
import tribiteGIF from "../../../public/TribiteGIF.gif";
import panningCameraGIF from "../../../public/PanningCameraOpenCV.gif";
import shelfCAD from "../../../public/shelfCAD.png";
import Resume from "../../../public/Resume.png";


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
        </div>
      </div>
      {/* <div className={styles.center}> */}
        <div className={styles.card}>
            <h2>
            I'm Rudra, an undergraduate from The University of Toronto.
            </h2>
            <h4 style={{color: "gold"}}>
            For fun I enjoy programming, designing, and creating all sorts of things!
            </h4>
            <br></br>
            <div className={styles.attachment}>
              <h4 style={{fontWeight:"600", color:"rgb(0, 0, 0)", textAlign:"center", }}>
                Interested in my work? Looking for my résumé? Click the résumé preview below.<br></br><br></br>
                <div style={{color:"red", textShadow:"0px 0px 50px black", fontWeight:"400"}}>
                  To download the résumé, simpliy click the attachment below:<br></br>
                  <br></br>
                </div>
              </h4>
                
              
              {/* PUT THE FORM HERE AND MAKE IT CLICKABLE TO DOWNLOAD */}
              
              <a href={"./Resume.pdf"} >
                <Image src={Resume} width={150} height={195} objectFit="cover" className={styles.attachmentImage}></Image>
              </a>
              <br></br>

              <h4 style={{fontWeight:"500", fontSize:"1rem", color:"rgb(0, 0, 0)", textAlign:"left"}}>
                Website: deyrudra.github.io/hub/
                <br></br>
                Linkedin: linkedin.com/in/deyrudra/
                <br></br>
                Github: github.com/deyrudra/
                <br></br>
                Youtube: youtube.com/@deyrudra/
                <br></br>
                Email: deyrudra27@gmail.com
                <br></br>
              </h4>
            </div>
          </div>
      {/* </div> */}
    </main>
  );
}
