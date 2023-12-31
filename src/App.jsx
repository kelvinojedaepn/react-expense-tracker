import Balance from "./components/Balance.jsx"
import Header from "./components/Header.jsx"
import IncomeExpenses from "./components/IncomeExpenses.jsx"
import TransactionForm from "./components/transactions/TransactionForm.jsx"
import TransactionList from "./components/transactions/TransactionList.jsx"
import { GlobalProvider} from "./context/GlobalState.jsx"

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <IncomeExpenses/>
      <Balance/>
      <TransactionForm/>
      <TransactionList/>
      <h1>Hellow word</h1>
    </GlobalProvider>
  )
}

export default App
