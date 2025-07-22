function Footer() {
  return (
    <>
      {/* Main footer */}
      <div className='py-5 text-white' style={{ backgroundColor: "#2C3E50" }}>
        <div className='container'>
          <div className='row text-center'>
            {/* Location */}
            <div className='col-md-4 mb-4 mb-md-0'>
              <h5 className='text-uppercase fw-bold'>Location</h5>
              <p className='mb-0'>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>

            {/* Around the Web */}
            <div className='col-md-4 mb-4 mb-md-0'>
              <h5 className='text-uppercase fw-bold'>Around the Web</h5>
              <div className='d-flex justify-content-center gap-3 mt-2'>
                <a
                  href='#'
                  className='btn btn-outline-light btn-social rounded-circle'>
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a
                  href='#'
                  className='btn btn-outline-light btn-social rounded-circle'>
                  <i className='fab fa-twitter'></i>
                </a>
                <a
                  href='#'
                  className='btn btn-outline-light btn-social rounded-circle'>
                  <i className='fab fa-linkedin-in'></i>
                </a>
                <a
                  href='#'
                  className='btn btn-outline-light btn-social rounded-circle'>
                  <i className='fas fa-globe'></i>
                </a>
              </div>
            </div>

            {/* About */}
            <div className='col-md-4'>
              <h5 className='text-uppercase fw-bold'>About Freelancer</h5>
              <p className='mb-0'>
                Freelance is a free to use, licensed Bootstrap theme created by
              </p>
              <p className='mb-0'>Route</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className='py-3 text-center text-white'
        style={{ backgroundColor: "#1a252f" }}>
        <small>Copyright © Your Website 2021</small>
      </div>
    </>
  );
}

export default Footer;
