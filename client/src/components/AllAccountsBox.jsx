var React = require('react');

var AllAccountsBox = React.createClass({

  getTableRows: function(){
    var rows = this.props.bank.accounts.map(function(account, index){
      return(
        <tr key={index}>
          <td>{account.owner}</td>
          <td>{account.type}</td>
          <td>{account.amount}</td>
        </tr>
      )
    });
    return(rows);
  },

  render: function(){

    var bank = this.props.bank;
    var tableRows = this.getTableRows();

    return(
      <div>

        <h4>All Accounts:</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th> 
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
          <tfoot>
            <tr>
              <th>Bank Total:</th>
              <th>Average Balance:</th>
            </tr>
            <tr>
              <td>{bank.totalCash()}</td>
              <td>{bank.accountAverage()}</td>
            </tr>
          </tfoot>
        </table>

        <h4>All Account Functions:</h4>
        <button>Pay Fees</button>
        <button>Interest</button>

      </div>
    );
  }

});

module.exports = AllAccountsBox;