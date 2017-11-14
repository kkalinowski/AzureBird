import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TextList from './TextList'
import {browserHistory} from 'react-router';
import * as textActions from '../../actions/textActions';

class TextsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddTextPage = this.redirectToAddTextPage.bind(this);
  }

  redirectToAddTextPage() {
    browserHistory.push('/text');
  }

  render() {
    const {texts} = this.props

    return (
      <div>
        <h1>Texts:</h1>
        <TextList texts={texts}/>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddTextPage}/>
      </div>
    );
  }
}

TextsPage.propTypes = {
  texts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    texts: state.texts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(textActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextsPage);