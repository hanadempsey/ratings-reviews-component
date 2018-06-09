import React, { Component } from 'react';
import styles from '../../../App.css';

class ContentWrap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // percentage : '"' + (this.props.percentage) + '%"'
    }

  }

  // componentDidMount() {
  //   this.setState({
  //     starPercentage: (this.props.average/5)
  //   }, () => {
  //     console.log("this.state.starPercentage:", this.state.starPercentage)
  //   })
  // }

  render() {
    console.log('percentage:', this.props.percentage)
    return (
      <div className={styles.contentWrap}>

        <div className={styles.averageStarRating}>{this.props.average}</div>

        <div class={styles.starRatingcss}>
          <div class={styles.Top} style={{ width: `${this.props.percentage}%` }}>
          {/* <div class={styles.Top} style={{ width: "70%" }}> */}
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <div class={styles.Bottom}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>

        <div className={styles.productRatings}>
          <span className={styles.productRatings}>{this.props.reviewAmount} product ratings</span>
        </div>
      </div>


    )
  }
}

export default ContentWrap;