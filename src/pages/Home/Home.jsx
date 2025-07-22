import mainPhoto from "../../assets/avataaars.svg";
import Title from "../../components/Title/Title";

function Home() {
  return (
    <div
      className='vh-100 d-flex align-items-center justify-content-center text-center'
      style={{ backgroundColor: "#1ABC9C" }}>
      <div>
        <img
          src={mainPhoto}
          alt='Main'
          className='img-fluid mb-4'
          style={{ width: "250px" }}
        />

        <Title color={"white"} title={"Start Framework"} />
        <p className='text-white fs-6'>
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </div>
  );
}

export default Home;
