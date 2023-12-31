import {useGlobalState} from "../context/GlobalState"

function IncomeExpenses() {
  const {transactions} = useGlobalState()
  const amounts = transactions.map((transaction) => transaction.amount)
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)*-1

  return (
    <>
      <h1>Income</h1>
      <p>{income}</p>
      <h1>Expense</h1>
      <p>{expense}</p>
    </>
  )
}

export default IncomeExpenses
