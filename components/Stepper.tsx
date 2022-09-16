import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react'
import Leaf from "../assests/leaf.png"

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
                    completed: false
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

    
    const displaySteps = newStep.map((step: any, index: number) => {
        return ( 
            <div key={index} className={
                index !== newStep.length - 1 ? 'w-full flex items-center' : "flex items-center"}>
                <div className='relative flex flex-col items-center text-teal-600'>
                    <div className={`rounded-full transition duration-500 ease-in-out h-8 w-8 flex items-center justify-center py-3 
                        ${step.selected ? "bg-slate-200 font-bold border-2 border-blue-800" : "border-2 border-slate-200 bg-white"} ${index === 2 && step.selected ? "border-2 bg-green-200 ring-offset-2 ring-4 ring-green-100 border-green-800" : ""} ${index === 1 && step.selected && "border-2 ring-offset-2 ring-4 ring-blue-100"} ${index === 1 && step.completed && "ring-0 ring-offset-0"}`
                    }>
                        {/**display steps*/}
                        {step.completed && step.selected && (
                            <svg className={`h-6 w-6 text-blue-800 ${index === 2 && "text-green-500"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                            </svg>
                        )} 
                                
                        {!step.selected && !step.completed ? (
                            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" aria-hidden="true"></span>
                        ) : (
                            <div></div>
                        )}
                        
                        {step.selected && (
                            <span className={`h-2.5 w-2.5 rounded-full bg-blue-800 ${step.completed ? "hidden" : ""} ${index === 2 && "hidden"}`} aria-hidden="true"></span>
                        )}

                        {index === 2 && (
                            <svg className={`h-6 w-6 text-green-500 ${!step.selected && !step.completed && "hidden"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                            </svg>
                        )}
                        
                    </div> 
                    <div className={`absolute top-0 text-center mt-12 w-44 text-sm font-medium  ${step.highlighted ? "text-blue-800" : "text-gray-500"}`}>
                        {/**display description */}
                        {step.description}
                        {step.description === "Token details" && step.selected === true && (
                            <p className='font-normal text-sm'>Setup your token details</p>
                        )}
                        {step.description === "Token summary" && step.selected === true && (
                            <p className='font-normal text-sm'>Please review the details</p>
                        )}
                        {step.description === "Finished" && step.selected === true && (
                            <p className='font-normal text-sm'>Token created successfully!</p>
                        )}
                    </div>
                </div>
                <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step.completed ? "border-blue-800" : "border-gray-300"} `}>
                    {/**display line */}
                </div>
            </div>
        )
    });

    

  return (
    <>
        <div className='flex flex-row items-center justify-center'>
            <span className='text-black font-medium text-xl'>Mint token</span>
            <Image  
                src={Leaf}
                objectFit="cover"
                height={20}
                width={20}
            />
        </div>
        <div className='mx-4 p-4 flex justify-between items-center '>
            {displaySteps}
        </div>
    </>
  )
}

export default Stepper