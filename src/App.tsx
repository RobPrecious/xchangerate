import { CurrencyConverter } from "./components/CurrencyConverter";
import { DropdownOption } from "./shared/interfaces/dropdown.interface";
import currencyCodeToName from "./shared/reference/currencyCodeToName";

function App() {
  return (
    <div className="App">
      <CurrencyConverter />
    </div>
  );
}

export default App;
