function Modal({ photo }) {
  return (
    <div
      className='modal fade'
      id='exampleModalToggle'
      aria-hidden='true'
      aria-labelledby='exampleModalToggleLabel'
      tabIndex='-1'>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <img src={photo} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Modal;
