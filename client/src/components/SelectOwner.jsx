var React = require('react');

var SelectOwner = React.createClass({

  getSelectOptions: function(){

    var bank = this.props.bank;
    var type = this.props.currentAccountType;
    var selectOptions = bank.filteredAccounts(type).map(function(account, index){
      return <option value={account.owner} key={index}>{account.owner}</option>
    });
    return selectOptions;
  },

  handleChange: function(event){
    event.preventDefault();
    var ownerName = event.target.value;
    this.props.setCurrentOwner(ownerName);
  },

  render: function(){

    var selectOptions = this.getSelectOptions();
    return(
      <div>
        <h4>Select Account Owner:</h4>
        <select onChange={this.handleChange}>
          {selectOptions}
        </select>
      </div>
    )
  }

});

module.exports = SelectOwner;