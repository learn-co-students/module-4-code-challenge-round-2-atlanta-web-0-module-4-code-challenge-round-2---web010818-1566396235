import React from 'react'

const Transaction = (trans) => {
  // console.log(trans)
  return (
    <tr>
      <td>{trans.trans.posted_at}</td>
      <td>{trans.trans.description}</td>
      <td>{trans.trans.category}</td>
      <td>{trans.trans.amount}</td>
    </tr>
  )
}

export default Transaction
