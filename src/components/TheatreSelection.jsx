import React, { useState, useEffect } from 'react';
// import DatePicker from 'react-date-picker';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from "../global.js"

export function TheatreSelection() {
  const [value, onChange] = useState(new Date());

  const {id} = useParams();
  const navigate = useNavigate();
	const [theatreList, setTheatreList] = useState([]);

  useEffect(() => {
    fetch(`${API}/theaters`)
      .then((data) => data.json())
      .then((theat) => setTheatreList(theat));
  },[id])

  // console.log(theatreList)


  return (
    <div>
      <p>Select a Date</p>
      {/* <DatePicker onChange={onChange} value={value} /> */}

      <SearchBar theatreList={ theatreList }/>

      {theatreList.map((data) => (
        <div 
          className='theaters' 
          onClick={(event) =>{ 
            navigate(`/seat-selection/${data.id}`)
            const result = event.target.innerHTML
            console.log(data.id)
            // console.log("You Clicked", result)
            }}>
            {data.theater}, {data.location}
        </div>
      ))}
    </div>
  );
}

function SearchBar({ theatreList }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredItems = theatreList.filter((item) =>
      item.toLowerCase().includes(event.target.value.toLowerCase())
    );
    onSearch(filteredItems);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
      />
    </div>
  );
}


