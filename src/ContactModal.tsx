import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ContactModal: React.FC = () => {
    const handleClose = () => {
        const modalElement = document.getElementById("ContactModal");
        if (modalElement) {
            modalElement.style.display = "none";
        }
    };

    return (
        <div className="Overlay position-fixed top-0 start-0 w-100 p-5">
            <br /><br /><br />
            <div className="my-4 text-white">
                <div className="my-4 text-white">
                    <div className="my-4 text-white border border-0 bg-transparent">
                        <div className="my-4 text-white">
                            <div id="error"></div>
                            <div className="">
                                <form method="post" action="mailto:arophn@gmail.com" encType="text/plain">
                                    <br />
                                    <fieldset className="form-group">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="email"
                                                className="form-control w-100 btn btn-lg btn-outline-secondary"
                                                id="email"
                                                name="email"
                                                placeholder="Enter email"
                                            />
                                            <label htmlFor="email"><strong>Email address</strong></label>
                                        </div>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control w-100 btn btn-lg btn-outline-secondary"
                                                id="subject"
                                                name="subject"
                                                placeholder="Enter Subject"
                                            />
                                            <label htmlFor="subject"><strong>Subject</strong></label>
                                        </div>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <div className="form-floating mb-3">
                                            <textarea
                                                className="form-control btn btn-lg btn-outline-secondary"
                                                id="content"
                                                name="content"
                                                placeholder="Why would you like to contact me?"
                                                rows={3}
                                            />
                                            <label htmlFor="content"><strong>Why would you like to contact me?</strong></label>
                                        </div>
                                    </fieldset>
                                    <hr /><br />
                                    <fieldset className="form-group">
                                        <div className="form-floating mb-3 text-center">
                                            <button type="submit" className="btn btn-secondary btn-lg m-2 fw-bold">
                                                Send
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-outline-secondary btn-lg m-2 fw-bold"
                                                onClick={handleClose}
                                            >
                                                Cancel
                                            </button>
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
};

export default ContactModal;