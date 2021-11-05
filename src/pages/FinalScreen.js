import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { handleScoreChange } from "../redux/actions";

const FinalScreen = ({ selectQuestion }) => {
  const disptach = useDispatch();
  const history = useHistory();

  const handleBackToSettings = () => {
    disptach(handleScoreChange(0));
    history.push("/");
  };

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score {selectQuestion.score}
      </Typography>
      <Button onClick={handleBackToSettings} variant="outlined">
        Restart Quiz!
      </Button>
    </Box>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    selectQuestion: state.selectQuestion,
  };
};

export default connect(mapStateToProps)(FinalScreen);
