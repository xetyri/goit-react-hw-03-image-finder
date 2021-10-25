import s from './Button.module.css';
import PropTypes from 'prop-types';

function Button({getMore}) {
  return (
    <button type="button" className={s.Button} onClick={getMore}>
      Load more
    </button>
  );
}

Button.propTypes = {
  getMore: PropTypes.func.isRequired,
};

export default Button;
