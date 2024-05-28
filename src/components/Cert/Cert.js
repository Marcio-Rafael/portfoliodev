import React, { Fragment, Component } from "react";

import styles from "./Cert.module.scss";

class Cert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "hide",
      name: props.name,
      title: props.title,
      desc: props.desc,
      href: props.href,
      id: props.id,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.value === "hide") {
      this.setState({
        value: "show"
      });
    } else {
      this.setState({ value: "hide" });
    }
  }

  render() {
    return (
      <Fragment>
        <div id={this.state.id}
          onClick={this.handleClick}
          className={`${styles.cert} ${styles[this.state.name]} ${
            styles[this.state.value]
          }`}
        >
          <div className={`${styles.certFront}`}>
            <div className={`${styles.certTop}`}>
              <div className={`${styles.image}`} />
            </div>
            <div className={`${styles.certBottom}`}>
              <h1>{this.state.title}</h1>
              <p>CORE</p>
            </div>
          </div>
          <div className={`${styles.certBack}`}>
            <h1>{this.state.title}</h1>
            <p>{this.state.desc}</p>
            <a target="_blank" href={this.state.href}>
              <button>Click For Details</button>
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Cert;
