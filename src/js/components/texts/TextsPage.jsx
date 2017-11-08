import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TextList from './TextList'

class TextsPage extends React.Component {
  render() {
    const {texts} = this.props

    return (
      <div>
        <h1>Texts:</h1>
        <TextList texts={texts}/>
      </div>
    );
  }
}

TextsPage.propTypes = {
  texts: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    texts: state.texts
  };
}

export default connect(mapStateToProps)(TextsPage);