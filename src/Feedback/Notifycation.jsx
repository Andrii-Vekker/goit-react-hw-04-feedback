import PropTypes from 'prop-types';

export default function Notifycation({ message }) {
  return (
    <>{message}</>
  );
};


Notifycation.propTypes = {
  message: PropTypes.string.isRequired
};