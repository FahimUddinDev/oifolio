import team from "../../data/Team";
import TeamCardV2 from "../Cards/TeamCardV2";

function TeamV2() {
  return (
    <section className="team-area pt-145 ">
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
            <TeamCardV2 teamMember={teamMember} key={teamMember.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamV2;
