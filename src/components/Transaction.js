import React from 'react'

const Transaction = (t) => {
  return (
    <tr>
      <td>{t.tran.posted_at}</td>
      <td>{t.tran.description}</td>
      <td>{t.tran.category}</td>
      <td>{t.tran.amount}</td>
    </tr>
  )
}

export default Transaction
