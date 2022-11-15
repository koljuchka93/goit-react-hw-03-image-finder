import { useState } from 'react';
import { SchForm, SchFormBtn, SchFormInpt } from './SearchForm.styled';

export const SearchFrom = ({ onSearch }) => {
    const [query, setQuery] = useState('');
  
    // Спостергігає за інпутом і пише значння в стейт
    const handleSearchInput = e => {
      const { value } = e.currentTarget;
  
      setQuery(value);
    };
  
    // Спостерігає за відправкою і віддає значення у зовнішній компонент
    const handleSubmit = e => {
      e.preventDefault();
  
      // Забороняє відправку пустого інпуту
      if (!query.trim()) return;
  
      // Віддати дані зовнішньому компоненту
      onSearch(query);
  
      resetForm();
    };
  
    // Скидає поле після відправки
    const resetForm = () => setQuery('');
  
    return (
      <SchForm onSubmit={handleSubmit}>
        <SchFormBtn type="submit">
          <span>GO!</span>
        </SchFormBtn>
  
        <SchFormInpt
          type="text"
          name="query"
          value={query}
          onChange={handleSearchInput}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SchForm>
    );
  };