

export enum Difficulty {
    EASY = "easy",
    MEDUIM = "medium",
    HARD = "hard",
}

export type Question = {
    category: string;
    correct_anwser: string;
    difficulty: string;
    question: string;
    type: string;
    incorrect_answers: string[]
}

export type QuestionState = Question & { anwsers: string[] }

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) : Promise<QuestionState[]> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    // console.log(data)
    return data.results.map( (question: Question) => (
        {
            ...question,
            anwsers: [...question.incorrect_answers, question.correct_anwser]
        }
    ))
}