import "./SearchForm.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          type="text"
          className="form-control"
          placeholder="filter table data with supplied search terms"
          id="term"
        />
      </div>
    </form>
  );
}

export default SearchForm;
