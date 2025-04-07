import ReactDOM from 'react-dom';
import React, { useRef, useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ContactModal(){
    return(
        <div className="Overlay position-fixed top-0 start-0 w-100 p-5">
        <br/><br/><br/>
        <div className="my-4 text-white">
            <div className="my-4 text-white">
                <div className="my-4 text-white border border-0 bg-transparent">
                    <div className="my-4 text-white">
                        <div id="error"></div>
                        <div className="">
                            <form method="post" action="mailto:arophn@gmail.com" enctype="text/plain"><br/>
                                <fieldset className="form-group">
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control w-100 btn btn-lg btn-outline-secondary"  id="email" name="email" placeholder="Enter email"/><label for="email"><strong>Email address</strong></label>
                                    </div>
                                </fieldset>
                                <fieldset className="form-group">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control w-100 btn btn-lg btn-outline-secondary"  id="subject" name="subject" placeholder="Enter Subject"/><label for="subject"><strong>Subject</strong></label>
                                    </div>
                                </fieldset>
                                <fieldset className="form-group">
                                    <div className="form-floating mb-3">
                                        <textarea type="email" className="form-control btn btn-lg btn-outline-secondary" id="content" name="content" placeholder="Enter content" rows="3"></textarea><label for="content"><strong>Why would you like to contact me?</strong></label>
                                    </div>
                                </fieldset><hr/><br/>
                                <fieldset className="form-group">
                                    <div className="form-floating mb-3" align="center">
                                        <button type="submit" className="btn btn-secondary btn-lg m-2 fw-bold">Send</button>
                                        <button type="button" className="btn btn-outline-secondary btn-lg m-2 fw-bold" onClick={() => {ReactDOM.render(<></>, document.getElementById("ContactModal"))}}>Cancel</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}