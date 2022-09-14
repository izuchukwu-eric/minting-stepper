import type { NextPage } from 'next'
import { useState } from 'react'
import Stepper from '../components/Stepper'
import Details from '../components/steps/Details'
import Finished from '../components/steps/Finished'
import Summary from '../components/steps/Summary'


const Home: NextPage = () => {
  const [currentStep, setCurrentStep] = useState(1);


  const steps = [
    "Token details, Setup your token details",
    "Token summary",
    "Finished"
  ]

  const displayStep = (step: any) => {
    switch(step) {
      case 1: 
        return <Details />
      case 2: 
        return <Summary />
      case 3: 
        return <Finished />
      default:
    }
  }

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">

      <div className='container horizontal mt-20'>
        {/**Stepper */}
        <Stepper 
          steps={steps}
          currentStep={currentStep}
        />

        {/**Display components */}

      </div>

    </div>
  )
}

export default Home
