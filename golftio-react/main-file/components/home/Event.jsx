import eventData from "@/data/EventData";
import Link from "next/link";
import EventCard from "../card/EventCard";

const Event = () => {
  return (
    <section className="section event wow fadeInUp" data-wow-duration="0.4s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="section__header--secondary__content">
                    <h5>Event</h5>
                    <h2>Our upcoming events</h2>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="section__header--secondary__cta">
                    <Link href="/event" className="cmn-button">
                      See All Event
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center section__row">
          {eventData?.slice(0, 2).map((itm) => (
            <div key={itm.id} className="col-sm-10 col-md-6 section__col">
              {/* Event Card */}
              <EventCard data={itm} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
