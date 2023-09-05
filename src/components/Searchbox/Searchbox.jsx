const SearchBox = ({ searchCriteria, onChange }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="Search Robots"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
