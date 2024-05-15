import Link from "next/link";

const PageBannerTwo = ({ pageName, parentName, childParent }) => {
  return (
    <section
      className="page-banner-area overlay pt-150 rpt-100 pb-100 rpb-100 rel z-1 bgs-cover text-center"
      style={{ backgroundImage: "url(assets/images/banner/banner-bg.jpg)" }}
    >
      <div className="container">
        <div className="banner-inner rpt-10">
          <h2 className="page-title wow fadeInUp delay-0-2s">{pageName}</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
              <li className="breadcrumb-item">
                <Link legacyBehavior href="/">
                  Home
                </Link>
              </li>
              {/* <li className="breadcrumb-item">{parentName}</li>
              <li className="breadcrumb-item">{childParent}</li> */}
              <li className="breadcrumb-item active">{pageName}</li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};
export default PageBannerTwo;
