import React from 'react'
import './Contact.css';
function Contact() {
  return (
    <>
    <div style={{textAlign:'center'}}><h1>Contact Us Today for Career Guidance</h1></div>
    <p>Reach out to our team for personalized career advice and support.</p>
     <div className='container2'>
        <div className='left3'>
         <form className='contact'>
            <div className='form-group'>
                <label>
                    First name:
                    <input type='text' name='firstname'/>
                </label>
            </div>
            <div className='form-group'>
                <label>
                    Email:
                    <input type='email' name='email'/>
                </label>
            </div>
            <div className='form-group'>
                <label>
                    Write your message here:
                    <textarea type='text'  name='address'></textarea>
                </label>
            </div>
            <button>Submit your information</button>
         </form>
        </div>
        <div className='right3'>
            <img src='https://images.unsplash.com/photo-1565383690591-1ee1b6582cef?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw4fHxqb2IlMjBwb3J0YWx8ZW58MHx8fHwxNzIyNDM2NDAzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=503&h=384'alt='img6'/>

        </div>
     </div>
    </>
  )
}

export default Contact