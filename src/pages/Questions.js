import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { handleScoreChange } from "../redux/actions";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Questions = ({ questions }) => {
  const { score } = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();

  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (questions.length) {
      const question = questions[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [questions, questionIndex]);

  const handleClickAnswer = (e) => {
    const question = questions[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }

    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      history.push("/score");
    }
  };

  return (
    <Box>
      <Typography variant="h4">Questions {questionIndex + 1}</Typography>
      <Typography mt={5}>{questions[questionIndex].question}</Typography>
      {options.map((data, id) => (
        <Box mt={2} key={id}>
          <Button onClick={handleClickAnswer} variant="contained">
            {data}
          </Button>
        </Box>
      ))}
      <Box mt={5}>
        score: {score} /{questions.length}
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    questions: state.questions.sort(() => Math.random() - 0.5),
    selectQuestion: state.selectQuestion,
  };
};

export default connect(mapStateToProps, { selectQuestion: handleScoreChange })(
  Questions
);
