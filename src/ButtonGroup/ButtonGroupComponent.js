
import React from 'react';
import PropTypes from 'prop-types';

export const ButtonGroupComponent = ({ text1, text2, text3, buttonType, vertical }) => {
    return (
      <>
        <div className={vertical ? "btn-group-vertical" : "btn-group"} role="group" aria-label="Basic radio toggle button group">
          <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
          <label className={`btn btn-outline-${buttonType}`} for="btnradio1">{text1}</label>
          <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
          <label className={`btn btn-outline-${buttonType}`} for="btnradio2">{text2}</label>
          <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
          <label className={`btn btn-outline-${buttonType}`}for="btnradio3">{text3}</label>
        </div>
      </>
    );
};

ButtonGroupComponent.propTypes = {
    text1: PropTypes.string,
    text2: PropTypes.string,
    text3: PropTypes.string,
    buttonType: PropTypes.string,
    vertical:PropTypes.bool,
  };
  
  ButtonGroupComponent.defaultProps = {
    text1: "Radio 1",
    text2: "Radio 2",
    text3: "Radio 3",
    buttonType: "primary",
    vertical:false
  };




