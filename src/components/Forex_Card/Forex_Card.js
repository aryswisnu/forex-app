import React, { Component } from 'react';
import CommonButton from '../Common_Button/Common_Button.js';

import CurrencyData from '../../data/CurrencyData.json';

class CommonCard extends Component {
  //set default values
  cardData = [];

  initRender() { //change default values to passed props
    if(this.props.cardData !== undefined && this.props.cardData !== this.cardData) {
      this.cardData = this.props.cardData;
    }
    if(this.props.baseCurrency !== undefined && this.props.baseCurrency !== this.baseCurrency) {
      this.baseCurrency = this.props.baseCurrency;
    }
  }

  handleButtonClicked(index) {
    if (typeof this.props.onRemoveButtonClicked === 'function') {
      this.props.onRemoveButtonClicked(index); //callback to parent
    }
  }

  render() {
    this.initRender();

    var renderCards = () => {
      return this.cardData.map((data, index) => {
        return (
          <div key={data.currency + '_' + index} className="card-container">
            <div className="card-body">
              <div className="card-title">
                <p className="card-title left">{data.currency}</p>
                <p className="card-title right">{data.value}</p>
              </div>
              <div className="card-text">
                <p><b><i>{data.currency} - {CurrencyData[data.currency]}</i></b></p>
                <p>1 {this.baseCurrency} = {data.currency} {data.rate}</p>
              </div>
            </div>
            <div className="card-button-container">
              <CommonButton
                text={"-"}
                isButtonCircle={true}
                onClick={() => {this.handleButtonClicked(index)}}
              />
            </div>
            <style>
              {`
                .card-container {
                  width: 100%;
                  border: 1px solid #d7d7da;
                  float: left;
                  padding: 0 10px;
                  margin: 10px 0;
                  box-sizing: border-box;
                }
                .card-container p {
                 line-height: 1;
                }
                .card-body {
                  width: 90%;
                  float: left;
                  border-right: 1px solid #d7d7da;
                  box-sizing: border-box;
                }
                .card-title {
                  float: left;
                  width: 100%;
                  font-size: 14px;
                }
                .card-title p {
                  margin-bottom: 0px;
                }
                .card-title.left {
                  float: left;
                  width: 20%;
                  text-align: left;
                  box-sizing: border-box;
                }
                .card-title.right {
                  float: left;
                  width: 80%;
                  padding-right: 10px;
                  text-align: right;
                  box-sizing: border-box;
                }
                .card-text {
                  float: left;
                  width: 100%;
                  font-size: 12px;
                }
                .card-button-container {
                  margin: 30px 0 0 10px;
                  float: left;
                }
              `}
            </style>
          </div>
        )
      })
    }
    return (
      <div>
        {this.cardData && this.cardData.length > 0 && renderCards()}
      </div>
    );
  }
}

export default CommonCard;
