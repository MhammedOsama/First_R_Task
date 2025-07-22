function PhotoButton({ photo }) {
  return (
    <button
      className='btn p-0 border-0 portfolio-box'
      data-bs-toggle='modal'
      data-bs-target='#exampleModalToggle'>
      <div className='position-relative w-100 h-100 overflow-hidden rounded'>
        <img
          src={photo}
          alt='portfolio item'
          className='img-fluid w-100 h-100 object-fit-cover rounded'
        />
        <div className='overlay d-flex align-items-center justify-content-center rounded'>
          <span className='text-white display-3 fw-bold'>+</span>
        </div>
      </div>
    </button>
  );
}

export default PhotoButton;
