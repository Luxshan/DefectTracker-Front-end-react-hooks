import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    margin: theme.spacing(1),
    width: "230px"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    width: "120px"
  }
}));

export default function AddFeatureForm() {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.container} autoComplete="off">
        <Grid container direction="column" alignItems="center">
          <div>
            <TextField
              required
              id="feature-name"
              label="Feature Name"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              required
              id="feature-description"
              label="Feature Description"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </div>
        </Grid>
        <Grid container justify="flex-end">
          <Button className={classes.button} color="primary">
            Cancel
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Add
          </Button>
        </Grid>
      </form>
    </div>
  );
}
