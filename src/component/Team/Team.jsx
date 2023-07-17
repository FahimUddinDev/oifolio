import ProtoTypes from "prop-types";
import TeamCard from "../Cards/TeamCard";
import team from "../../data/Team";

function Team({ className }) {
  return (
    <section className={`team-area ${className ? className : "pt-120 pb-120"}`}>
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h3 className="title">Meet the powerful team</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {team?.map((teamMember) => (
            <div
              className="col-lg-4 col-md-4 animated wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="500ms"
              key={teamMember.id}
            >
              <TeamCard teamMember={teamMember} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Team.propTypes = {
  className: ProtoTypes.string,
};

export default Team;
