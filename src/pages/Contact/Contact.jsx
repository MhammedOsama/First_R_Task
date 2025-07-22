import Title from "./../../components/Title/Title";
import "../Contact/Contact.css";

function Contact() {
  return (
    <>
      <div className='contact-section py-5 '>
        <div className='container text-center'>
          <Title
            title={"contact section"}
            color={"#2C3E50"}
            lineColor={"#2C3E50"}
          />
          <form className='w-75 mx-auto'>
            <div className='form-floating mb-4'>
              <input
                type='text'
                className='form-control custom-input'
                id='userName'
                placeholder='userName'
              />
              <label htmlFor='userName'>userName</label>
            </div>

            <div className='form-floating mb-4'>
              <input
                type='number'
                className='form-control custom-input'
                id='userAge'
                placeholder='userAge'
              />
              <label htmlFor='userAge'>userAge</label>
            </div>

            <div className='form-floating mb-4'>
              <input
                type='email'
                className='form-control custom-input'
                id='userEmail'
                placeholder='userEmail'
              />
              <label htmlFor='userEmail'>userEmail</label>
            </div>

            <div className='form-floating mb-4'>
              <input
                type='password'
                className='form-control custom-input'
                id='userPassword'
                placeholder='userPassword'
              />
              <label htmlFor='userPassword'>userPassword</label>
            </div>

            <button className='btn btn-success text-capitalize'>
              send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
