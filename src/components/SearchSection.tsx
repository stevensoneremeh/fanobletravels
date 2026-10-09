import React from 'react'

export default function SearchSection() {
  return (
    <section className="frm-search">
      <div className="container-fluid m-5-hor m-5-hor-dev">
        <div className="row">
          <h1 className="big-heading">FLIGHT TICKET BOOKING AND HOTEL RESERVATION</h1>
              
          <form className="form-inline" id="sform">
            <div className="form-group search-icn">
              <label htmlFor="key">Keyword</label>
              <input type="text" className="form-control" required id="key" />
            </div>
            <div className="form-group">
              <label>Select your Booking</label>
              <select name="select-trip" required>
                <option value="">Other</option>
                <option value="#">Hotel Reservation</option>
                <option value="#">flight Booking</option>
              </select>
            </div>
            <div className="form-group">
              <label>Destination</label>
              <select name="destination" required>
                <option value="">Other</option>
                <option value="#">Asia</option>
                <option value="#">Africa</option>
                <option value="#">America</option>
                <option value="#">Australia</option>
                <option value="#">Europe</option>
                <option value="#">Rusia</option>
              </select>
            </div>
            <div className="form-group">
              <label>Duration</label>
              <select name="duraion" required>
                <option value="">Other</option>
                <option value="#">1 Day Travel</option>
                <option value="#">2 Days Travel</option>
                <option value="#">3 Days Travel</option>
                <option value="#">4 Days Travel</option>
                <option value="#">5 Days Travel</option>
                <option value="#">1 week Travel</option>
              </select>
            </div>
            <div className="form-group">
              <label>Date</label>
              <div id="filterDate2">
                <div className="input-group date" data-date-format="dd/mm/yyyy">
                  <input type="text" className="form-control" placeholder="dd/mm/yyyy" required />
                  <div className="input-group-addon">
                    <span className="fa fa-calendar"></span>
                  </div>
                </div>
              </div>  
            </div>
            <input className="btn-frm-search" value="FIND NOW" type="submit" />
          </form> 
        </div>
      </div>
    </section>
  )
}