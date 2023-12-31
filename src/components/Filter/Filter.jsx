import PropTypes from 'prop-types';
import { FilterInput, FilterLabel } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={value} onChange={onChange} />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
