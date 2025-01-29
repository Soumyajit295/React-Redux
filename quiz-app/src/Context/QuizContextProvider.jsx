import { useEffect, useState } from "react";
import QuizContext from "./QuizContext";

const QuizContextProvider = ({ children }) => {
    const [questions, setQuestions] = useState(() => JSON.parse(localStorage.getItem('quizes')) || []);
    const [loading, setLoading] = useState(() => JSON.parse(localStorage.getItem('loading')) ?? true);

    const fetchQuestion = async (questionCount, questionCategory, questionDifficulty, questionType) => {
        try {
            setLoading(true);
            const response = await fetch(`https://opentdb.com/api.php?amount=${questionCount}&category=${questionCategory}&difficulty=${questionDifficulty}&type=${questionType}`);
            const data = await response.json();
            setQuestions(data?.results || []);
        } catch (error) {
            console.error("Fetch Error:", error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        localStorage.setItem('quizes', JSON.stringify(questions));
    }, [questions]);

    useEffect(() => {
        localStorage.setItem('loading', JSON.stringify(loading));
    }, [loading]);

    return (
        <QuizContext.Provider value={{ questions, setQuestions, fetchQuestion, loading, setLoading }}>
            {children}
        </QuizContext.Provider>
    );
};

export default QuizContextProvider;
