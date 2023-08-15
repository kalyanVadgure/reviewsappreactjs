import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickLeftArrow = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prveState => ({index: prveState.state - 1}))
    } else if (index === 0) {
      this.setState({index: 0})
    }
  }

  onClickRightArrow = () => {
    const {index} = this.state
    const {reviewsList} = this.props

    if (index < reviewsList.length) {
      this.setState(prveState => ({index: prveState.state + 1}))
    } else if (index === reviewsList.length) {
      this.setState({index: reviewsList.length})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[index]

    return (
      <div className="main_container">
        <div className="reviews_card_container">
          <h1>Reviews</h1>
          <div className="review_Scroller_container">
            <button
              data-testid="leftArrow"
              type="button"
              onClick={this.onClickLeftArrow}
            >
              <img
                className="arrows"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <div className="profile_container">
              <img className="profile_image" src={imgUrl} alt={username} />
              <p>{username}</p>
              <p>{description}</p>
            </div>
            <button
              type="button"
              onClick={this.onClickRightArrow}
              data-testid="rightArrow"
            >
              <img
                className="arrows"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
