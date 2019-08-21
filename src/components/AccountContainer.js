import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  // constructor() {
  //   super()
  state = {
    allTrans: [],
    filteredTrans: []
  }

  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => {
      this.setState({
    allTrans: data,
    filteredTrans: data})
      })
  }

  handleChange = (event) => {
    // your code here
    let results = this.state.allTrans
    // console.log(this.state.allTrans)
    if (event) 
    { 
    results = results.filter(trans => ((trans.description).toUpperCase().includes(event) || (trans.category).toUpperCase().includes(event)))
    }
    this.setState({filteredTrans: results})
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList trans={this.state.allTrans} 
        filteredTrans={this.state.filteredTrans} />
      </div>
    )
  }
}

export default AccountContainer
