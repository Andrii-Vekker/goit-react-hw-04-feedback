import { ControlsBox, BtnStyles } from "./Controls.styled";
import PropTypes from 'prop-types';

export default function Controls({ onIncrement, options }) {
    return (
        <ControlsBox>
            {options.map((option) => <BtnStyles key={option} type="button" name={option} onClick={onIncrement}>{option}</BtnStyles>)}
        </ControlsBox>
  );
};


Controls.propTypes = {
    onIncrement: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,

};