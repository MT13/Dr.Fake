import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Fab from "@material-ui/core/Fab";

const useStyles = (theme) => ({
  default: {
    backgroundColor: "#FABE4C",
    minWidth: "15%",
    minHeight: "50%",
    color: "white",
    fontWeight: "bold",
    fontSize: "24px",
    letterSpacing: 2,
    marginTop: "2%",
    textTransform: "uppercase",
    '&:hover': {
      backgroundColor: "#273252",
    }
  },
});

const SecondaryButton = ({ children, classes, style, ...other }) => {
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

SecondaryButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(SecondaryButton);
