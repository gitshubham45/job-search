import React from 'react';
import './searchBox.css';

const SearchBox = ({value,onChange}) => {

    console.log(value);

    return (
        <div className="flex-container"> {/* Flex container for alignment */}
            <input
                type="text"
                className="common-size" /* Apply common styling */
                placeholder="Search jobs..." /* Search box placeholder text */
                onChange={onChange}
            />
        </div>
    )
}

export default SearchBox;
