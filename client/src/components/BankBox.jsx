var React = require('react');
var sampleAccounts = require('../sample.json');
var Bank = require('../bank/bank.js');
var Account = require('../bank/account.js');
var AccountBox = require('./AccountBox.jsx');
var SelectAccountType = require('./SelectAccountType.jsx');
var SelectOwner = require('./SelectOwner');

var BankBox = React.createClass({
  
  getInitialState: function(){
    return {accounts: sampleAccounts, currentAccountType: "personal", currentAccountOwner: null}
  },

  setCurrentAccountType: function(type){
    this.setState({currentAccountType: type});
  },

  setCurrentAccountOwner: function(owner){
    this.setState({currentAccountOwner: owner})
  },

  render: function(){

    var bank = new Bank();

    for(var account of this.state.accounts){
      var AccountObj = new Account(account);
      bank.addAccount(AccountObj);
    }

    return(
      <div>
        <h1>React BankBox™</h1>
        <h2>Total: £{bank.totalCash()}</h2>
        <SelectAccountType bank={bank} setCurrentType={this.setCurrentAccountType}></SelectAccountType>
        <SelectOwner bank={bank} currentAccountType={this.state.currentAccountType} setCurrentOwner={this.setCurrentAccountOwner}></SelectOwner>
        <AccountBox bank={bank} currentAccountOwner={this.state.currentAccountOwner}></AccountBox>
      </div>
    )
  }

});

module.exports = BankBox;