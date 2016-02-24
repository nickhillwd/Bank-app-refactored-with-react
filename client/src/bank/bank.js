var Bank = function(){
  this.accounts = [];
}

Bank.prototype = {
  addAccount: function(account){
    this.accounts.push(account);
  },

  findAccountByOwnerName:function(ownerName){
    var foundAccount = null;
    for (var account of this.accounts) {
      if(account.owner === ownerName){
        foundAccount = account;
      }
    }
    return foundAccount;
  },

  filteredAccounts: function(type){
    if(!type) return this.accounts
    var filteredAccounts = [];
    for (var account of this.accounts) {
      if(type === account.type)
        filteredAccounts.push(account);
    }
    return filteredAccounts;
  },

  totalCash:function(type){
    var total = 0;
    for (var account of this.filteredAccounts(type)) {
      total += account.amount;
    }
    total = Math.round(total * 100) /100;
    return total;
  },

  accountAverage:function(){
    var avg = this.totalCash()/this.accounts.length;
    return Math.round(avg * 100) /100;
  },

  payFees: function(){
    for(var account of this.accounts){
      account.type === "business" ? account.amount -= 50 : account.amount -= 5;
      account.amount = Math.round(account.amount * 100) /100;
    }
  },

  interest: function(){
    for(var account of this.accounts){
      account.amount += (account.amount * 0.01);
      account.amount = Math.round(account.amount * 100) /100;
    }
  }
}

module.exports = Bank;








