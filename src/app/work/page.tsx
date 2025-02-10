import Link from "next/link";

export default function WorkPage() {
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
                  WORK
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
                  This is a showcase of my best work in Software Engineering.
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
                  In today&apos;s rapidly advancing technological landscape, the
                  fields of digital design and development are in constant flux.
                  As a passionate professional, I embrace this dynamic
                  environment by continuously expanding my knowledge base,
                  mastering new technologies, and refining my skillset.
                </p>
              </div>
            </div>
          </div>
          <div className="section-right section-long">
            <div className="w-dyn-list">
              <div role="list" className="nav w-dyn-items">
                <div
                  role="listitem"
                  className="nav-item w-dyn-item"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                  }}
                >
                  <Link
                    href={"https://github.com/connector-inc"}
                    className="nav-link is-pink"
                  >
                    Connector
                  </Link>
                  <div className="nav-sub">
                    <div className="role">- Web Development</div>
                    <div className="badge">NEW</div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="nav-item w-dyn-item"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                  }}
                >
                  <Link
                    href={"https://github.com/powoftech/powoftech.github.io"}
                    className="nav-link is-pink"
                  >
                    Portfolio
                  </Link>
                  <div className="nav-sub">
                    <div className="role">- Web Development</div>
                    {/* <div className="badge">NEW</div> */}
                  </div>
                </div>
                <div
                  role="listitem"
                  className="nav-item w-dyn-item"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                  }}
                >
                  <Link
                    href={"https://github.com/powoftech/news_reader"}
                    className="nav-link is-pink"
                  >
                    News Reader
                  </Link>
                  <div className="nav-sub">
                    <div className="role">- Mobile Development</div>
                    <div className="badge">LEGACY</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
