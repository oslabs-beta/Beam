import React, { Component } from 'react';
import { render } from 'react-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'

const dummyData = []

class App extends Component {
   constructor(props){
    super(props);
    this.state = {
      curr1: '', //USD
      curr2: '', //EUR
      value: '', //your amount
      output: 2, //conversion rate
      converted: '' //your amount * conversionrate
    };
    this.curr1Change = this.curr1Change.bind(this);
    this.curr2Change = this.curr2Change.bind(this);
    this.valueChange = this.valueChange.bind(this);
  }

  curr1Change(event){
    this.setState({curr1: event.target.value});
   }
  curr2Change(event){
    this.setState({curr2: event.target.value});
  }
  valueChange(event){
    this.setState({value: event.target.value});
  }
  
  componentDidMount() {
  
  }

  componentDidUpdate() {
  
  }

  render() {
       const arr = [ 'ALL','AFN','ARS','AWG', 'AUD','AZN','BSD','BBD', 'BDT','BYR','BZD','BMD','BOB', 'BAM','BWP', 'BGN','BRL', 'BND', 'KHR', 'CAD', 'KYD', 'CLP', 'CNY', 'COP', 'CRC','HRK','CUP', 'CZK', 'DKK', 'DOP', 'XCD', 'EGP', 'SVC','EEK', 'EUR','FKP', 'FJD','GHC','GIP','GTQ','GGP','GYD','HNL','HKD','HUF','ISK','INR','IDR','IRR','IMP','ILS','JMD','JPY','JEP','KZT','KPW','KRW','KGS','LAK','LVL', 'LBP','LRD','LTL','MKD','MYR','MUR','MXN','MNT','MZN','NAD','NPR','ANG','NZD','NIO','NGN','NOK','OMR','PKR','PAB','PYG','PEN','PHP','PLN','QAR','RON','RUB','SHP','SAR','RSD','SCR','SGD','SBD','SOS','ZAR','LKR','SEK','CHF','SRD','SYP','TWD','THB','TTD','TRL','TVD','UAH','GBP','USD','UYU','UZS','VEF','VND','YER','ZWD'];
       const options = arr.map(el => <option > {el} </option>);
    return (
      <>
        <ConversionBox/>
        <ChoiceBox/>
      </>
    );
  }

}

class Toolbar extends Component {

}

class ConversionBox extends Component {
  render() {
    return(
      <>
      
      <div className="wrapper">
        <div className="Inner_wrapper">
          <div className="amountToConvert">
            {/* amt & curr1 to convert */}
            <label className="">Your amount</label>
            <div className=""> {this.state.value}</div>
        </div>
        <div className="CurrToConvert">
            {/* amt & curr1 to convert */}
          <label className="">Your input currency</label>
          <div className=""> {this.state.curr1}</div>
        </div>
        <div className="convertedAmount">
          <label className=""></label>
          <div className=""> {this.state.value * this.state.output} IN {this.state.curr2}</div>
        </div>
        </div>
        
      </div>

      </>
  )}
}

class ChoiceBox extends Component {
  render() {
    return(
      <>
        <div className="wrapperChoicebox" >
         <label className="">Currency 1</label>
          <select value={this.state.curr1} onChange={this.curr1Change}  required>
            <option >Choose...</option>
              {options}
          </select>
          <label  className="">Currency 2</label>
          <select value={this.state.curr2} onChange={this.curr2Change}  required>
            <option >Choose...</option>
            {options}
          </select>
        </div>
        <div className="wrapperInput">
          <input type="text" value={this.state.value} onChange={this.valueChange} className="inputAmount" placeholder="Input your amout here" required/>
        </div>
      </>
  )}
}


export default App;
// COMPONENT LIST
  //1. head toolbar with logo, title, and login
  //2. conversion box
  //3. choice box, dropdowns to pick, labels
  //4. graph