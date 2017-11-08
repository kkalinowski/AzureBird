import React from 'react';
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
  text: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default TextForm;
