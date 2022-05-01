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

  componentDidMount() {
    console.log(this.props.location);
    const currentPage = this.props.location.pathname.split("/")[1];
    if (this.props.location.pathname !== "/" && currentPage) {
      // this.props.navigate("/" + currentPage);
      this.setState({ activePage: Number(currentPage) });
    }
  }

  // shouldComponentUpdate() {
  //   console.log("should update");
  //   return false;
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log("update");
    if (prevState.activePage !== this.state.activePage) {
      this.props.navigate("/" + this.state.activePage);
    }
  }

  updateSkip(skip) {
    if (this.state.skip !== skip) {
      this.setState({ skip: skip });
    }
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
        <button
          onClick={() =>
            this.props.navigate("/desc", {
              state: { prevPath: "/" + this.state.activePage },
            })
          }
        >
          DESCRIPTION
        </button>
        <Pagination
          itemsCount={10}
          itemsPerPage={2}
          skip={this.state.skip}
          updateSkip={this.updateSkip}
          activePage={this.state.activePage}
          updateActivePage={this.updateActivePage}
        />
      </div>
    );
  }
}

export default withNavigate(HomeClass);
