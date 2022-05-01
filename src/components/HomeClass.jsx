import React, { Component } from "react";
import withNavigate from "./withNavigate";
import Pagination from "./Pagination";

class HomeClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skip: 0,
      activePage: 1,
    };

    this.updateSkip = this.updateSkip.bind(this);
    this.updateActivePage = this.updateActivePage.bind(this);
  }

  updateSkip(skip) {
    this.setState({ skip: skip });
  }

  updateActivePage(active) {
    if (active !== this.state.activePage) {
      this.setState({ activePage: active });
    }
  }

  render() {
    return (
      <div>
        <div>HomeClass</div>
        <button onClick={() => this.props.navigate("/desc")}>
          DESCRIPTION
        </button>
        <Pagination
          itemsCount={10}
          itemsPerPage={2}
          skip={this.state.skip}
          updateSkip={this.updateSkip}
          updateActivePage={this.updateActivePage}
        />
      </div>
    );
  }
}

export default withNavigate(HomeClass);
