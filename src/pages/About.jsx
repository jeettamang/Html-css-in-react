import "../css/about.css";

const About = () => {
  return (
    <div>
      <div className="about-1">
        <h1>Our Story</h1>
        <p>
          Make learning and teaching more effective with active <br />
          participation and student collaboration
        </p>
      </div>
      <div className="about-2">
        <h2>Background</h2>
        <p style={{ fontSize: 18, paddingLeft: 20 }}>
          Sipalaya empowers professionals and students in the tech industry with
          tailored, top-notch training programs. Our expert <br />
          instructors, with extensive industry experience, provide personalized
          support. Offering interactive, hands-on courses covering the <br />
          latest technologies, we’ve helped countless individuals elevate their
          careers. Join us to achieve your goals confidently.
        </p>
        <h2>Mission &amp; Vision</h2>
        <h5 className="h5" style={{ color: "white" }}>
          Mission:
        </h5>
        <ol className="list">
          <li>
            Provide high-quality, comprehensive IT training and development
            programs.
          </li>
          <li>
            Empower professionals and students to advance their careers and
            achieve their goals.
          </li>
        </ol>
        <h5 className="h5" style={{ color: "white" }}>
          Vision:
        </h5>
        <ol className="list">
          <li>
            Become the leading provider of IT training and development programs.
          </li>
          <li>
            Recognized for our commitment to excellence and helping students
            succeed in the tech industry.
          </li>
        </ol>
        <h5 className="h5" style={{ color: "white" }}>
          Approach:
        </h5>
        <ol className="list">
          <li>Foster a positive, supportive learning environment.</li>
          <li>
            Keep pace with the latest technologies and industry best practices.
          </li>
          <li>
            Equip students with necessary tools and resources for success.
          </li>
          <li>
            Believe in and support every student’s potential for success in the
            tech industry.
          </li>
        </ol>
        <h1 style={{ textAlign: "center", color: "#ff00ff", marginTop: 70 }}>
          Things that make us proud
        </h1>
        <div className="about-3">
          <div className="proud">
            <h2>The success of our students</h2>
            <p>
              Empowering success fuels our purpose. Proudly <br />
              guiding countless professionals and students to <br />
              reach their full potential.
            </p>
          </div>
          <div className="proud">
            <h2>The quality of our courses</h2>
            <p>
              We offer top-notch, personalized courses led by <br />
              industry experts. Our interactive <br />
              approach ensures optimal learning and skill development <br />
              for every student.
            </p>
          </div>
          <div className="proud">
            <h2>The support of our team</h2>
            <p>
              Our dedicated team ensures student success. <br />
              Proudly supported by talented and passionate <br />
              individuals.
            </p>
          </div>
          <div className="proud">
            <h2>Our reputation in the industry</h2>
            <p>
              We've earned trust as a leading IT training <br />
              provider. Proud of our industry reputation and <br />
              student impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
