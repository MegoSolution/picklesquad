import { useEffect, useRef, useState } from "react";

const Counter = () => {
  const counters = [
    { id: 1, icon: "golftio-users", value: 500, label: "Active Member" },
    { id: 2, icon: "golftio-trophy", value: 10, label: "Top Notch Field" },
    { id: 3, icon: "golftio-gym", value: 5, label: "Professional Coach" },
    { id: 4, icon: "golftio-pin-location", value: 2, label: "Location" },
  ];

  const [visible, setVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const incrementCounter = (start, end, duration, setCount) => {
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <section className="section counter" ref={counterRef}>
      <div className="container">
        <div className="row section__row">
          {counters.map(({ id, icon, value, label }) => {
            const [count, setCount] = useState(0);

            useEffect(() => {
              if (visible) {
                incrementCounter(0, value, 2000, setCount); // Duration is 2000ms
              }
            }, [visible]);

            return (
              <div key={id} className="col-sm-6 col-lg-3 section__col">
                <div className="counter__card">
                  <div className="counter__card-thumb">
                    <i className={icon}></i>
                  </div>
                  <div className="counter__card-content">
                    <h2>
                      <span>{count} +</span>
                    </h2>
                    <p className="primary-text">{label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Counter;
