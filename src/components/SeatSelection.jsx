import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from "../global.js"

export function SeatSelection() {


  const {id} = useParams();

  // console.log(id)

  const navigate = useNavigate();
	const [theatre, setTheatre] = useState([]);

  useEffect(() => {
    fetch(`${API}/theaters/${id}`)
      .then((data) => data.json())
      .then((theat) => setTheatre(theat));
  },[id])

  // console.log(theatre)

  return (
    <div>
      Welcome to Seat Selections
      <h1>{theatre.theater}, {theatre.location}</h1>
      <SeatMap />
    </div>
  );
}

function SeatMap() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  let [selectedSeatByUser, setSelectedSeatByUser] = useState([121,1222]);


  function handleSeatClick(event) {
    const seat = event.target;
    const value = seat.innerText
    const seatIndex = [...seat.parentNode.children].indexOf(seat);
    console.log(seatIndex)
    const isSeatSelected = selectedSeats.includes(seatIndex);
    console.log(isSeatSelected)

    if (isSeatSelected) {
      setSelectedSeats(selectedSeats.filter(index => index !== seatIndex));
      seat.classList.remove('selected');
    } else {
      setSelectedSeats([...selectedSeats, seatIndex]);
      seat.classList.add('selected');
    }
  }
  console.log(selectedSeatByUser)

  // const styles = {
  //   backgroundColor: isSeatSelected === false ? "red" : "'white",
  // }

  return (
    <div className="seat-map">
      <div className="row">
        {Array(100)
          .fill()
          .map((_, seatIndex) => (
            <div
              className={`seat ${selectedSeats.includes(seatIndex) ? 'selected' : ''}`}
              // style={styles}
              key={seatIndex}
              onClick={handleSeatClick}
            >{seatIndex + 1}</div>
          ))}
      </div>

    </div>
  );
}
