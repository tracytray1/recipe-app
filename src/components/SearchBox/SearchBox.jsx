import './SearchBox.css';
import { Search } from 'lucide-react';

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className='search-container'>
      <Search className='search-icon'/>
      <input
        type='search'
        placeholder="Search"
        onChange={onSearchChange}
        className='search-input' />
    </div>
  )
}

export default SearchBox
