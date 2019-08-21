import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.state = {
      transactions: [],
      searchInput: ""
    }
  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then(data => this.setState({
      transactions: data
    }))
  
  }
   



  handleChange(e) {
    // your code here
    this.setState({
      searchInput: e.target.value
    })
  }


  filteredTransactions(){
    return this.state.transactions.filter(transaction => transaction.description.includes(this.state.searchInput))
  }


  render() {

    return (
      <div>
        <Search searchInput={this.state.searchInput} onChange={this.handleChange}/>
        <TransactionsList transactions={this.filteredTransactions()}/>
      </div>
    )
  }
}

export default AccountContainer
