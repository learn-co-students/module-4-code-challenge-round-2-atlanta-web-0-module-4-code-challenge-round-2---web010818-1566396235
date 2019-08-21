import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state ={
      transactions: [], 
      userInput: ''
    }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentDidMount(){

    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(data => this.setState({
      transactions: data
    }))
  }

  handleChange = (e) => {
    // your code here
    console.log(e.target.value)
    this.setState({userInput: e.target.value})
  }

  filterInput() {
    return this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.userInput) || transaction.category.toLowerCase().includes(this.state.userInput))
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList  transactions={this.filterInput()}/>
      </div>
    )
  }
}

export default AccountContainer
