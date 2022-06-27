import React from "react";
import '../SearchBox.css';

const SearchBox = ({ searchField, searchChange }) => {
    return (
        <div>
            <input
                type='search'
                placeholder='Search here'
                className="pa3 ba b--light-blue bg-lightest-blue"
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;