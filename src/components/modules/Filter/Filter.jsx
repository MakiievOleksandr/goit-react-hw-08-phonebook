import PropTypes from 'prop-types';

import TextField from 'components/shared/components/TextField/TextField';

function Filter({ filter, onChangeFilter }) {
  return (
    <label>
      <TextField
        placeholder="Find contacts by name"
        type="text"
        value={filter}
        name="filter"
        onChange={onChangeFilter}
        autoComplete="off"
      />
    </label>
  );
}

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
