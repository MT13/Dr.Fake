import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Fab from "@material-ui/core/Fab";

const useStyles = (theme) => ({
  default: {
    border: "2px solid #273252",
    backgroundColor: "transparent",
    minHeight: "5vh",
    minWidth: "35vh",
    maxWidth: "55vh",
    marginLeft: "15px",
    marginRight: "15px",
    color: "#273252",
    fontWeight: "bold",
    fontSize: "1.25rem",
    textAlign: "left",
    borderRadius: 50,


  },
});

const QuizButton = ({ children, classes, style, ...other }) => {
  return (
    <Fab 
      variant="extended"
      style={style}
      className={classes.default}
      {...other}
    >
      {children}
    </Fab>
  );
};

QuizButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(QuizButton);
