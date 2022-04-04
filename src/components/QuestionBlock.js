import React from "react";
import { Element } from "react-scroll/modules";


const QuestionBlock = ({ register, id, children }) => {

    const questionId = "question" + id;
    const elName = "element" + id;

    return (
        <li id={id} className="">
            <Element name={elName}>
            <div className="question-block">   
                <label className="question" id={questionId}>
                    { children }
                </label>
                <div className="answer">
                    <span className="disagree-text">Disagree</span>
                    <input type='radio' {...register(questionId, { required: true })} className="radio big disagree" value="1" />
                    <input type='radio' {...register(questionId, { required: true })} className="radio medium disagree" value="2" />
                    <input type='radio' {...register(questionId, { required: true })} className="radio small " value="3" />
                    <input type='radio' {...register(questionId, { required: true })} className="radio medium agree" value="4" />
                    <input type='radio' {...register(questionId, { required: true })} className="radio big agree" value="5" />
                    <span className="agree-text">Agree</span>
                </div>
            </div>
            </Element>
        </li>
)
}


export default QuestionBlock;