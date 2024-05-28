import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

import styles from "./Button.module.scss";

const Button = props => {
  if (props.link) {
    return (
      <Fragment>
        <Link to={props.link}>
          <button className={`${styles.button} ${styles[props.type]}`}>{props.children}</button>
        </Link>
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <a download={props.download} target={props.target ? props.target : '_blank'} href={props.path}>
          <button className={`${styles.button} ${styles[props.type]}`}>{props.children}</button>
        </a>
      </Fragment>
    );
  }
};
export default Button;
