import React, { Component } from 'react';

//Input: Liked Boolean
//Output: onClick

class LikeMovies extends Component {
  render() {
    let classes = 'fa fa-heart';
    if (!this.props.liked) {
      classes = classes + '-o';
    }
    return (
      <i
        onClick={this.props.onClick}
        className={classes}
        aria-hidden='true'
        style={{ cursor: 'pointer' }}></i>
    );
  }
}

export default LikeMovies;
