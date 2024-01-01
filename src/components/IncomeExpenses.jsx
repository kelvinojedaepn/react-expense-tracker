import {useGlobalState} from "../context/GlobalState"

function IncomeExpenses() {
  const {transactions} = useGlobalState()
  const amounts = transactions.map((transaction) => transaction.amount)
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)
  const expense =
    amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2) * -1

  return (
    <>
      <div className="flex justify-between my-2">
            <h1 >Income</h1>
            <p>{income}</p>
      </div>
      <div className="flex justify-between my-2">
            <h1>Expense</h1>
            <p>{expense}</p>
      </div>
    </>
  )
}

export default IncomeExpenses
