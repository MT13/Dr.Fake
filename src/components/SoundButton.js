import React, { Component} from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Fab from "@material-ui/core/Fab";


const useStyles = (theme) => ({
  default: {
    border: "2px solid #F24E33",
    color: "#FABE4C",
  },
});

const SoundButton = ({ children, classes, style, ...other }) => {
  return (
    <Fab >
        {children}
    </Fab>
  );
};

SoundButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(SoundButton);
