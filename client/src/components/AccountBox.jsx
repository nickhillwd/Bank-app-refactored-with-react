var React = require('react');

var AccountBox = React.createClass({

  render: function(){

  var bank = this.props.bank;
  var owner = this.props.currentAccountOwner;

  var account = bank.findAccountByOwnerName(owner);

  if(!account){
    return <h4>Please Select Account</h4>
  }

    return(
      <div>
        <ul>
          <li>Account Owner: {account.owner}</li>
          <li>Balance: £{account.amount}</li>
        </ul>
      </div>
    )
  }

});

module.exports = AccountBox;