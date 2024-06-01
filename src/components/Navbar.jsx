import React, { useState } from "react";
import airbnb from "../assets/airbnb-logo.gif";
import search from "../assets/search.png";
import menu from "../assets/hamburger-menu.png";
import filter from "../assets/filter.jpg";
import userIcon from "../assets/user.png";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import FilterModal from "./UI/Cards/Modals/FilterModal";

const Navbar = ({ onSearch, onFilter, onClearFilters, setGuests, setStartDate, setEndDate }) => {
  const [startDate, setStart] = useState(new Date());
  const [endDate, setEnd] = useState(new Date());
  const [guests, setGuestCount] = useState(0);
  const [location, setLocation] = useState("");
  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleShowModal = () => {
    setShowFilterModal(true);
  };

  const handleCloseModal = () => {
    setShowFilterModal(false);
  };

  const handleApplyFilters = (filters) => {
    onFilter(filters);
  };

  const handleSearch = () => {
    onSearch(location);
    setStartDate(startDate);
    setEndDate(endDate);
    setGuests(guests);
  };

  const addGuests = () => {
    setGuestCount((prevGuests) => prevGuests + 1);
  };

  const removeGuests = () => {
    setGuestCount((prevGuests) => (prevGuests > 0 ? prevGuests - 1 : 0));
  };

  return (
    <div className="flex items-center p-2">
      <img src={airbnb} alt="Airbnb logo" className="w-30 h-24 ml-5 mb-2 " />
      <div className="ml-80 flex items-center rounded-3xl border border-gray-300 p-2 h-12">
        <input
          type="text"
          className="text-gray-900 text-sm rounded-2xl w-28 p-3 block"
          placeholder="Search Places"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          required
        />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStart(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="From"
          className="text-gray-900 text-sm rounded-xl w-20 p-3 block"
          dateFormat="d MMMM"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEnd(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="To"
          className="text-gray-900 text-sm rounded-xl w-20 p-3 block"
          dateFormat="d MMMM"
        />
        <div className="flex items-center p-1">
          <button
            type="button"
            onClick={removeGuests}
            className="bg-gray-300 text-gray-700 font-bold p-2"
          >
            -
          </button>
          <input
            type="text"
            className="text-gray-900 text-sm rounded-none w-12 p-3 block text-center"
            value={guests}
            readOnly
          />
          <button
            type="button"
            onClick={addGuests}
            className="bg-gray-300 text-gray-700 font-bold p-2"
          >
            +
          </button>
        </div>
        <button
          type="button"
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold p-3 rounded-full"
          onClick={handleSearch}
        >
          <img src={search} className="w-5 h-5" alt="Search" />
        </button>
      </div>
      <button
        className="bg-gray-100 text-gray-800 font-bold p-3 rounded-3xl"
        onClick={handleShowModal}
      >
        <img src={filter} className="w-8 h-6" alt="Filter" />
      </button>
      <FilterModal
        isOpen={showFilterModal}
        onClose={handleCloseModal}
        onApplyFilters={handleApplyFilters}
        onClearFilters={onClearFilters}
      />
      <img src={userIcon} className="w-8 h-8 ml-44 mr-4" alt="User" />
      <img src={menu} className="w-7 h-7 ml-4 mr-4" alt="Menu" />
    </div>
  );
};

export default Navbar;
