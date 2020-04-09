/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unused-state */
import React from 'react';
import axios from 'axios';
import faker from 'faker';
import Scores from './Scores.jsx';
import Stats from './Stats.jsx';
import SeeMore from './SeeMore.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      house: {},
      houses: [],
      neighborhood: {},
    };
    this.getHouseData = this.getHouseData.bind(this);
    this.getNeighborhoodData = this.getNeighborhoodData.bind(this);
  }

  componentDidMount() {
    let randomId = faker.random.number({ min: 1, max: 100000 });
    this.getNeighborhoodData(randomId);
  }

  getNeighborhoodData(hood_id) {
    axios.get(`/api/neighborhood/${hood_id}`)
      .then((res) => {
        const { house } = this.state;
        console.log(res.data)
        this.setState({
          house: { ...house },
          houses: res.data,
          neighborhood: response.data[0],
        });
        // console.log(response.data[0]);
      })
      .catch((err) => {
        throw err;
      });
  }

  getHouseData() {
    axios.get('/api/houses')
      .then((response) => {
        const { house, neighborhood } = this.state;
        if (!Object.keys(house).length) {
          this.setState({
            house: response.data[0],
            houses: response.data,
            neighborhood: { ...neighborhood },
          });
          // console.log(this.state.houses);
        } else {
          this.setState({
            house: { ...house },
            houses: { ...response.data },
            neighborhood: { ...neighborhood },
          });
        }
        this.getNeighborhoodData(this.state.house.neighborhood);
      })
      .catch((err) => {
        throw err;
      });
  }

  currentHouse(setHouse) {
    const { houses } = this.state;
    this.setState({ house: setHouse, houses: [...houses] });
  }

  render() {
    const { house, neighborhood } = this.state;
    const currentHouse = !Object.keys(house).length ? null : house;
    let scores = <div />;
    let stats = <div />;
    let seeMore = <div />;
    if (Object.keys(neighborhood).length) {
      scores = <Scores neighborhood={neighborhood} />;
      stats = <Stats neighborhood={neighborhood} house={house} />;
      seeMore = <SeeMore neighborhood={neighborhood} />;
    }
    return (
      <div id="appContainer">
        <h2 id="neighborhoodHeader">
          Neighborhood: {currentHouse ? currentHouse.neighborhood : ''}
        </h2>
        {scores}
        {stats}
        {seeMore}
      </div>
    );
  }
}

export default App;
