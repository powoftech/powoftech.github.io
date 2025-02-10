import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <div className="container">
        <div className="nav-left">
          <div className="nav-left-item">
            <Link href={"/"} className="nav-left-link is-pink">
              HOME
            </Link>
          </div>

          <div className="nav-line is-pink"></div>
          <div className="nav-left-item nav-copyright">
            <div className="copyright">©/{new Date().getFullYear()}</div>
          </div>
        </div>

        <div className="wrapper">
          <div className="section-left">
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
                  Hello.
                </h1>
              </div>
              <div className="description-mask">
                <p
                  className="description"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  Email:{" "}
                  <Link
                    href={"mailto:powoftech@gmail.com"}
                    className="link is-pink"
                  >
                    powoftech@gmail.com
                  </Link>
                  <br />
                  On the Internet:{" "}
                  <Link
                    href={"https://www.linkedin.com/in/powoftech/"}
                    className="link is-pink"
                  >
                    LinkedIn
                  </Link>{" "}
                  /{" "}
                  <Link
                    href={"https://github.com/powoftech/"}
                    className="link is-pink"
                  >
                    GitHub
                  </Link>{" "}
                  /{" "}
                  <Link
                    href={"https://www.facebook.com/powoftech/"}
                    className="link is-pink"
                  >
                    Facebook
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
