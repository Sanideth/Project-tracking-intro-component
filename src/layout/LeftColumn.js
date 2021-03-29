import ButtonCta from "../components/ButtonCta";

const LeftColumn = () => (
  <div className="left-column">
    <div className="left-column__heading-container">
      <p className="left-column__heading-intro">
        <span className="left-column__span">New</span> Monograph Dashboard
      </p>
      <h1 className="heading-primary">Powerful Insights Into Your Team</h1>
      <p className="left-column__heading-middle">
        Project planning and time tracking <br />
        for agile teams
      </p>
    </div>
    <div className="left-column__cta-container">
      <ButtonCta />
      <p className="left-column__cta-text">To See A Preview</p>
    </div>
  </div>
);

export default LeftColumn;
