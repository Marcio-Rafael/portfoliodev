import React, { Fragment } from "react";

import styles from "./Menu.module.scss";

const Menu = (props) => {
  return (
    <Fragment>
      <div
        className={`${styles.menu} ${props.isOpen ? styles.isOpen : ""}`}
        tabIndex="0"
        onClick={props.handleClick}
        onBlur={props.handleBlur}
      >
        <div readOnly={true} contentEditable="false" />
        <div readOnly={true} contentEditable="false" />
        <div readOnly={true} contentEditable="false" />
      </div>
      <div className={`${styles.child}`}>{props.children}</div>
    </Fragment>
  );
};
export default Menu;
