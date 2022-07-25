import { faCalendar, faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { Calendar } from 'react-date-range';
import './Header.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

function Header({ type }) {
  const [open, setOpen] = useState(false);
  const [destination, setDestination] = useState("");
  const [openOption, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };
  const handleOption = (name, index) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: index === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className="header">
      <div className={type === 'list' ? 'headerContainer list' : 'headerContainer'}>
        <div className="headerlist">
          <div className="HeaderListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="HeaderListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="HeaderListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="HeaderListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="HeaderListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
          </div>
        </div>
        {type !== 'list' && (
          <>
            <h1 className="headerTittle">A lifetime of discounts? It's Genius</h1>
            <p className="headerDecs">
              {' '}
              Get rewarded for your travels – unlock instant savings of 10% or more with a free
              Lamabooking account
            </p>
            <button className="headerButton">Sing in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem firts">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input type="text" placeholder="Where are you going?"
                 className="headerInput" 
                 onChange={e => setDestination(e.target.value)}/>
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span onClick={() => setOpen(!open)} className="Headertext">{`${format(
                  date[0].startDate,
                  'MM/dd/yyyy',
                )} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
                {open && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOption)}
                  className="Headertext">{`${options.adult} adult ${options.children} children ${options.room} room`}</span>
                {openOption && (
                  <div className="options">
                    <div className="optionsItem">
                      <span className="optionText">Adult</span>
                      <div className="optionsNumber">
                        <button
                          className="CounterButton"
                          disabled={options.adult <= 1}
                          onClick={() => handleOption('adult', 'd')}>
                          -
                        </button>
                        <span className="CounterNumber">{options.adult}</span>
                        <button
                          className="CounterButton"
                          onClick={() => handleOption('adult', 'i')}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionsItem">
                      <span className="optionText">Children</span>
                      <div className="optionsNumber">
                        <button
                          className="CounterButton"
                          disabled={options.adult <= 1}
                          onClick={() => handleOption('children', 'd')}>
                          -
                        </button>
                        <span className="CounterNumber">{options.children}</span>
                        <button
                          className="CounterButton"
                          onClick={() => handleOption('children', 'i')}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionsItem">
                      <span className="optionText">Room</span>
                      <div className="optionsNumber">
                        <button
                          className="CounterButton"
                          disabled={options.adult <= 1}
                          onClick={() => handleOption('room', 'd')}>
                          -
                        </button>
                        <span className="CounterNumber">{options.room}</span>
                        <button className="CounterButton" onClick={() => handleOption('room', 'i')}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button onClick={handleClick} className="headerButton firts">Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
