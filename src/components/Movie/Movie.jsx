import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <div>
        this is movie with ID:
        {this.props.match.params.movieId}
      </div>
    );
  }
}

export default Movie;
