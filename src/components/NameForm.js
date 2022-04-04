import React from "react";
import { useForm } from "react-hook-form";

const NameForm = ({ showResults }) => {

    // const [ isError, setIsError ] = React.useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

        showResults(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="page grouping wrapper">
                <div>
                    {errors.name && <p className="error-text">Please enter your name</p>}
                    <input 
                        name="name" 
                        id="name" 
                        placeholder="Enter Name" 
                        type="text"
                        {...register("name", { required: true })}
                        >
                        </input>
                    <button 
                        type="submit"
                        value="submit"
                        >Get the Results</button>
                </div>
            </div>
        </form>
    )
}

export default NameForm;