import React from 'react';
import { animateScroll } from 'react-scroll';

import './App.css';

import Logo from '../components/Logo';
import FormContainer from './FormContainer';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Results from '../components/Results';
import NameForm from '../components/NameForm';

// import { handleResults } from '../io/handleResults'; /// used to send data to API.


const App = () => {

  const [ stepNum , setStepNum  ] = React.useState(0);
  const [ result, setResult] = React.useState(null);


  // Called onSubmit of the test to pass the result as 'res' and to load the next step which is to load Name form
  const passResult = (res) => {

    setResult(res);
    // setting stepNum to 1 to get the Name form
    setStepNum(1);

  }


  // Called after submitting the Name details. Might need to add username and password later.
  // the data we get here is the User's Name from the Name Form
  const showResults = (data) => {

    // setting the stepNum 2 to load the third page / to display the results. 
    setStepNum(2);

    // handleResults(data.name, result); 
    // handleResults function is used to send the data to the API. But the API is not up and running currenlty. Therefore, this function is not included for now.

  }


  // Called from the Results Page to Retake test
  const retakeTest = () => {

    // setting stepnum 0 to get to the first page. By Page I mean the first screen or whatever which is the Test. Sad :(
    setStepNum(0);
    animateScroll.scrollToTop({smooth: true, duration: 300})
  }



  return (
    <div>
      <Logo />
      <Header step={stepNum} />

      {stepNum===0 && <FormContainer passResult={passResult}/>}

      {stepNum===1 && <NameForm showResults={showResults}/>}

      {stepNum===2 && <Results results={result} onRetake={retakeTest}/>}
        
      <Footer>© Copyright owned by Shahzan Sadick</Footer>
    </div>
  );
}


export default App;