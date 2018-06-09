import React, { Component } from 'react';
import axios from 'axios';
import TopBar from './top_bar/TopBar.jsx';
import Reviews from './reviews/Reviews.jsx';
import styles from '../App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    this.getReviews()

  }

  getReviews() {
    axios.get('/api/reviews')
    .then(({ data }) => {
      console.log('data from get request', data)
      this.setState({
        reviews: data,
      }, () => console.log('this.state', this.state.reviews))
    })
    .catch(err => console.log('error in get request'))
  }


  render() {
    return (
      <div className={styles.reviews}>
        <div>
          <TopBar />
          <Reviews reviews={this.state.reviews}/>
        </div>
      </div>
    )
  }
}

export default App;