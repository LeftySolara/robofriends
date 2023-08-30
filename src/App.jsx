import { useEffect, useState } from "react";
import CardList from "./CardList";
import SearchBox from "./Searchbox";
import "./App.css";

const App = () => {
  const [robotList, setRobotList] = useState([]);
  const [filteredRobotList, setFilteredRobotList] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const json = await response.json();
      setRobotList(json);
      setFilteredRobotList(json);
    }
    fetchData().catch(console.error);
  }, []);

  // TODO: debounce this
  const onSearchChange = (event) => {
    setSearchCriteria(event.target.value);
    if (searchCriteria === "" || !searchCriteria) {
      setFilteredRobotList(robotList);
    } else {
      setFilteredRobotList(() =>
        robotList.filter((robot) => {
          return robot.name
            .toLowerCase()
            .includes(searchCriteria.toLowerCase());
        })
      );
    }
  };

  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchCriteria={searchCriteria} onChange={onSearchChange} />
      <CardList robots={filteredRobotList} />
    </div>
  );
};

export default App;
