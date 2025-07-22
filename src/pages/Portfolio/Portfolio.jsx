import PhotoButton from "../../components/Button/PhotoButton";
import ModalPortfolio from "../../components/Modal/ModalPortfolio";

import firstPhoto from "../../assets/poert1.png";
import secondPhoto from "../../assets/port2.png";
import thirdPhoto from "../../assets/port3.png";

import "./Portfolio.css";
import Title from "../../components/Title/Title";

function Portfolio() {
  return (
    <>
      <div className='portfolio-section text-center'>
        <div className='container'>
          <Title title={"portfolio component"} color={"#2C3E50"} />
          <div className='row g-4 mb-4'>
            <div className='col-md-4'>
              <PhotoButton photo={firstPhoto} />
            </div>
            <div className='col-md-4'>
              <PhotoButton photo={secondPhoto} />
            </div>
            <div className='col-md-4'>
              <PhotoButton photo={thirdPhoto} />
            </div>
          </div>
          <div className='row g-4'>
            <div className='col-md-4'>
              <PhotoButton photo={firstPhoto} />
            </div>
            <div className='col-md-4'>
              <PhotoButton photo={secondPhoto} />
            </div>
            <div className='col-md-4'>
              <PhotoButton photo={thirdPhoto} />
            </div>
          </div>

          <ModalPortfolio photo={firstPhoto} />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
