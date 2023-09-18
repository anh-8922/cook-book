import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../Styles/component.css';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim() !== '') {
      navigate(`/search?text=${encodeURIComponent(searchText)}`);
    } else {
      alert('Please enter valid text.');
    }
  };

  return (
    <div className="search-box">
      
      <button className="btn-search" onClick={handleSearch}>
        <BsSearch />
      </button>
      <input
      className='input-search'
        type="search"
        label="Enter your text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}