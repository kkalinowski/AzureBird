import React from 'react';
import {PropTypes} from 'prop-types';
import TextInput from '../common/TextInput';

const TextForm = ({text, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Text</h1>
      <TextInput
        name="title"
        label="Title"
        value={text.title}
        onChange={onChange}
        error={errors.title}/>

      <TextInput
        name="authorId"
        label="Author"
        value={text.authorId}
        onChange={onChange} 
        error={errors.authorId}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

TextForm.propTypes = {
  text: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default TextForm;
