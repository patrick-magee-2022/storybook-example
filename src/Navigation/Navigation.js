
import React from 'react';
import PropTypes from 'prop-types';

export const Navigation = ({ active, backgroundColor, text }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: backgroundColor}}>
                <div className="container-fluid">
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <a className={active ? "nav-item nav-link active" : "nav-item nav-link"}>{text}</a>
                            <a className={active ? "nav-item nav-link active" : "nav-item nav-link"}>{text}</a>
                            <a className={active ? "nav-item nav-link active" : "nav-item nav-link"}>{text}</a>
                            <a className={active ? "nav-item nav-link active" : "nav-item nav-link"}>{text}</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

Navigation.propTypes = {
    active: PropTypes.bool,
    backgroundColor: PropTypes.string,
    text: PropTypes.string,
  };
  
  Navigation.defaultProps = {
    backgroundColor: "#FF0000",
    active: false,
    text: "Link",
  };




