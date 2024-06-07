/* eslint-disable no-unused-vars */
import React from 'react'
import bseparator from "../../assets/images/separatorBlack.svg";


const Contact = () => {
  return (
	<section id="contact" className="contact-section">
          <div className="heading">
            <h2>CONTACT</h2>
          </div>
          <p>
            My name is Tomasz Gajda, I’m a third year Applied Computer Science
            student at AGH University of Science and Technology in Cracow,
            Poland.
          </p>
          <img src={bseparator} className="separator" alt="" />

          <form action="">
            <input type="text" value="" placeholder="ENTER YOUR NAME*" />
            <input type="text" value="" placeholder="ENTER YOUR EMAIL*" />
            <input type="text" value="" placeholder="PHONE NUMBER*" />
            <textarea name="" value="" id="" cols="30" rows="10">
              YOUR MESSAGE*
            </textarea>
            <button type="button" className="btn btn-submit">
              SUBMIT
            </button>
          </form>
        </section>
  )
}

export default Contact