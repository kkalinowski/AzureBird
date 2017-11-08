import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const SingleText = ({text}) => {
  return (
    <tr>
      <td><Link to={'/text/' + text.id}>Link</Link></td>
      <td>{text.authorId}</td>
      <td>{text.title}</td>
    </tr>
  );
};

SingleText.propTypes = {
  text: PropTypes.object.isRequired
};

export default SingleText;
