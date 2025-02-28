import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <div className="container">
        <div className="nav-left">
          <div className="nav-left-item">
            <Link href={"/"} className="nav-left-link">
              HOME
            </Link>
          </div>

          <div className="nav-line"></div>
          <div className="nav-left-item nav-copyright">
            <div className="copyright">©/{new Date().getFullYear()}</div>
          </div>
        </div>

        <div className="wrapper">
          <div className="section-left section-long">
            <div className="content">
              <div className="header-mask">
                <h1
                  className="header header-large align-left"
                  style={{
                    transform:
                      "translate3d(0px, -2vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  About
                </h1>
              </div>
              <p className="description-static description-long">
                <span className="quote">
                  I&apos;m Phuong. An engineer, enthusiast, and problem solver.
                </span>
                I am a software engineering student with a deep passion for
                software development and technology. My journey in tech began at
                a young age, and over the years, I have honed my skills in
                various programming languages and frameworks. I thrive on
                solving complex problems and enjoy the process of turning ideas
                into functional and efficient software solutions. My enthusiasm
                for technology drives me to continuously learn and stay updated
                with the latest advancements in the field.
                <br />
                <br />
                In addition to my technical skills, I am a strong advocate for
                collaboration and teamwork. I believe that the best solutions
                come from diverse perspectives and open communication. I have
                worked on several projects, both individually and as part of a
                team, where I have demonstrated my ability to adapt, learn
                quickly, and contribute effectively. My goal is to leverage my
                skills and passion to create innovative software that can make a
                positive impact on people&apos;s lives.
              </p>
              <br />
              <Link
                href={
                  "https://drive.google.com/file/d/1jMi20HMqwC49ucpiB0jRLySXEaz8Dmhq/view?usp=sharing"
                }
                className="button w-button"
              >
                My résumé
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
