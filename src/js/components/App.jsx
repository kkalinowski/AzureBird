import React from 'react';
import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import {Header} from './common/Header';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>AzureBird</h1>
        {/* <Header/> */}
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

// function mapStateToProps(state) {
//   return {
//     loading: state.ajaxCallsInProgress > 0
//   };
// }

export default App;