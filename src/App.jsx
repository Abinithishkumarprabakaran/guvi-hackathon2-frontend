import { useState } from 'react'
import './App.css'
import { MovieList } from './components/MovieList'
import { MovieDetails } from './components/MovieDetails'
import { SeatSelection } from './components/SeatSelection'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { HomePage } from './HomePage'
import { SignupPage } from './SignupPage'

function App() {

  return (
    <div className="App">
      

      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/signup" element={<SignupPage />} />
					<Route path="/movies" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetails />}/>
          <Route path='/seat-selection/:id' element={<SeatSelection />}/>
			</Routes>
    </div>
  )
}

export default App

