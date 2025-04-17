import { QuestionType } from "../types/question";
export async function fetchQuestions(): Promise<QuestionType[]> {
    const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple")
    const data = await response.json();
    return data.results.map((q: any) => ({
        question: q.question,
        correct_answer: q.correct_answer,
        answers: shuffle([...q.incorrect_answers, q.correct_answer]),
    }));
}
function shuffle(array: string[]) {
    return array.sort(() => Math.random() - 0.5);
}
