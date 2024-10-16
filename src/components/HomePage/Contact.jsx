import React from 'react'
import contact from "../../assets/contact.jpg"
import { useForm } from 'react-hook-form'

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm()

    const submitContactForm = () => {

    }

    return (
        <div className='flex  mb-20 gap-14'>
            <img
                src={contact}
                alt=''
                className='w-[561px] h-[567px]'
            />

            <form
                onSubmit={handleSubmit(submitContactForm)}
                className='flex flex-col gap-4'
            >

                <div className='flex flex-col gap-1'>

                    <label htmlFor="name" className="lable-style text-[#000000] text-sm">
                        Name
                    </label>

                    <input
                        type="text"
                        id="name"
                        name='name'
                        placeholder="Enter your name"
                        {...register("name", { required: true })}
                        className=' w-[503px] h-[39px] flex justify-center pl-4 border-[1px] rounded-[4px] border-[#D9D9D9]'
                    />
                    {errors.name &&
                        <span className="-mt-1 text-[12px] text-[#FE5D15]">
                            Please enter your name.
                        </span>
                    }


                </div>


                <div className='flex flex-col gap-1'>

                    <label htmlFor="email" className="lable-style text-[#000000] text-sm">
                        Email
                    </label>

                    <input
                        type="email"
                        id="email"
                        name='email'
                        placeholder="Enter your email address"
                        {...register("email", { required: true })}
                        className=' w-[503px] h-[39px] flex justify-center pl-4 border-[1px] rounded-[4px] border-[#D9D9D9]'
                    />
                    {errors.email &&
                        <span className="-mt-1 text-[12px] text-[#FE5D15]">
                            Please enter your email address.
                        </span>
                    }


                </div>

                <div className='flex flex-col gap-1'>

                    <label htmlFor="subject" className="lable-style text-[#000000] text-sm">
                        Subject
                    </label>

                    <input
                        type="text"
                        id="subject"
                        name='subject'
                        placeholder="What do you want to talk about"
                        {...register("subject", { required: true })}
                        className=' w-[503px] h-[39px] flex justify-center pl-4 border-[1px] rounded-[4px] border-[#D9D9D9]'
                    />
                    {errors.subject &&
                        <span className="-mt-1 text-[12px] text-[#FE5D15]">
                            Please enter your subject.
                        </span>
                    }


                </div>


                <div className='flex flex-col gap-1'>

                    <label htmlFor="message" className="lable-style text-[#000000] text-sm">
                        Message
                    </label>

                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="7"
                        placeholder="Enter your message here"
                        {...register("message", { required: true })}
                        className=' w-[503px] h-[182px] flex justify-center pl-4 border-[1px] rounded-[4px] border-[#D9D9D9]'
                    />


                    {errors.message &&
                        <span className="-mt-1 text-[12px] text-[#FE5D15]">
                            Please enter your message.
                        </span>
                    }


                </div>

                <div className='flex flex-col'>
                    <p className='text-[#898989] text-[16px]'>
                        We will not share your personal details.

                    </p>

                    <p className='text-[#898989] text-[16px]'>
                        Our team will try to reach you within the next 24 hours.

                    </p>

                </div>


                <button
                    type='submit'
                    className='text-center w-fit text-[13px] sm:text-[16px] text-[#FFFFFF] p-[10px]
                               rounded-md font-bold bg-[#FE5D15] 
                             hover:shadow-none hover:scale-95 transition-all duration-200'
                >
                    Get in touch
                </button>



            </form>

        </div>
    )
}

export default Contact