import React, { Component } from 'react';

class CommonButton extends Component {
  //set default values
  text = "";
  isButtonCircle = false;

  initRender() { //change default values to passed props
    if(this.props.text !== undefined && this.props.text !== this.text) {
      this.text = this.props.text;
    }
    if(this.props.isButtonCircle !== undefined && this.props.isButtonCircle !== this.isButtonCircle) {
      this.isButtonCircle = this.props.isButtonCircle;
    }
  }

  handleButtonClicked() {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(); //callback to parent
    }
  }

  render() {
    this.initRender();

    var circleButtonStyle = {};
    if (this.isButtonCircle) {
      circleButtonStyle = {
        borderRadius: '50%',
        lineHeight: '0.5',
        fontSize: '16px',
        fontWeight: '200'
      }
    }

    return (
      <div className="button-container">
        <button className="button-content" onClick={() => {this.handleButtonClicked()}} style={circleButtonStyle}>{this.text}</button>
        <style>
          {`
            .button-content {
              width: 100%;
              cursor: pointer;
            }
            .button-content {
              display: inline-block;
              text-transform: uppercase;
              cursor: pointer;
              text-decoration: none;
              line-height: 20px;
              border-radius: 4px;
              border-color: #ff6d00;
              padding: 8px;
              letter-spacing: .02rem;
              background: #ff6d00;
              color:white;
              font-size:.8rem;
              box-shadow:0 0px 0px rgba(50, 50, 90, .1),
              0 0px 0px rgba(0, 0, 0, 0);
            }
            .button-container button:hover {
              background: #ff6d00;
              box-shadow:0 7px 14px rgba(50, 50, 90, .1), 0 3px 6px rgba(0, 0, 0, .08);
              transform: translateY(-1px);
            }
            .button-container button:active {
              box-shadow:0 4px 6px rgba(50, 50, 90, .1),0 1px 3px rgba(0, 0, 0, .12);
              transform: translateY(1px);
            }
          `}
        </style>
      </div>
    );
  }
}

export default CommonButton;
