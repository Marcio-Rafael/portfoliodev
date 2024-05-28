import React, { Fragment } from "react";

import styles from "./Title.module.scss";

const Title = props => {
  return (
    <Fragment>
      <h1 className={`${styles.title} ${styles[props.size]}`}>
        {props.children}
      </h1>
    </Fragment>
  );
};

export default Title;
