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
              <Image src={error} alt="Error - Page Not Found" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="error__inner-content text-center">
              <h2>Oops! Looks like you're out of bounds!</h2>
              <p>
                The page you're looking for might have been moved, removed, or is
                temporarily unavailable. Don't worry, there's always a way back to
                the court!
              </p>
              <div className="section__cta">
                <Link href="/" className="cmn-button">
                  Return to Homepage
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
