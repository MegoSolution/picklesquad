import Image from "next/image";
import Link from "next/link";
import error from "/public/images/error.png";

export default function Error() {
  return (
    <section className="section error wow fadeInUp">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 col-xl-8">
            <div className="error__inner">
              <Image src={error} alt="Error" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="error__inner-content text-center">
              <h2>Oops! Page Not Found</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="section__cta">
                <Link href="/" className="cmn-button">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Error.getLayout = function getLayout(page) {
  return <>{page}</>;
};
