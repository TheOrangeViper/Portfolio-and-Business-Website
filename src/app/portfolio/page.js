import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import github from "../../../public/githubLogo.png";
import websiteScreenshot from "../../../public/websiteHomePageScreenshot.png";
import tribiteGIF from "../../../public/TribiteGIF.gif";
import panningCameraGIF from "../../../public/PanningCameraOpenCV.gif";
import shelfCAD from "../../../public/shelfCAD.png";
import shelfReal from "../../../public/shelfReal.jpg";

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
      <div className={styles.center}>
        <a
          href="https://github.com/deyrudra/hub"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Portfolio & Business Website
          </h2>
          <div className={styles.cardContent}>
            <div style={{maxWidth:"18rem"}}>
            A portfolio showcasing my diverse range of projects. Explore my past works with ease and convenience.
            <br></br>
            <br></br>
            Additionally, I offer personalized tutoring services, accessible through a streamlined appointment booking system. 
            </div>
            <Image src={github} height={100} width={100}></Image>
            <div style={{display: "flex", width:"100%", margin: "0.5rem", justifyContent:"center"}}>
              <Image style={{border:"2.5px solid black", boxShadow:"2px 2px 20px white", borderRadius:"15px"}} src={websiteScreenshot} height={240}></Image>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/deyrudra/PanningCameraProject"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Panning Camera Project
          </h2>
          <div className={styles.cardContent}>
            <div style={{maxWidth:"18rem"}}>
            Conversion of Canon Camera's live view as a solution to opencv's loss of tracking at far distances due to lack of optical zoom in desktop webcams.
            </div>
            <Image src={github} height={100} width={100}></Image>
            <Image style={{display: "flex", width:"100%", margin: "0.5rem", justifyContent:"center", border:"2px solid black", boxShadow:"1px 1px 5px white", borderRadius:"15px"}} src={panningCameraGIF} height={200} ></Image>
          </div>
        </a>
        <a
          href="https://github.com/deyrudra/Walking-Cane-Design/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Walking Cane Design Project
          </h2>
          <div className={styles.cardContent}>
            <div style={{maxWidth:"18rem"}}>
            A custom register that can be closed or opened through communication with a sensor which is plugged in separately (in a central wall), not near the vents. 
            <br></br>
            <br></br>
            The user communicates their preferences, and sets up the system through a mobile app to the sensor. 
            </div>
            <Image src={github} height={100} width={100}></Image>
            </div>
            <iframe style={{display: "flex", width:"100%", margin: "0.5rem", justifyContent:"center"}} width="330" height="200" src="https://www.youtube.com/embed/EWiK_8ppW7s?si=Ig-3Mt0xgu-M9gmN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          {/* <div className={styles.cardContent}>
            unity project for cane display!fdasfasfsa fdsfdsffda sfdas
          </div> */}
        </a>
        <a
          href="https://github.com/deyrudra/TRIBITE"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            TRIBITE
          </h2>
          <div className={styles.cardContent}>
            <div style={{maxWidth:"18rem"}}>
            The project is based on the Zero Hunger goal. It is designed to reduce food waste through meal plans. It consist of four icons, "Food Banks", "Inventory", "Favorite Meals" and "Grocery List".
            <br></br><br></br>
            Working with a few other people, I was the lead programmer and mentor.
            <br></br><br></br>
            Github Link:<br></br>https://github.com/deyrudra/TRIBITE
            </div>
            <Image style={{margin:"5px", border:"3.5px solid black", boxShadow:"1px 1px 15px white", borderRadius:"15px"}} src={tribiteGIF} height={280}></Image>
          </div>
        </a>
        <a
          href="/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Cabinet Shelves Design 
          </h2>
          <div className={styles.cardContent}>
            <div style={{maxWidth:"18rem"}}>
            Just some CAD design files... 
            <br></br>
            <br></br>
            One for each design, comes in three variations.
            </div>
              <Image src={github} height={100} width={100}></Image>
              <div style={{display: "flex", flexDirection: "row"}}>
                <Image style={{display: "flex", margin: "0.5rem", justifyContent:"center", border:"2px solid black", boxShadow:"1px 1px 5px white", borderRadius:"15px"}} src={shelfCAD} height={100}></Image>
                <Image style={{display: "flex", margin: "0.5rem", justifyContent:"center", border:"2px solid black", boxShadow:"1px 1px 5px white", borderRadius:"15px"}} src={shelfReal} height={100}></Image>
              </div>
          </div>
        </a>
        <a
          href="https://github.com/deyrudra/SmarterHeaterRegistry/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Smarter Heater Register
          </h2>
          <div className={styles.cardContent}>
            <div style={{maxWidth:"18rem"}}>
            A custom register that can be closed or opened through communication with a sensor which is plugged in separately (in a central wall), not near the vents. 
            <br></br>
            <br></br>
            The user communicates their preferences, and sets up the system through a mobile app to the sensor. 
            </div>
            <Image src={github} height={100} width={100}></Image>
          </div>
        </a>
        <a
          href="/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Heavy Movement Minigames Unity Project
          </h2>
          <div className={styles.cardContent}>
            <iframe width="390" height="220" style={{display: "flex", width:"100%", margin: "0.5rem", justifyContent:"center"}} src="https://www.youtube.com/embed/iRf9TPsRxcc?si=QOZHxUKZWyloDpkv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </a>
        <a
          href="http://www.youtube.com/@deyrudra"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Webapp Development Tutorials
          </h2>
          <div className={styles.cardContent}>
            <iframe width="390" height="220" style={{display: "flex", width:"100%", margin: "0.5rem", justifyContent:"center"}} src="https://www.youtube.com/embed/videoseries?si=hguDW8u_2IP74oDT&amp;list=PLWa51KwS8CLM1pmV7TAUVFUFXeC8LVP8h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </a>
      </div>
      {/* <div className={styles.grid}>
      </div> */}
    </main>
  );
}
