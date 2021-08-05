import React, { Component } from 'react';
import { render } from 'react-dom';

class ChoiceBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    this.submitCurrency =this.submitCurrency.bind(this);

  }
  
  submitCurrency = () => {
    fetch('/user/addPort', {
      method: 'post',
      body: JSON.stringify({
        currency_acronym: this.props.info.curr1,
        amt_usd: this.props.info.value
    })
  })
  }
  // we should repopulate this with the keys from 
  render() {
    const arr = ['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTC', 'BTN', 'BWP', 'BYN', 'BYR', 'BZD', 'CAD', 'CDF', 'CHF', 'CLF', 'CLP', 'CNY', 'COP', 'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GGP', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'IMP', 'INR', 'IQD', 'IRR', 'ISK', 'JEP', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LTL', 'LVL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRO', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'STD', 'SVC', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VEF', 'VND', 'VUV', 'WST', 'XAF', 'XAG', 'XAU', 'XCD', 'XDR', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMK', 'ZMW', 'ZWL'];
    const options = arr.map((el, i) => <option key={i}> {el} </option>); // data to fill dropdown menu with symbols
  
    return (
      <>
        <div className="wrapper__ON_ChoiceBox_style">
          <div className="wrapper__ON_ChoiceBox">
            <div className="wrapperChoicebox">
              <div className="currency1">
                <label className="c1test">Currency 1</label>
                <select
                  value={this.props.info.curr1}
                  onChange={this.props.curr1Change}
                  required
                >
                  <option>Choose</option>
                  {options}
                </select>
              </div>
              <div className="currency2">
                <label className="c2test">Currency 2</label>
                <select
                  value={this.props.info.curr2}
                  onChange={this.props.curr2Change}
                  required
                >
                  <option>Choose</option>
                  {options}
                </select>
              </div>
              <div className="defaultcurr">
                <label className="cxtest">Choose Base Currency</label>
                <select
                  value={this.props.info.curr1}
                  onChange={this.props.curr1Change}
                  required
                >
                  <option>Choose</option>
                  {options}
                </select>
              </div>
            </div>
            <div className="wrapperInput">
              <input
                type="number"
                value={this.props.info.value}
                onChange={this.props.valueChange}
                className="inputAmount"
                placeholder="  Input your amount here" 
                required
              />
              <div className="button2">
              <button
                type="submit"
                className="signup-btn"
                onClick={()=>this.submitCurrency}
              >Add to Portfolio
              </button>
              </div>
            </div>
            <h2>{this.props.info.curr1} HISTORY</h2>
          </div>
        </div>
      </>
    );
  }
}

export default ChoiceBox;
