import React from "react";
import Schedule from "./Schedule";

class ScheduleControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSchedule: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      showSchedule: !prevState.showSchedule,
    }));
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.showSchedule) {
      currentlyVisibleState = <Schedule />;
      buttonText = "Hide Schedule";
    } else {
      buttonText = "See Schedule";
    }
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>{buttonText}</button>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default ScheduleControl;
