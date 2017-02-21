import React, { Component } from 'react';

class UserInteractions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interactionRecord: []
    }
  }
  componentWillMount() {

  }

  componentWillUnmount() {

  }

  handleClick = () => {
    console.log(this);
  }

  render() {

    return (
      <div>
      <h1>User Interactions</h1>
      <button onClick={this.handleClick}>hello</button>
      </div>
    );
  }
}

export default UserInteractions;
