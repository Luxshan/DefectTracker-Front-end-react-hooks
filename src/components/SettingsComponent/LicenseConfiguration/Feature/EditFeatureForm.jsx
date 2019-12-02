import React, { useEffect }from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  textField: {
    marginRight: theme.spacing(3),
    width: "250px"
  },
  input: {
    display: "none"
  },
  table: {
    minWidth: 700
  },
  buttonCustom: {
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(2),
    width: "250px",
    height: "56px"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    width: "120px"
  }
}));

const divStyle = {
  marginRight: "22px",
  marginTop: "10px"
};

export default function EditFeatureForm({ id, onFinish }) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    id: "",
    featureName: "",
    featureDescription: ""
  });

  const [showResult, setShowResult] = React.useState("");
  const [message, setMessage] = React.useState("");
  useEffect(() => {
    console.log(values.id); // issue getting the id
    Axios.get(`http://localhost:8080/feature/${id()}`)
      .then(response => {
        console.log(response);
        let result = response.data;
        updateData(result);
      })
      .catch(error => {
        console.log(error);
        setShowResult("alert alert-danger");
        setMessage("Failed to Retrive Data!!");
      });
  }, [id]);

  const updateData = data => {
    setValues({
      id: data.id,
      featureName: data.featureName,
      featureDescription: data.featureDescription
    });
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    Axios.put(`http://localhost:8080/feature`, values)
      .then(response => {
        console.log(response);
        setShowResult("alert alert-success");
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
        setShowResult("alert alert-danger");
        setMessage("Failed to Update!!");
      });
  };
  return (
    <div>
       <div style={divStyle} className={showResult} role="alert">
        {message}
      </div>
      <form className={classes.container} autoComplete="off" onSubmit={handleSubmit}>
        <Grid container direction="column" alignItems="center">
          <div>
            <TextField
              required
              id="feature-name"
              label="Feature Name"
              className={classes.textField}
              value={values.featureName}
              onChange={handleChange("featureName")}
              margin="normal"
              variant="outlined"
            />
            <TextField
              required
              id="feature-description"
              label="Feature Description"
              className={classes.textField}
              value={values.featureDescription}
              onChange={handleChange("featureDescription")}
              margin="normal"
              variant="outlined"
            />
          </div>
        </Grid>
        <Grid container justify="flex-end">
          <Button className={classes.button} color="primary" onClick={onFinish}>
            Cancel
          </Button>
          <Button
            type="submit"
            className={classes.button}
            variant="contained"
            color="primary"
            size="large"
          >
            Update
          </Button>
        </Grid>
      </form>
    </div>
  );
}
