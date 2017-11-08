import React, {PropTypes} from 'react';
import SingleText from './SingleText';

const TextList = ({texts}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Author</th>
        <th>Title</th>
      </tr>
      </thead>
      <tbody>
      {texts.map(text =>
        <SingleText key={text.id} text={text}/>
      )}
      </tbody>
    </table>
  );
};

TextList.propTypes = {
  texts: PropTypes.array.isRequired
};

export default TextList;
