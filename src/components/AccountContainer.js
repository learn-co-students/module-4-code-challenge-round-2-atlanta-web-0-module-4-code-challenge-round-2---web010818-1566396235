import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
//import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  state = {
    transactions: [],
    filteredTransactions: []
  }

  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(res => res.json()) 
    .then(data => this.setState({
          transactions:data,
          filteredTransactions: data
        }));
      }

    handleChange = (event) => {
      // your code here
      let results = this.state.transactions
      //console.log(this.state.transactions)
      if(event){
        console.log(event);
        
        results = results.filter(trans => ((trans.description).toLowerCase().includes(event) || (trans.category).toLowerCase().includes(event))) //added .toLowerCase() to help with search
      }
      this.setState({filteredTransactions: results})
    }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList trans={this.state.transactions}
        filteredTransactions={this.state.filteredTransactions}/>
      </div>
    )
  }
}

export default AccountContainer
