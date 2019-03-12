import React from 'react';

export default ({ movie }) => (
  <table className="vertical-table">
    <thead>
      <tr>
        <th>Director:</th>
      </tr>
      <tr>
        <th>Writer:</th>
      </tr>
      <tr>
        <th>Genre: </th>
      </tr>
      <tr>
        <th>Production: </th>
      </tr>
      <tr>
        <th>Released: </th>
      </tr>
      <tr>
        <th>boxoffice: </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{movie.Director}</td>
      </tr>
      <tr>
        <td>{movie.Writer}</td>
      </tr>
      <tr>
        <td>{movie.Genre}</td>
      </tr>
      <tr>
        <td>{movie.Production}</td>
      </tr>
      <tr>
        <td>{movie.Released}</td>
      </tr>
      <tr>
        <td>{movie.BoxOffice}</td>
      </tr>
    </tbody>
  </table>
);
