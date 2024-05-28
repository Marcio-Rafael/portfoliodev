import React, { Fragment } from "react";

import styles from "./Paragraph.module.scss";

const Paragraph = props => {
  return (
    <Fragment>
      <p
        className={`${styles.paragraph} ${styles[props.size]} ${
          styles[props.extra]
        } ${styles[props.color]}`}
      >
        {props.children}
      </p>
    </Fragment>
  );
};
export default Paragraph;
