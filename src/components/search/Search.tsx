import { useEffect, useState } from "react";
import CountriesDropDown from "../countriesDropdown/CountriesDropDown";
import "./Search.scss";
import * as countryJson from "../../assets/json/country.json";

const Search = () => {
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(0);
  const [countries, setCountries] = useState<
    { dial_code: string; flag: string }[]
  >([]);
  const [dropdownShow, setDropdownShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCountries(countryJson.default);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, []);

  const handleCountrySelect = (index: number) => {
    setSelectedCountryIndex(index);
    setDropdownShow(false);
  };

  const sendMessage = (element: any) => {
    element.preventDefault();
    const areaCode = element.target.areacode.value.replace("+", "");
    window.open(
      `https://api.whatsapp.com/send?phone=${areaCode}${element.target.phone.value}`
    );
  };

  return (
    <div className="search_container">
      <div className="search_container_content">
        <span>
          <p>Add the requested phone number</p> to start a WhatsApp conversation
        </span>
      </div>
      <div className="search_container_input">
        <form onSubmit={sendMessage} className="search_container_input_form">
          <div
            className="search_container_input_form-country"
            onClick={() => setDropdownShow(!dropdownShow)}
          >
            <img
              src={
                countries.length > 0 ? countries[selectedCountryIndex].flag : ""
              }
              alt=""
            />
            <input
              className="search_container_input_form-country-area"
              name="areacode"
              type="dropdown"
              readOnly
              value={
                countries.length > 0
                  ? countries[selectedCountryIndex].dial_code
                  : "Area Code"
              }
            />
          </div>
          {dropdownShow && (
            <div className="search_container_dropdown">
              {countries.map((item, index) => (
                <CountriesDropDown
                  key={index}
                  index={index}
                  code={item.dial_code}
                  image={item.flag}
                  onSelect={handleCountrySelect}
                />
              ))}
            </div>
          )}
          <input
            className="search_container_input_form-phone"
            name="phone"
            type="string"
            placeholder="Phone Number"
          />
          <button type="submit">Start a WhatsApp conversation</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
