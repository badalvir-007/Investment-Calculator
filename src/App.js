

//import components
import { useState } from 'react';
import Logo from './components/Header/logo.js';
import Inputs from './components/InvestData/Inputs.js';
import Results from './components/ResultsOutput/results.js';

function App() {
  const  [userInput , setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
   setUserInput(userInput);
  };

  
  const yearlyData = [];
  
  if( userInput){
    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];
  
    
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
      
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  
  }


  return (
    <div>
      
      <Logo />
      <Inputs  onCalculate={calculateHandler}/>
      
      { !userInput && <p style={{textAlign : 'center'}}>No ivestemnt calculated yet.</p>}
      
      { userInput && < Results data={yearlyData} initialInvestment={userInput['current-savings']}/>}
      
    </div>
  );
}

export default App;
