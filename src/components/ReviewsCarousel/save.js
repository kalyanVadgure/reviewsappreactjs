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