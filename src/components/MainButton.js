import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Fab from "@material-ui/core/Fab";

const useStyles = (theme) => ({
  default: {
    backgroundColor: "#f24e33",
    minWidth: "15%",
    minHeight: "50%",
    color: "white",
    fontWeight: "bold",
    fontSize: "24px",
    letterSpacing: 2,
    marginTop: "2%",
    textTransform: "uppercase",
    '&:hover': {
      backgroundColor: "#FABE4C",
    }
  },
});

const MainButton = ({ children, classes, style, ...other }) => {
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

MainButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(MainButton);
