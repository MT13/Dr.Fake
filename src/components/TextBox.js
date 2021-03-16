import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { theme } from "../theme";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const useStyles = (theme) => ({
  default: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: "15px",
    border: "2px solid black",
    // fontWeight: "bold",
  },
});

const TextBox = ({
  marginLeft,
  color,
  fontWeight,
  variant,
  children,
  classes,
  style,
  ...other
}) => {
  return (
    <Typography
      style={style}
      className={classes.default}
      variant={variant}
      {...other}
    >
      {children}
    </Typography>
  );
};

TextBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(TextBox);
