import React, { Component } from "react";

import "../assets/css/style.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/icofont/icofont.min.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/animate.css/animate.min.css";
import "../assets/vendor/venobox/venobox.css";
class BookingPage extends Component{

    render(){
        return (
            <div>
                <br></br>
                
                
            <section className="content">
                <div className="content-title">
                    <div className="content-title-inner">
                        <div className="container">
                            <h1 className="text-uppercase">Book to visit</h1>
                            
                        </div>

                    </div>

                </div>
                <div className="container d-my-top mb-3"id="js-cart-app-custom">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="rows filter">

               <form>

                <div className="row">
                    <div className="form-group col-sm-12 col-md-10">
                        <input type="text"name="name_or_code" id="name_or_code1" aria-label="name_or_code"
                        placeholder="Enter property name or property code" className="form-control"/>
                    </div>
                    <div className="col-md-2 d-md-block d-none">
                        <div>
                            <button type="submit" title="Search" className="btn btn-primary btn-block">Search</button>
                        </div>

                    </div>
                    <div className="form-group col-md-2">
                        <select arial-label="address" className="form-control custom-select">
                            <option defaultValue>All location</option>
                            <option value="15">Phnom Penh</option>
                            <option value="23">Siem Reap</option>
                        </select>

                    </div>
                    <div className="form-group col-md-2">
                        <select disabled="disabled" aria-label="address" className="form-control custom-select">
                            <option>All District</option>
                        </select>

                    </div>
                    <input type="hidden" name="address" />
                    <div className="form-group col-md-2">
                        <select name="type" id="select-type1" aria-label="select-type" required="required"className="form-control custom-select">
                            <option  defaultValue disabled="disable">Select type</option>
                            <option value="1">Apartment</option>
                            <option value="3">Room</option>
                            <option value="11">Condominium</option>
                            <option value="2">Office Space</option>
                            <option value="8">Villa</option>
                            <option value="7">Flat</option>
                            <option value="12">Land</option>
                            <option value="13">Building</option>
                            <option value="9">Warehouse</option>
                            
                        </select>

                    </div>
                    <div className="form-group col-md-2">
                        <select name="bed" id="select-bed1" aria-label="select-bed" disabled="disable" className="form-control custom-select">
                            <option defaultValue disabled="disbled">Bad</option>
                            <option value="1">1 Bed</option>
                            <option value="2">2 Bed</option>
                            <option value="3">3 Bed</option>
                            <option value="4">4 Bed</option>
                            <option value="5">5 + Bed</option>
                        </select>

                    </div>
                    <div className="col-md-4 form-group">
                        <div className="input-group">
                            <input name="min" type="number" id="search-min" min="0" aria-label="search-min"placeholder="Min" className="form-control" />
                                
                            <div className="input-group-append">
                                <span className="input-group-text bg-white border border-rigth-0">-</span>
                            </div>
                            <input name="max" type="number" id="select-max" min="0" aria-label="select-max"placeholder="Max" className="form-control"/>
                        </div>  

                    </div>
                    <div className="col-md-2 d-sm-block d-md-none">
                        <div>
                            <button type="submit" title="Search" className="btn btn-primary btn-block">Search</button>
                        </div>

                    </div>

                </div>
               
               </form>
               </div>
               </div>
              </div>
              </div>
               </section>
            <div id="js-cart-app">
                <div className ="container d-my-top">
                    <div className="row">
                        <div className="table-responsive col-md-12">
                            <table className="table-table-hover">
                                <thead className="thead-light"></thead>
                                <tbody></tbody>
                            </table>

                        </div>
                        <div className="col-md-12">
                            <form method="post" className="row" siq_id="autopick_5668">
                                <div className="form-group col-md-4">
                                    <label htmlFor ="Fullname">Fullname</label>
                                    <div>
                                        <input id="Fullname"autoComplete="off" name="fullname" type="text"
                                        aria-label="Fullname" className="form-control" />
                                    </div>

                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="Phone">Phone</label>
                                    <div>
                                        <div className="intl-tel-input allow-dropdown">
                                            
                                            <input id="Phone" autoComplete="off" name="phone" type="text" aria-label="Phone" className="form-control" data-intl-tel-input-id="0"placeholder="Phone" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="Email">Email</label>
                                    <div>
                                        <input id="Email" autoComplete="off" name="email" type="text" aria-label="Email" className="form-control"/>
                                    </div>
                                    
                                </div>
                                <div className="form-group col-md-12">
                                        <label htmlFor="Message">Message</label>
                                        <div>
                                            <textarea id ="Message" autoComplete="off" name="massage" cols="30"rows="10" aria-label="Message" className="form-control"></textarea>
                                        </div>


                                    </div>
                                    <div className="col-md-12">
                                        <button title="Send" disabled="disabled" className="btn btn-primary col-md-12">
                                           Next
                                        </button>
                                        
                                    </div>
                                    
                            </form>
                        </div>
                    </div>
                </div>

            </div>

            </div>
        );
    }


}

export default BookingPage;