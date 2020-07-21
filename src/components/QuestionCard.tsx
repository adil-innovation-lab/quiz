import React from 'react';
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNum: number;
    totalQuestions: number;
}

export const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNum, totalQuestions}) => {
    return (
        <Wrapper>
            <p>
                Question: {questionNum} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question}} />
            <div>
                {answers.map(answer => (
                    <ButtonWrapper
                        correct = {userAnswer?.correctAnswer === answer}
                        userClicked = { userAnswer?.answer === answer }
                    >
                        <button disabled={userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    )
}