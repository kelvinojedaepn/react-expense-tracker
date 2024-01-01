import {VictoryPie, VictoryLabel} from "victory"
import {useGlobalState} from "../context/GlobalState"

function ExpenseChart() {
  const {transactions} = useGlobalState()
  const expense =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1
  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0)
  const totalExpensesPorcentage = Math.round((expense / (income)) * 100)
  const totalIncomePorcentage = 100 - totalExpensesPorcentage

  return (
    <VictoryPie
      colorScale={["#e74c3c", "#2ecc71"]}
      data={[
        {x: "Expenses", y: totalExpensesPorcentage ? totalExpensesPorcentage : 0},
        {x: "Incomes", y: totalIncomePorcentage ? totalIncomePorcentage: 0},
      ]}
      animate={{
        duration: 200,
      }}
      labelComponent={<VictoryLabel angle={45} style={{fill: "white"}} />}
      labels={({datum}) => `${datum.y}%`}
    />
  )
}

export default ExpenseChart
