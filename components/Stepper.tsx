import React, { useEffect, useState, useRef } from 'react'

interface Props {
    steps: string[]
    currentStep: number
}

const Stepper = ({ steps, currentStep }: Props) => {
    const [newStep, setNewStep] = useState<string[]>([]);
    const stepRef = useRef({});;

    const updateStep = (stepNumber: number, steps: any) => {
        const newSteps = [...steps]
        let count = 0;

        while(count < newSteps.length) {
            //current step
            if (count === stepNumber){
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: true,
                    completed: true
                }
                count++;
            }
            //step completed
            else if (count < stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: true,
                    completed: true
                }
                count++;
            }
            //step pending
            else {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: false
                }
                count++;
            }
        }
        return newSteps;
    }

    useEffect(() => {
        //create object
        const stepsState = steps.map((step, index) => 
            Object.assign(
                {},
                {
                    description: step,
                    completed: false,
                    highlighted: index === 0 ? true : false,
                    selected: index === 0 ? true : false
                }
            )
        )

        stepRef.current = stepsState;
        const current = updateStep(currentStep - 1, stepRef.current);
        setNewStep(current)
    }, [steps, currentStep])    
    console.log(newStep)

    const displaySteps = newStep.map((step: any, index: number) => {
        return ( 
            <div key={index} className={
                index !== newStep.length - 1 ? 'w-full flex items-center' : "flex items-center"}>
                <div className='relative flex flex-col items-center text-teal-600'>
                    <div className={`rounded-full transition duration-500 ease-in-out h-8 w-8 flex items-center justify-center py-3 
                        ${step.selected ? "bg-slate-200 font-bold border border-blue-800" : ""}`
                    }>
                        {/**display steps*/}
                        {step.completed ? (
                            <svg className="h-6 w-6 text-blue-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                            </svg>
                        ) : (
                            <a href="#" className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-200 bg-white" aria-current="step">
                                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" aria-hidden="true"></span>
                            </a>
                        )}
                    </div> 
                    <div className={`absolute top-0 text-center mt-16 w-32 text-sm font-medium  ${step.highlighted ? "text-blue-800" : "text-gray-700"}`}>
                        {/**display description */}
                        {step.description}
                    </div>
                </div>
                <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step.completed ? "border-blue-800" : "border-gray-300"} `}>
                    {/**display line */}
                </div>
            </div>
        )
    });

    

  return (
    <div className='mx-4 p-4 flex justify-between items-center '>
        {displaySteps}
    </div>
  )
}

export default Stepper