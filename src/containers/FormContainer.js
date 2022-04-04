import React from "react";
import { useForm } from "react-hook-form";
import { scroller } from "react-scroll";

import { questions } from "../io/questions";
import QuestionBlock from "../components/QuestionBlock";
import NavButtonsDiv from "../components/NavButtonsDiv";

// computeResults function imported from computeResults.js
import { computeResult } from "../io/computeResults";


const FormContainer = ({ passResult }) => {

    // functions used to hadle the form data.
    const { watch, register, handleSubmit, formState: { errors } } = useForm();


    // Watch() used to get data before submitting the form and looping throught the data to find the first element which is unattended.
    const theWatcher = () => {    
            const data = watch();

            for (const key in data) {
                if (!data[key]) {

                    // substring8 is to get the element's no. removing the first 8 letters of 'question' in 'question{num}' where num is the question number.
                    const element = 'element' + key.substring(8);
                    // element name is stored as "element" + {questionNumber}. 

                    // console.log(element);   //// For Debugging
                    
                    scroller.scrollTo(
                        element, {
                        duration:300, 
                        smooth: true,
                        offset: -45,
                    } )

                    break;
                }
            }
    }


    // called on submit.
    const onSubmit = data => {

        // computing results based on the form data
        const result = computeResult(data);

        // showResults() is the Parent's funciton to pass the results data
        passResult(result);

    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="page grouping wrapper">
                <ul>

                    { questions.map((user, i) => {

                        const qName = "question" + i;

                        return (

                        <QuestionBlock 
                            key={"q"+i} 
                            id={i} 
                            register={register} 
                            >
                                {errors[qName] && <p className="error-text">not answered</p>}
                                {user}
                            </QuestionBlock>
                            
                        )
                    })}

                </ul>
                <NavButtonsDiv theWatcher={theWatcher}/>
            </div>
        </form>
    );
}

export default FormContainer;