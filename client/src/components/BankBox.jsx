var React = require('react');
var sampleAccounts = require('../sample.json');
var Bank = require('../bank/bank.js');

var BankBox = React.createClass({
  
  getInitialState: function(){
    return {accounts: sampleAccounts}
  },

  render: function(){

    var bank = new Bank();

    for(var account of this.state.accounts){
      bank.addAccount(account);
    }

    return(
      <div>
        <h1>React BankBox</h1>
        <h2>Total: £{bank.totalCash()}</h2>
      </div>
    )
  }

});

module.exports = BankBox;