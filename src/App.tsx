import React, {FC, createContext} from 'react';
// FC: Functional Component type
import './index.css'
import './App.css';
import Person, {CarManufacturer} from './components/Person';

interface AppContextInterface {
  name:string;
  age: number;
  country:string;
}

const AppContext = createContext<AppContextInterface | null>(null)

const App: FC = () => {
  const contextValue: AppContextInterface = {
    name:"Pedro",
    age: 20,
    country: "Brazil"
  }
  return (
    <AppContext.Provider value={ contextValue } >
      <div className="App">
        <Person name={'lul'} age={22} email={'gmail'} car={CarManufacturer.VW} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
