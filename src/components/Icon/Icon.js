import React, { Fragment } from "react";

import styles from "./Icon.module.scss";

const Icon = props => {
  return (
    <Fragment>
      <a target='_blank' rel="noopener noreferrer" href={props.href}>
        <div className={`${styles.icon} ${styles[props.type]}`}>
          <div className={`${styles.iconInner} ${styles[props.name]}`} />
        </div>
      </a>
    </Fragment>
  );
};
export default Icon;
