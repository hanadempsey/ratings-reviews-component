import React, { Component } from 'react';
import Header from './reviewsComponents/Header.jsx';
import AllReviews from './reviewsComponents/AllReviews.jsx';
import styles from '../../App.css';
import axios from 'axios';


class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    }
  }



  render() {
    let stars = [];
    
    console.log('this in props in reviews', this.props.reviews)
    return (
      <div className={styles.reviews}>
      <div className={styles.reviewsHeaderContainer}>
        <span className={styles.relevantReviews}>Most relevant reviews</span>
        <span className={styles.moreReviews}>More reviews</span>
      </div>
        {this.props.reviews.map(review => {
          let starsOrange = [];
          let starsGrey = [];
          for (let i = 0; i < review.stars; i++) {
            starsOrange.push(<span className={styles.orangeStar}>★</span>)
          }
          for (let j = 0; j < (5 - review.stars); j++) {
            starsGrey.push(<span className={styles.greyStar}>★</span>)
          }
          return (<div className={styles.allReviews}>
            <div className={styles.reviewsLeftSide}>
              <div className={styles.userReviewStars}>
               {starsOrange}
               {starsGrey}
              </div>
              <div className={styles.byUser}>by <span className={styles.user}>Hana</span></div>
              <div className={styles.date}>Feb 09, 2018</div>
            </div>
            <div className={styles.reviewsRightSide}>
              <div>{review.title}</div>
              <div className={styles.comment}>{review.comment}</div>
              <div className={styles.otherFacts}>
                <span>Verified Purchase: <span className={styles.facts}>{review.verified_purchase}</span> </span><span className={styles.line}>|</span><span> Condition: <span className={styles.facts}>{review.condition}</span> </span><span className={styles.line}>|</span><span> Sold by: <span className={styles.facts}>{review.seller}</span></span>
              </div>
              <div><span className={styles.likeButton}>Button</span> <span className={styles.dislikeButton}>Button</span></div>
            </div>
          </div>
          )
        })}



      </div>
    )
  }
}

export default Reviews;