/* eslint-disable react/prop-types */
import {useGlobalState} from "../../context/GlobalState"

function TransactionItem({transaction}) {
  const {deleteTransaction} = useGlobalState()
  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center" key={transaction.id}>
      <p className="text-sm">{transaction.description}</p>
      <div>
            <span>${transaction.amount}</span>
            <button
              onClick={() => {
                deleteTransaction(transaction.id)
              }}
              className="bg-red-700 text-white px-3 rounded-lg ml-2 pb-1"
            >
              x
            </button>
      </div>
    </li>
  )
}

export default TransactionItem
