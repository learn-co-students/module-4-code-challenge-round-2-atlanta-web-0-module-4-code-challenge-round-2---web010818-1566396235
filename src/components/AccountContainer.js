import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'


class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      searchTerm: ""
    }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  }

  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(res => res.json())
    .then(data => this.setState({transactions: data}))
  }

  handleChange=(e)=> {
    console.log(e.target.value)
    this.setState({searchTerm: e.target.value})
  }

  filterResults=()=>{
    return this.state.transactions.filter(tran => 
      tran.description.toLowerCase().includes(this.state.searchTerm) ||
      tran.category.toLowerCase().includes(this.state.searchTerm))
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList  transactions={this.filterResults()}/>
      </div>
    )
  }
}

export default AccountContainer
