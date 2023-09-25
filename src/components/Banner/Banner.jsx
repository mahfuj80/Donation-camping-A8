import PropTypes from 'prop-types';
import { useState } from 'react';

const Banner = ({ searchFunction }) => {
  const [inputValue, setInputValue] = useState('');
  const handleSearch = (inputValue) => {
    document.getElementById('search-input').value = '';
    searchFunction(inputValue);
    setInputValue('');
  };
  return (
    <div className="text-center space-y-7 mt-32 mb-44">
      <h1 className="text-[#0B0B0B] text-5xl font-bold">
        I Grow By Helping People In Need
      </h1>
      <div className="w-full mx-auto">
        <input
          id="search-input"
          onChange={(e) => setInputValue(e.target.value)}
          className="border rounded-md py-2 px-5 rounded-r-none"
          type="text"
          placeholder="Search here...."
        />
        <button
          onClick={() => handleSearch(inputValue)}
          className="bg-[#FF444A] font-bold text-white py-2 px-3 rounded-md rounded-l-none"
        >
          Search
        </button>
      </div>
    </div>
  );
};

Banner.propTypes = {
  searchFunction: PropTypes.func.isRequired,
};

export default Banner;
