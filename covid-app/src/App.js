import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchdata } from "./api";
class App extends React.Component {
  async componentDidMount() {
    const data = await fetchdata();
    console.log(data);
  }
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}
export default App;
