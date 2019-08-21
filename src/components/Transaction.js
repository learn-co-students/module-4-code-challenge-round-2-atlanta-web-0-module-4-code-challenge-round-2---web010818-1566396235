import React from 'react'

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.transaction.created_at}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount}</td>
    </tr>
  )
}

export default Transaction
