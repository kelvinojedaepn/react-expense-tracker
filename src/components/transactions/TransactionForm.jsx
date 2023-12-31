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
  }
  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="Enter a Description"
        onChange={(e) => {
          setDescription(e.target.value)
        }}
      />
      <input
        type="number"
        placeholder="Enter a Amount"
        step={"0.01"}
        onChange={(e) => {
          setAmount(e.target.value)
        }}
      />
      <button>Add Transaction</button>
    </form>
  )
}

export default TransactionForm
