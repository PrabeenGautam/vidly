import React, { Component, Fragment } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.find((m) => m._id === movie._id);
    this.state.movies.splice(this.state.movies.indexOf(movies), 1);
    this.setState(this.state.movies);
  };

  render() {
    const count = this.state.movies.length;
    if (count === 0) {
      return <p className='h3'>There are no movies in the list</p>;
    } else {
      return (
        <Fragment>
          <p className='h3'>Showing {count} movies from the database</p>

          <table className='table'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((values) => {
                return (
                  <tr key={values._id}>
                    <td>{values.title}</td>
                    <td>{values.genre.name}</td>
                    <td>{values.numberInStock}</td>
                    <td>{values.dailyRentalRate}</td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(values)}
                        className='btn btn-danger btn-sm'>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Fragment>
      );
    }
  }
}

export default Movies;
