import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Main from "../Main/Main";

export default class App extends Component {
  render() {
    const {initialData} = this.props;
    return <Main initialData={initialData}/>;
  }
}


App.propTypes = {
  initialData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    preview: PropTypes.string
  }))
};
