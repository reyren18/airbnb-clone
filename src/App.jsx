import React, { useState } from "react";
import Navbar from "./components/Navbar";
import PropertyListing from "./components/PropertyListing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Liked from "./components/Liked";
import PropertyPage from "./components/PropertyPage";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState(null);
  const [guests, setGuests] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters(null);
    setSearchQuery("");
  };

  return (
    <Router>
      <Navbar
        onSearch={handleSearch}
        onFilter={handleFilters}
        onClearFilters={clearFilters}
        setGuests={setGuests}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      <Routes>
        <Route
          path="/"
          element={
            <PropertyListing searchQuery={searchQuery} filters={filters} />
          }
        />
        <Route path="/liked" element={<Liked />} />
        <Route
          path="/property/:id"
          element={<PropertyPage guests={guests} startDate={startDate} endDate={endDate} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
