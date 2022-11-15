import { SearchFrom } from 'components/SearchForm/SearchForm';
// import PropTypes from 'prop-types';
import { Srchbar } from './Searchbar.styled';

export const Searchbar = ({ onSearch }) => (
  <Srchbar>
    <SearchFrom onSearch={onSearch} />
  </Srchbar>
);
