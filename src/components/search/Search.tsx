import "./Search.scss";

const Search = () => {
  return (
    <div className="search_container">
      <div className="search_container_content">
        <span>
          <p>Add the requested phone number</p> to start a WhatsApp conversation
        </span>
      </div>
      <div className="search_container_input">
        <form className="search_container_input_form">
          <input
            className="search_container_input_form-area"
            name="area-code"
            type="dropdown"
            placeholder="AreaCode"
          />
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
