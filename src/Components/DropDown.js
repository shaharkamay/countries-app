import Dropdown from "react-bootstrap/DropDown";
import { useRef } from "react"; // useEffect, useState
import countriesJson from "../assets/countries";
import CountryCard from "../Components/CountryCard";
import ToggleDropdown from "../Components/ToggleDropdown";
import ClearButton from "./ClearButton";
import useCountries from "./useCountries";

function DropDown(props) {
  // DropDown is being rendered twice
  const [countryCard, setCountryCard, countryList] =
    useCountries(countriesJson);

  // const tglBtn = useRef(); /* used bootstrap for dropdown */
  const searchBar = useRef();

  return (
    <Dropdown>
      {/* ref={tglBtn}*/}
      <Dropdown.Toggle varianst="succsess" id="dropdown-basic">
        <ToggleDropdown
          pointer={searchBar}
          onInputChange={e => {
            setCountryCard(e.target.value);
          }}
          country={countryCard}
        />
        <ClearButton onClick={() => (searchBar.current.value = "")} />
      </Dropdown.Toggle>
      <Dropdown.Menu className="drop-menu">
        {countryList.map((obj, i) => {
          return (
            <CountryCard
              onClick={e => {
                setCountryCard(e.target.textContent);
              }}
              name={obj.name}
              key={obj.name}
              pic={obj.code}
            />
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;

/* onClick={() => tglBtn.current.focus()} */

// const [countryCard, setCountryCard] = useState("Country Name");
// const [countryList, setCountryList] = useState(countriesJson);
// useEffect(() => {
//   if (!countryCard.trim()) return; // makes sure empty string doesn't trip out
//   const filtered = countriesJson.filter(obj =>
//     obj.name.toLowerCase().includes(countryCard.toLowerCase())
//   );
//   setCountryList(filtered);
// }, [countryCard]);
