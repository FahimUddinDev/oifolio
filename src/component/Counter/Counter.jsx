import { useEffect } from "react";
import CountUp from "react-countup";

function Counter() {
  return (
    <div className="counter-area">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="counter-item text-center mt-30">
              <h3 className="title">
                <span className="counter">
                  <CountUp
                    end={21}
                    duration={2}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </span>
                k
              </h3>
              <p>PROJECTS</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="counter-item text-center mt-30">
              <h3 className="title counter">
                <CountUp
                  end={623}
                  duration={2}
                  scrollSpyOnce={true}
                  enableScrollSpy={true}
                />
              </h3>
              <p>CLIENTS</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="counter-item text-center mt-30">
              <h3 className="title">
                <span className="counter">
                  <CountUp
                    end={2.1}
                    duration={2}
                    decimals={1}
                    scrollSpyOnce={true}
                    enableScrollSpy={true}
                  />
                </span>
                M
              </h3>
              <p>GITHUB PULLS</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="counter-item text-center mt-30">
              <h3 className="title counter">
                <CountUp
                  end={56}
                  duration={2}
                  scrollSpyOnce={true}
                  enableScrollSpy={true}
                />
              </h3>
              <p>AWARDS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
