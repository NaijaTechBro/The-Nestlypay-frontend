import React, { useState } from 'react'
import Phase1 from './phase/Phase1'
import Phase2 from './phase/Phase2'
import Phase3 from './phase/Phase3'

const BusinessSignup = () => {
    const [steps, setsteps] = useState(1);
    return (
        <div className=" w-full w-11/12 mx-auto flex flex-col justify-center overflow-y-auto pb-4">
        {steps >= 2 && (
            <div
            className="flex justify-end md:w-[80%]"
            onClick={(e) => setsteps((prev) => prev - 1)}
            >
            <div className="bg-white h-10 rounded-lg border shadow w-16 flex justify-center items-center mb-4 ">
            </div>
            </div>
        )}
        <form action="" className="mb-3 h-full w-full">
            {steps === 1 && <Phase1 setsteps={setsteps} />}
            {steps === 2 && <Phase2 setsteps={setsteps} />}
            {steps === 3 && <Phase3 setsteps={setsteps} />}
        </form>
        </div>
    )
}

export default BusinessSignup