import ProtoTypes from "prop-types";

function TeamCardV2({ teamMember }) {
  const { img, facebook, twitter, linkedin, gPlus, name, position } =
    teamMember;
  return (
    <div className="col-lg-4 col-md-4">
      <div
        className="team-item mb-30 animated wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay="300ms"
      >
        <div className="team-thumb">
          <img src={img} alt="" />
        </div>
        <div className="team-content">
          <h4 className="title">{name}</h4>
          <span>{position}</span>
          <div className="social">
            <ul>
              <li>
                <a href={facebook}>
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href={twitter}>
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href={linkedin}>
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href={gPlus}>
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

TeamCardV2.propTypes = {
  teamMember: ProtoTypes.object,
};

export default TeamCardV2;
