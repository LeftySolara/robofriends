import { useEffect } from "react";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/Searchbox/Searchbox";
import ErrorBoundry from "./components/ErrorBoundry/ErrorBoundry";
import "./App.css";
import { connect } from "react-redux";
import { fetchAllRobots, setSearchField } from "./actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robotList: state.fetchRobots.robotList,
    isPending: state.fetchRobots.isPending,
    error: state.fetchRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onFetchRobots: () => dispatch(fetchAllRobots()),
  };
};

const App = ({
  searchField,
  robotList,
  onSearchChange,
  onFetchRobots,
  isPending,
}) => {
  useEffect(() => {
    onFetchRobots();
  }, [onFetchRobots]);

  const filteredRobots = robotList
    ? robotList.filter((robot) => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
      })
    : [];

  return isPending ? (
    <h1>Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchCriteria={searchField} onChange={onSearchChange} />
      <ErrorBoundry>
        <CardList robots={filteredRobots} />
      </ErrorBoundry>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
