import WorkCardV2 from "../Cards/WorkCardV2";

function WorkHome3() {
  return (
    <section className="working-progress-area">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-title">
              <h3 className="title">What I Do!</h3>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="section-text">
              <p>
                I’m Michal Škvarenina, a multi-disciplinary designer currently
                working at Wild and as a freelance designer. I specialize in
                building digital experiences and creating brands. You can find
                me
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <WorkCardV2
              imgLeft={true}
              img="assets/images/work-1.jpg"
              category="Branding"
              title="Growing Brands Through Strategy"
              link="#"
            />
            <WorkCardV2
              img="assets/images/work-2.jpg"
              category="Branding"
              title="Growing Brands Through Strategy"
              link="#"
            />
            <WorkCardV2
              imgLeft={true}
              img="assets/images/work-3.jpg"
              category="Branding"
              title="Growing Brands Through Strategy"
              link="#"
            />
            <WorkCardV2
              img="assets/images/work-4.jpg"
              category="Branding"
              title="Growing Brands Through Strategy"
              link="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkHome3;
