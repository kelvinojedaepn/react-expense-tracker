import {useState} from "react"
import {useGlobalState} from "../../context/GlobalState"

function TransactionForm() {
  const {addTransaction} = useGlobalState()
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState(0)
  const onSubmitForm = (e) => {
    e.preventDefault()
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    })
    setAmount(0)
    setDescription("")
  }
  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="Enter a Description"
        onChange={(e) => {
          setDescription(e.target.value)
        }}
        className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        value={description}
      />
      <input
        type="number"
        placeholder="Enter a Amount"
        step={"0.01"}
        onChange={(e) => {
          setAmount(e.target.value)
        }}
        className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        value={amount}
      />
      <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg mb-2 w-full">Add Transaction</button>
    </form>
  )
}

export default TransactionForm
