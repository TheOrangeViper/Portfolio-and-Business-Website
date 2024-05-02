import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import formImage from "../../../public/pdfExample.png";

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
      <div className={styles.heading}>
        <h2>
          Tutoring
        </h2>
      </div>
      <div className={styles.tutoringDesc}>
        <p style={{textAlign:"left"}}>🚀 Ready to dive into the world of coding? Starting May 29th, I'll be offering tutoring sessions for beginners of all ages in Python, Java, and C. Whether you're a curious student or an eager adult learner, this is your chance to kickstart your programming journey! Drop me an email for more info, and I'll get back to you ASAP. Let's unlock the power of code together! 🌟🖥️ </p>
        <br></br>
        <p style={{textAlign:"right"}}>📝 Ready to secure your spot? Don't forget to fill out the PDF form and shoot it over to me via email if you haven't already. Your registration awaits – let's get started on this exciting journey together! 🚀</p>
      </div>
      <div className={styles.center}>
        <div className={styles.card}>
            <h2>
            Step 1: Complete the PDF form 📝
            </h2>
            <div className={styles.attachment}>
              <h4 style={{fontWeight:"500", color:"rgb(42, 45, 46)", textAlign:"center"}}>
                Complete the Registration Form below and send it to: <mark style={{color:"black", fontWeight:"650"}}>rudracodinginstructor@gmail.com</mark>.<br></br><br></br>
                To download the form, simpliy click the attachment below:<br></br>
              </h4>
              
              {/* PUT THE FORM HERE AND MAKE IT CLICKABLE TO DOWNLOAD */}
              
              <a href={"/pdfExample.pdf"}>
                <Image src={formImage} width={150} height={195} objectFit="cover" className={styles.attachmentImage}></Image>
              </a>
              <br></br>

              <h4 style={{fontWeight:"500", fontSize:"1rem", color:"rgb(42, 45, 46)", textAlign:"left"}}>
                <em>* You must complete this form 24 hours before your first booking.</em>
              </h4>
            </div>
        </div>
        <div className={styles.card}>
            <h2> 
            Step 2: Book your appointment 📅
            </h2>
            <div style={{fontWeight:"500", color:"rgb(42, 45, 46)", textAlign:"center"}}>
              <h4>
                Book your appointment here with Google's appointment scheduler.
              </h4>
                <Link href="/business/booking">
                  <div className={styles.card2}>
                    <p className={styles.buttonText}>
                      Make Appointment 📅
                    </p>
                  </div>
                </Link>
                <h3 style={{fontSize:"0.95rem", textAlign:"left", fontWeight:"300"}}>Booking is easier than ever with Google's Scheduler, just fill out your name, email, and select the time of when you want to meet.</h3>
            </div>
        </div>
        <div className={styles.card} style={{maxWidth:"23.5rem"}}>
            <h2 style={{color:"darkred", fontWeight:"500"}}>
              <p style={{color:"rgb(0,0,0)", fontWeight:"650"}}>Need Assistance?</p> Contact me!
            </h2>
            <p style={{fontSize:"1rem"}}>Want to book a programming session with me? Just <Link href="/business/booking"><u>click here</u></Link> or click Make Appointment in Step 2!</p>
            <br></br>
            <p style={{fontSize:"1rem"}}>Need to contact me? Send me an email at: <mark style={{color:"black", fontWeight:"650"}}>rudracodinginstructor@gmail.com</mark>.</p>
            <br></br>
            <h3 style={{fontSize:"1.2rem", textAlign:"left", fontWeight:"620"}}>Frequently Asked Questions (FAQ): </h3>
            <h3 style={{fontSize:"1rem", textAlign:"left", fontWeight:"480"}}>How do payments work?</h3>
            <h3 style={{fontSize:"1rem", textAlign:"left", fontWeight:"300"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• I take <b>E-Transfer</b> or <b>Paypal</b>! </h3>
            <br></br>
            <h3 style={{fontSize:"1rem", textAlign:"left", fontWeight:"480"}}>How much does it cost?</h3>
            <h3 style={{fontSize:"1rem", textAlign:"left", fontWeight:"300"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Price depends on your situation and how much content is covered, email me for a quota. </h3>
            <br></br>
            <h3 style={{fontSize:"1rem", textAlign:"left", fontWeight:"480"}}>Where did I get my education?</h3>
            <h3 style={{fontSize:"1rem", textAlign:"left", fontWeight:"300"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• I'm an undergraduate at the University of Toronto, for Computer Engineering 🙂🔨</h3>
          </div>
      </div>

      <div className={styles.grid}>
        
      </div>
    </main>
  );
}
