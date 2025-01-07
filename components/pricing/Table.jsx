import React from "react";

const Table = () => {
  return (
    <div className="table-container">
      <h2 className="table-title">Daily Opening Hours <span>8AM - 12AM</span></h2>
      
      {/* Hours Table */}
      <table className="hours-table">
        <thead>
          <tr>
            <th>Hours</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Peak Hours</td>
            <td>
              Weekday: 12PM - 4PM<br />
              Weekend & Public Holiday: 8AM - 11AM, 5PM - 12AM
            </td>
          </tr>
          <tr>
            <td>Off-Peak Hours</td>
            <td>
              Weekday: 8AM - 11AM, 5PM - 12AM
            </td>
          </tr>
        </tbody>
      </table>

      {/* Rates Table */}
      <table className="rates-table">
        <thead>
          <tr>
            <th>Hours</th>
            <th>Regular Court</th>
            <th>VIP Court</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Peak Hours</td>
            <td>RMxx</td>
            <td>RMxx</td>
          </tr>
          <tr>
            <td>Off-Peak Hours</td>
            <td>RMxx</td>
            <td>RMxx</td>
          </tr>
        </tbody>
      </table>

      {/* Equipment Table */}
      <h3 className="table-title">Equipment</h3>
      <table className="equipment-table">
        <tbody>
          <tr>
            <td>Ball (For Sale)</td>
            <td>RM9/ball</td>
          </tr>
          <tr>
            <td>Paddle Rental</td>
            <td>RM5/paddle</td>
          </tr>
        </tbody>
      </table>

      <button className="cmn-button">View Schedule</button>
    </div>
  );
};

export default Table;
