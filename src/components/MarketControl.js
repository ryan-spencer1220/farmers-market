import React from "react";

class MarketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProduce: false,
    };
  }
}

handleClick = () => {
  thistory.setState((prevState) => ({
    showProduce: !prevState.showProduce,
  }));
};

render;
export default MarketControl;
