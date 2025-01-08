import Image from "next/image";
import Link from "next/link";
import about_thumb from "/public/images/about-thumb.jpg";

const AboutUs = () => {
  return (
    <section className="section about about--alt">
      <div className="container">
        <div className="row section__row align-items-center">
          <div className="col-lg-6 col-xl-6 section__col">
            <div className="section__content">
              <h5 className="section__content-sub-title">About us</h5>
              <h2 className="section__content-title">
                Let's Talk About Picklesquad<br/>and Our Journey
              </h2>
              <p className="section__content-text--aboutus">
              Founded in 2024 by a group of dynamic and energetic friends born after the 2000s—often referred to as "after 00's"—Picklesquad is a testament to how shared passions can blossom into something extraordinary. 
              Brought together by their sporty nature and mutual love for staying active, this group of friends initially met through recreational sports events and fitness meetups. 
              Their vibrant energy and adventurous spirit naturally gravitated them toward exploring new activities and trends in the sports world.
              </p>
              <div className="section__content-cta">
                <Link href="#club" scroll={false} className="btn btn-primary first-time-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 offset-xl-1 section__col">
            <div className="about__thumb wow fadeInUp" data-wow-duration="0.4s">
              <Image src={about_thumb} alt="Image" className="unset" />
              <div className="about__experience">
                <div className="about__experience-thumb">
                  <i className="golftio-hands"></i>
                </div>
                <h3>
                  <span>10 +</span>
                </h3>
                <p>Years of Friendship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
