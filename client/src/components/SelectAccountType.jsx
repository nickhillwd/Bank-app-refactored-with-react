var React = require('react');


var SelectAccountType = React.createClass({

  getSelectOptions: function(){
    var accountTypes = [];
    for(var account of this.props.bank.accounts){
      if(!accountTypes.includes(account.type)){
        accountTypes.push(account.type)
      }
    }
    var SelectOptions = accountTypes.map(function(type, index){
      return <option value={type} key={index}>{type}</option>
    });
    return SelectOptions;
  },

  handleChange: function(event){
    event.preventDefault();
    var type = event.target.value;
    this.props.setCurrentType(type)
  },



  render: function(){

    var SelectOptions = this.getSelectOptions();

    return(
      <div>
        <h4>SelectAccountType:</h4>
        <select onChange={this.handleChange}>
          {SelectOptions}
        </select>
      </div>
    )
  }
});

module.exports = SelectAccountType;