import React from "react";
import { resultColors } from "../core/resultsColors";

const Results = ({ results, onRetake }) => {    

    return (
        <div className="page grouping wrapper result-block">
            <ul className="result">


                {
                    Object.keys(results).map((key) => {

                        const [trait, score, color] = [key, results[key], resultColors[key]]

                        return (
                            <li key={trait+score}>
                                <h3>{trait}</h3>
                                <div className="progressBar">
                                    <span style={{ width: score+"%", backgroundColor: color }}>
                                        <span>{score}</span>
                                    </span>
                                </div>
                            </li>
                        )
                    })
                }


                <div className="flex justify-between">
                    <div className="flex pa3 mr2">
                        <button 
                            type="button"
                            onClick={onRetake}>
                                Retake Test
                            </button>
                    </div>
                </div>


            </ul>
        </div>
    )
}


export default Results;