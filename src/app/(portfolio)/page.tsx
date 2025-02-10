import Link from "next/link";

export default function PortfolioPage() {
  return (
    <>
      <div className="container">
        <div className="nav-left">
          <div className="nav-left-item">
            <Link
              href={"https://www.linkedin.com/in/powoftech/"}
              className="nav-left-link"
            >
              LI
            </Link>
          </div>
          <div className="nav-left-item">
            <Link
              href={"https://github.com/powoftech"}
              className="nav-left-link"
            >
              GH
            </Link>
          </div>
          <div className="nav-left-item">
            <Link
              href={"https://www.facebook.com/powoftech"}
              className="nav-left-link"
            >
              FB
            </Link>
          </div>
          <div className="nav-line"></div>
          <div className="nav-left-item nav-copyright">
            <div className="copyright">©/{new Date().getFullYear()}</div>
          </div>
        </div>

        <div className="wrapper w-clearfix">
          <div className="section-left">
            <div className="content content-main">
              <div className="header-mask">
                <h1
                  className="header swipe-up"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  Phuong Dang
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
                  Information Technology Student / Software Engineer
                </p>
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
                  Currently seeking new opportunities as a Software Engineer
                  Intern.
                </p>
              </div>
              <div className="description-mask">
                <p
                  className="description"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    fontStyle: "italic",
                  }}
                >
                  This portfolio is an design clone from{" "}
                  <Link
                    href={"https://www.lauren-waller.com/"}
                    className="_blank"
                  >
                    Lauren Waller
                  </Link>
                  . Thank you for the inspiration 🙏.
                </p>
              </div>
            </div>
          </div>

          <div className="section-right">
            <div className="nav">
              <div
                className="nav-item"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                }}
              >
                <Link href={"/work"} className="nav-link">
                  Work
                </Link>
              </div>
              <div
                className="nav-item"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                }}
              >
                <Link href={"/about"} className="nav-link">
                  About
                </Link>
              </div>
              <div
                className="nav-item"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                }}
              >
                <Link href={"/contact"} className="nav-link">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
