import { useState } from "react";
import QuizContex from "./QuizContext";

const QuizContexProvider = ({children}) =>{
    const [questions,setQuestions] = useState([])
    const [quizConfig,setQuizConfig] = useState({
        numberOfQuestion : '',
        categoryOfQuestion : '',
        difficultyOfQuestion : '',
        typeOfQuestion : ''
    })
    return(
        <QuizContex.Provider value={{questions,setQuestions,quizConfig,setQuizConfig}}>
            {children}
        </QuizContex.Provider>
    )
}

export default QuizContexProvider