import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchdata } from "./api";
import image from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetcheddata = await fetchdata();

    this.setState({ data: fetcheddata });
  }

  handleCountryChange = async (country) => {
    const fetcheddataforcountry = await fetchdata(country);
    this.setState({ data: fetcheddataforcountry, country: country });
    //set the state
  };
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart />
      </div>
    );
  }
}
export default App;
