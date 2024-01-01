import Balance from "./components/Balance.jsx"
import Header from "./components/Header.jsx"
import IncomeExpenses from "./components/IncomeExpenses.jsx"
import TransactionForm from "./components/transactions/TransactionForm.jsx"
import TransactionList from "./components/transactions/TransactionList.jsx"
import {GlobalProvider} from "./context/GlobalState.jsx"

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="mx-auto container w-2/6">
          <div className="bg-zinc-800 rounded-lg p-10 flex gap-x-2">
            <div>
              <Header />
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="w-full">
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App
