import React, { Fragment } from "react";

import styles from "./Pane.module.scss";

const Pane = (props) => {
  return (
    <Fragment>
      <a
        style={(props.style, { display: "block" })}
        target={props.target} href={props.href}
        className={`${styles.pane}`}
      >
        <div className={`${styles.paneFront} ${styles[props.type]}`} />
        {/* <div
          className={`${styles.paneBack} ${styles[props.desc]} ${
            styles[props.color]
          }`}
        >
          <p>{props.desc}</p>
          <a target={props.target} href={props.href}>
            <button id={props.type}> Visit Website -></button>
          </a>
        </div> */}
      </a>
    </Fragment>
  );
};
export default Pane;
