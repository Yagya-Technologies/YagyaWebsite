import React from 'react'
import phone from "../../assets/phone.svg"
import calender from "../../assets/calendar.svg"
import gear from "../../assets/gear.svg"
import arrow from "../../assets/arrow.svg"
import image from "../../assets/image.png"


const TimeLineSection = () => {

const TimeLine = [
    {  
        index:1,
        Logo: phone,
        Heading: "Initiating a kickoff meeting",
        Description: "Lets's setup a meeting and discuss your needs",
    },
    {
        index:2,
        Logo: calender,
        Heading: "Planning the sprints",
        Description: "Let's Plan out how , when and what we will deliver.",
    },
    {
        index:3,
        Logo: gear,
        Heading: "Achieving results",
        Description: "We deliver quality solutions according to your needs.",
    },
    {
        index:4,
        Logo: arrow,
        Heading: "Scaling fast",
        Description: "Accelerate solutions tailored for your solutions.",
    },
]

  return (
    <div>
        <div className="flex flex-col lg:flex-row-reverse gap-20 mb-20 items-center">
          <div className=" flex flex-col  lg:gap-3">
            {TimeLine.map((ele, i) => {
              return (
                <>
                 <div className="flex flex-col lg:gap-3" key={i}>
                  <div className="flex gap-6" key={i}>
                   
                    <div className=" w-[54px] h-[54px] bg-white border flex justify-center items-center rounded-full  ">
                      <img src={ele.Logo} alt="" className='w-[30px]  h-[30px] ' />
                    </div>
                    <div>
                    <h2 className='text-[#898989] text-sm'>0{ele.index}</h2>
                      <h2 className="font-semibold text-[#000000] text-[26px]">{ele.Heading}</h2>
                      <p className="text-[11px] text-[#000000]">{ele.Description}</p>
                    </div>
                  </div>
                  <div
                    className={`hidden ${
                      TimeLine.length - 1 === i ? "hidden" : "lg:block"
                    }  h-14 border-solid border-r border-[#FE5D15]  w-[26px]`}
                  ></div>
                 
                </div>
               
                </>
               
                
              );
            })}
          </div>
        

          <div>
            <img src={image}
            alt=''
            className='w-[676px] shadow-[#FE5D15] shadow-[20px_20px_0px_0px] object-cover '
            
            />
          </div>
          
        </div>
      </div>
  )
}

export default TimeLineSection