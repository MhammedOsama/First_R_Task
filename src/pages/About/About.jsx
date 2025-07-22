import Title from "../../components/Title/Title";

function About() {
  return (
    <div
      className='vh-100 d-flex align-items-center justify-content-center text-center'
      style={{ backgroundColor: "#1ABC9C" }}>
      <div>
        <Title color={"white"} title={"about component"} />
        <div className='container text-center'>
          <div className='row text-white text-start'>
            <div className='col-md-6'>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
            <div className='col-md-6'>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
