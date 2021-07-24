import PropTypes from 'prop-types';
import './Filter.scss';
const Filter = ({ value, onChange }) => {
  return (
    <label className="Filter">
      Find contacts by name
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
