var React = require('react');

var AccountBox = React.createClass({

  handleDelete: function(event){
    event.preventDefault();
    var bank = this.props.bank;
    var ownerName = this.props.currentAccountOwner;
    bank.deleteAccount(ownerName);
    this.props.updateAccounts(bank.accounts);
  },

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
        <button onClick={this.handleDelete}>Delete This Account</button>
      </div>
    )
  }

});

module.exports = AccountBox;