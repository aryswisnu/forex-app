import React, { Component } from 'react';
import ForexContent from './components/Forex_Content/Forex_Content.js';
import CommonInput from './components/Common_Input/Common_Input.js';

const BASE_CURRENCY = 'USD';
const API_URL = 'https://api.exchangeratesapi.io/latest?base=' + BASE_CURRENCY;

const TIMEOUT = 60000;

class App extends Component {

  constructor() {
    super();
    this.state = {
      forexData: {},
      amountValue: 1
    }
    this.handleAmountValue = this.handleAmountValue.bind(this);
  }

  componentDidMount() {
    this.callExchangeRatesAPI();
  }

  callExchangeRatesAPI() {
    fetch(API_URL, {
      method: 'GET',
      timeout: TIMEOUT
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson) {
        this.setState({forexData: responseJson});
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  handleAmountValue(value) {
    this.setState({amountValue: value})
  }

  shouldComponentUpdate(nextProps, nextState) {
    //prevent unnecessary re-render
    return (
      this.state.forexData !== nextProps.forexData ||
      this.state.amountValue !== nextState.amountValue
    )
  }

  render() {
    // console.log(process.env)
    return (
      <div className="app">
        <div className="app-container">
          <h2><center>Foreign Exchange Currency App</center></h2>
          <div className="app-amount-container col-12">
            <CommonInput
              id={"input-value"}
              type={"number"}
              placeholder={"Enter amount"}
              onChange={this.handleAmountValue}
              defaultValue={this.state.amountValue}
            />
          </div>
          {this.state.forexData && Object.keys(this.state.forexData).length > 0 &&
            <div className="app-forex-container col-12">
              <ForexContent
                baseCurrency={BASE_CURRENCY}
                ratesData={this.state.forexData.rates}
                amountValue={this.state.amountValue}
              />
            </div>
          }
        </div>
        <style>
          {`
            .app {
              width: 100%;
            }
            .app-container {
              width: 30%;
              margin: auto;
              display: table;
            }
            .app-amount-container{
              margin: 20px 0;
            }
            .app-forex-container {
              margin-bottom: 50px;
            }
            .col-12 {
              width: 100%;
              float: left;
              box-sizing: border-box;
            }
            .col-10 {
              width: 90%;
              float: left;
              box-sizing: border-box;
            }
            .col-8 {
              width: 70%;
              float: left;
              box-sizing: border-box;
            }
            .col-6 {
              width: 50%;
              float: left;
              box-sizing: border-box;
            }
            .col-4 {
              width: 30%;
              float: left;
              box-sizing: border-box;
            }
            .col-2 {
              width: 10%;
              float: left;
              box-sizing: border-box;
            }
          `}
        </style>
      </div>
    );
  }
}

export default App;
