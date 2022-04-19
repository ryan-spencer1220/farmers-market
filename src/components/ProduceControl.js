import React from "react";
import Produce from "./Produce";

class ProduceControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProduce: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      showProduce: !prevState.showProduce,
    }));
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.showProduce) {
      currentlyVisibleState = <Produce />;
      buttonText = "Hide Proudce";
    } else {
      buttonText = "See Proudce";
    }
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>{buttonText}</button>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default ProduceControl;
