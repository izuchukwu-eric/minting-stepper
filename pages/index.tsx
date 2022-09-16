import type { NextPage } from 'next'
import { useState } from 'react'
import Stepper from '../components/Stepper'
import Details from '../components/steps/Details'
import Finished from '../components/steps/Finished'
import Summary from '../components/steps/Summary'


const Home: NextPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Token details",
    "Token summary",
    "Finished"
  ]

  /**
   * function to move to/back to different steps
   */
  const handleClick = (direction: string) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    //check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }

  const displayStep = (step: any) => {
    switch(step) {
      case 1: 
        return <Details handleClick={handleClick} />
      case 2: 
        return <Summary handleClick={handleClick} />
      case 3: 
        return <Finished />
      default:
    }
  }


  return (
    <div className="md:w-1/2 mx-auto pb-2 bg-white">
      <div className='container horizontal mt-20'>
        {/**Stepper */}
        <Stepper 
          steps={steps}
          currentStep={currentStep}
        />

        {/**Display components */}
        <div className='my-10 p-10'>
            {displayStep(currentStep)}
        </div>
      </div>
    </div>
  )
}

export default Home
