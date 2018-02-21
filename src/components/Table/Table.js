import React from 'react';
import './Table.css';

const Table = ({name}) => {
  return (
    <div className="tc">
      <h3 className="ft nmt table-title">{name} Champions</h3>
      <table className="ff">
      <tbody>
          <tr>
            <th>Champion</th>
            <th>Winrate</th>
          </tr>
          <tr>
            <td>Warwick</td>
            <td>53%</td>
          </tr>
          <tr>
            <td>Warwick</td>
            <td>53%</td>
          </tr>
          <tr>
            <td>Warwick</td>
            <td>53%</td>
          </tr>
          <tr>
            <td>Warwick</td>
            <td>53%</td>
          </tr>
          <tr>
            <td>Warwick</td>
            <td>53%</td>
          </tr>
          <tr>
            <td>Warwick</td>
            <td>53%</td>
          </tr>
          <tr>
            <td>Warwick</td>
            <td>53%</td>
          </tr>
          <tr>
            <td>Warwick</td>
            <td>53%</td>
          </tr>
          <tr>
            <td>Warwick</td>
            <td>53%</td>
          </tr>
          <tr>
            <td>Warwick</td>
            <td>53%</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default Table;
