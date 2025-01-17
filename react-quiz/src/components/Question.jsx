import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

const Question = () => {
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Options question={question} />
    </div>
  );
};

export default Question;
