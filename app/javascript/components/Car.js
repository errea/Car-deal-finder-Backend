import React from "react"
import PropTypes from "prop-types"
class Car extends React.Component {
  render () {
    return (
      <React.Fragment>
        Title: {this.props.title}
      </React.Fragment>
    );
  }
}

Car.propTypes = {
  title: PropTypes.string
};
export default Car
