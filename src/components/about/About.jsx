import "./about.css";

export const About = () => {
  return (
    <div id="about">
      <div className="faint-heading">&lt; About /&gt;</div>
      <div className="about">
        <div className="about-info">
          <p style={{ padding: "0.5rem" }}>
            Hello! I'm <span className="hey">Chhakuli Zingare</span>
            <br />
            Love to creat seamless user experiences that keep visitors engaged
            and coming back.Seeking opportunities to apply my skills and grow as
            a web developer
          </p>
        </div>
        <div className="hero-img-container">
          <img
            className="about-img"
            width="100%"
            height="auto"
            src="https://res.cloudinary.com/dptfwcnro/image/upload/v1686819741/Portfolio/nwefl6tjnnunlhaizd55.png"
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};
