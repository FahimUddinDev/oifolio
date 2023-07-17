import CountUp from "react-countup";

function Skils() {
  return (
    <section className="skill-area">
      <div className="container custom-container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="skill-content">
              <h2 className="title">A design created to excite people</h2>
              <p>
                I’m Michal Škvarenina, a multi-disciplinary designer currently
                working at Wild and as a freelance designer. I specialize in
                building digital experiences and creating brands. You can find
                me
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="skill-box">
              <div className="skills">
                <div className="skill-item">
                  <div className="skill-header">
                    <h3 className="skill-title">Concept</h3>

                    <div className="skill-percentage">
                      <div className="count-box">
                        <span className="count-text">
                          <CountUp
                            end={68}
                            duration={2}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                          />
                        </span>
                        %
                      </div>
                    </div>
                  </div>

                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div
                        className="bar progress-line"
                        id="counter"
                        style={{ width: "68%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-header">
                    <h3 className="skill-title">Pre-production</h3>

                    <div className="skill-percentage">
                      <div className="count-box">
                        <span
                          className="count-text"
                          data-speed="2000"
                          data-stop="45"
                        >
                          <CountUp
                            end={45}
                            duration={2}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                          />
                        </span>
                        %
                      </div>
                    </div>
                  </div>

                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div
                        className="bar progress-line"
                        data-width="45"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-header">
                    <h3 className="skill-title">Ui design</h3>

                    <div className="skill-percentage">
                      <div className="count-box">
                        <span
                          className="count-text"
                          data-speed="2000"
                          data-stop="50"
                        >
                          <CountUp
                            end={50}
                            duration={2}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                          />
                        </span>
                        %
                      </div>
                    </div>
                  </div>

                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div
                        className="bar progress-line"
                        data-width="50"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skils;
