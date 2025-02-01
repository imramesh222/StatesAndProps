import React from 'react';
import PropTypes from 'prop-types';

const Student = ({ name, age = 24, isPresent = true }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Present: {isPresent ? "Yes" : "No"}</p>
    </div>
  );
};

// PropTypes Validation
Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isPresent: PropTypes.bool
};

export default Student;
