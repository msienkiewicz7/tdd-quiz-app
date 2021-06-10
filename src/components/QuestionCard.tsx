import React from "react";

type Props = {
    question: string;
    anwsers: string[];
    callback: any;
    userAnwser: any;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({question, anwsers, callback, userAnwser, questionNr, totalQuestions}) => (
    <div className="question-card-container">
        <p>Question: {questionNr} / {totalQuestions}</p>
        <p>{question}</p>
        <div className="anwsers-container">
            {anwsers.map( anwser => (
                <div className="anwser-container">
                    <button disabled={userAnwser} onClick={callback}>
                        {anwser}
                    </button>
                </div>
            ))}
        </div>
    </div>
);

export default QuestionCard;