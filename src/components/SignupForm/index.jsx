// import {useState} from 'react';
import { useForm } from 'react-hook-form';



const SignupForm = () => {
    const {register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleClearClick = ()=>{
        reset();
        
    }
    const handleSubmitForm = (data)=> {
        console.log(data);        
    }
    console.log(errors);
    

    return (
        <form action=""  onSubmit={handleSubmit(handleSubmitForm)} >
        <label htmlFor="">Name
            <input type="text" {...register('name', {required:true})}  />
        </label>
        <label htmlFor="">Age
            <input type="text" {...register('age',{required:true})}  />
        </label>
        <label htmlFor="">Address
            <input type="text" {...register('adress',{required:true})}  />
        </label>
        <label htmlFor="">Zipcode
            <input type="text" {...register('zipcode',{required:true})}  />
        </label>
        <label htmlFor="">Phone
            <input type="text" {...register('phone',{required:true})}  />
        </label>

        <div>
            <button type='button' onClick={handleClearClick}  >Clear</button>
            <button type='submit' >submit</button>
        </div>

    </form>
 );
};

export default SignupForm;




