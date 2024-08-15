import React from 'react'
import { useForm } from "react-hook-form";
function Contact() {

    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

  return (
    <div className='h-screen flex items-center justify-center'>
        <div className=' md:border-[2px] w-[400px] p-4 rounded-md space-y-2 '>
            <h2 className='text-center text-2xl'>Contact Us</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 mt-12'>
                <span>Name:</span>
                <br />
                <input className='border outline-none rounded-md p-2 dark:text-black' type="text" placeholder='Enter your Name' {...register("name", { required: true })}/>
                <br />
                {errors.name && <span className='text-center text-sm text-red-500'>This field is required</span>}
                <br />
                <br />
                <span className='mt-4'>Email:</span>
                <br />
                <input className='border outline-none rounded-md p-2 dark:text-black' type="email" placeholder='Enter your Email' {...register("email", { required: true })}/>
                <br />
                {errors.email&& <span className='text-center text-sm text-red-500'>This field is required</span>}
                <br />
                <br />
                <span className='mt-4'>Phone Number:</span>
                <br />
                <input className='border outline-none rounded-md p-2 dark:text-black' type="phone" placeholder='Enter your Phone Number' {...register("phonenumber", { required: true })}/>
                <br />
                {errors.phonenumber && <span className='text-center text-sm text-red-500'>This field is required</span>}
                <br />
                <br />
                
                <button className="btn btn-secondary font-sans block mx-auto">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact