import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'
// import Transaction from './Transaction'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = ({
      transactions: [],
      searchTerm: ''
    })
  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(r=>r.json())
    .then(data=>this.setState({
      transactions: data
    }))
  }



  handleChange(e) {
    let filteredArr = this.state.transactions.filter(transaction=> {
      return transaction.category.toLowerCase().includes(this.state.searchTerm)
    })

    this.setState({
      transactions: filteredArr
    })
  }

  render() {
    return (
      <div>
        <Search transactions={this.state.transactions} onChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
