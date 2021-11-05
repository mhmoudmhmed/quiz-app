import { CHANGE_SCORE } from "./actionsTypes";
import { combineReducers } from "redux";

const initialState = {
  amount_of_question: 5,
  score: 0,
};

const QuestionsReducer = () => {
  return [
    {
      question: "How many dice are used in the game of Yahtzee?",
      correct_answer: "Five",
      incorrect_answers: ["Four", "Six", "Eight"],
    },
    {
      question:
        "What are the cylinder-like parts that pump up and down within the engine?",
      correct_answer: "Pistons",
      incorrect_answers: ["Leaf Springs", "Radiators", "ABS"],
    },
    {
      question: "What video game engine does the videogame Quake 2 run in?",
      correct_answer: "iD Tech 2",
      incorrect_answers: ["iD Tech 3", "iD Tech 1", "Unreal Engine"],
    },
    {
      question:
        "Which Final Fantasy game consisted of a female-only cast of party members?",
      correct_answer: "Final Fantasy X-2",
      incorrect_answers: [
        "Final Fantasy IX",
        "Final Fantasy V",
        "Final Fantasy XIII-2",
      ],
    },
    {
      question:
        "&quot;Resident Evil 7&quot; is the first first-person Resident Evil game.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
  ];
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  questions: QuestionsReducer,
  selectQuestion: reducer,
  score: initialState.score,
});
