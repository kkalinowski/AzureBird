import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as textActions from '../../actions/textActions';
import TextForm from './TextForm';

export class ManageTextPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      text: Object.assign({}, props.text),
      errors: {},
      saving: false
    };

    this.updateTextState = this.updateTextState.bind(this);
    this.saveText = this.saveText.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.text.id != nextProps.text.id) {
      // Necessary to populate form when existing text is loaded directly.
      this.setState({text: Object.assign({}, nextProps.text)});
    }
  }

  updateTextState(event) {
    const field = event.target.name;
    let text = Object.assign({}, this.state.text);
    text[field] = event.target.value;
    return this.setState({text: text});
  }

  textFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.text.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }


  saveText(event) {
    event.preventDefault();

    if (!this.textFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    this.props.actions.saveText(this.state.text)
      .then(() => this.redirect())
      .catch(() => {
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    this.context.router.push('/texts');
  }

  render() {
    return (
      <TextForm
        onChange={this.updateTextState}
        onSave={this.saveText}
        text={this.state.text}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageTextPage.propTypes = {
  text: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageTextPage.contextTypes = {
  router: PropTypes.object
};

function getTextById(texts, id) {
  const text = texts.filter(text => text.id == id);
  if (text.length) return text[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const textId = ownProps.params.id; // from the path `/text/:id`

  let text = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if (textId && state.texts.length > 0) {
    text = getTextById(state.texts, textId);
  }

  return {
    text: text
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(textActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTextPage);
