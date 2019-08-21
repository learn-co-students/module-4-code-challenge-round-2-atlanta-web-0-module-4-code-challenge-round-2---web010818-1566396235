import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      searchTerm: ''
      
    }
    

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }
  componentDidMount() {
    const allTransactions = `https://boiling-brook-94902.herokuapp.com/transactions`
    fetch(allTransactions)
    .then(res => res.json())
    .then(data => {
      this.setState({
        transactions: data
      })
    })
  }

  handleOnChange = (e) => {
    console.log(e)
    this.setState({
      searchTerm: e.target.value
    })
  
  }

  filterTransactions = () => {
    let filteredTransactions = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    return filteredTransactions
  }

  render() {

    return (
      <div>
        <Search onChange={this.handleOnChange}/>
        <TransactionsList transactions={this.filterTransactions()} />
      </div>
    )
  }
}

export default AccountContainer
