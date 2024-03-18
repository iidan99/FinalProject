import "./CountriesDropDown.scss";

const CountriesDropDown = ({ index, code, image, onSelect }: any) => {
  const selectCountry = () => {
    onSelect(index); // Call the onSelect callback with the selected index
  };

  return (
    <div className="countries_dropDown">
      <div className="countries_dropDown_item" onClick={selectCountry}>
        <img src={image} alt={`Flag of ${code}`} />
        <p>{code}</p>
      </div>
    </div>
  );
};

export default CountriesDropDown;
