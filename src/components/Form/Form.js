import React, { Fragment } from "react";

import styles from "./Form.module.scss";



const Form = props => {
  return (
    <Fragment>
      <form
        method="POST"
        action="https://formspree.io/rrojaski@gmail.com"
        className={`${styles.form}`}
      >
        <div className={`${styles.name}`}>
          <label>Name</label>
          <input type="test" name="name" required />
        </div>
        <div className={`${styles.email}`}>
          <label>Email</label>
          <input type="email" name="_replyto" required />
        </div>
        <div className={`${styles.message}`}>
          <label>Message</label>
          <textarea name="message" required />
        </div>
        <button>Submit</button>
      </form>
    </Fragment>
  );
};
export default Form;
