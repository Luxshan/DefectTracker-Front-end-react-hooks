import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useLocation } from "react-router";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  paper: {
    color: theme.palette.text.secondary,
    borderRadius: "4px",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    marginTop: theme.spacing(5),
    margin: theme.spacing(3),
    padding: theme.spacing(5)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
    margin: theme.spacing(1),
    width: "230px"
  },
  descField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    margin: theme.spacing(1),
    width: "363px"
  },
  formControl: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
    margin: theme.spacing(1),
    width: "230px",
    textAlign: "left"
  },
  buttonUpload: {
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(2.5),
    marginLeft: theme.spacing(1),
    width: "230px"
  },
  input: {
    display: "none"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    width: "120px"
  }
}));

const divStyle = {
  marginRight: "50px",
  marginLeft: "50px",
  marginTop: "20px"
};

export default function EditDefectForm() {
  window.onbeforeunload = function() {
    return false;
  };

  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  let location = useLocation();
  let id = location.edit.id();
  const [severities, setSeverities] = React.useState([]);
  const [priorities, setPriorities] = React.useState([]);
  const [types, setTypes] = React.useState([]);
  const [statuses, setStatuses] = React.useState([]);
  const [showResult, setShowResult] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [upload, setUpload] = React.useState(false);
  const [values, setValues] = React.useState({
    name: "",
    description: "",
    projectId: "",
    moduleId: "",
    submoduleId: "",
    typeId: "",
    severityId: "",
    priorityId: "",
    statusId: "",
    attachment: "",
    stepsToCreate: "",
    foundIn: "",
    fixedIn: "",
    assignedTo: "",
    assignedBy: "",
    createdBy: "",
    createdOn: "",
    updatedBy: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  useEffect(() => {
    Axios.get(`http://localhost:8087/api/v1/defect/${id}`)
      .then(response => {
        console.log(response);
        let result = response.data.results.listDefect;
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
      name: data.name,
      description: data.description,
      projectId: data.projectId,
      moduleId: data.moduleId,
      submoduleId: data.submoduleId,
      typeId: data.typeId,
      severityId: data.severityId,
      priorityId: data.priorityId,
      statusId: data.statusId,
      attachment: data.attachment,
      stepsToCreate: data.stepsToCreate,
      foundIn: data.foundIn,
      fixedIn: data.fixedIn,
      assignedTo: data.assignedTo,
      assignedBy: "1",
      createdBy: data.createdBy,
      createdOn: data.createdOn,
      updatedBy: "1"
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:8087/api/v1/severity")
      .then(response => {
        console.log(response);
        setSeverities(response.data.results.listAllSeverity);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:8087/api/v1/priority")
      .then(response => {
        console.log(response);
        setPriorities(response.data.results.listAllPriority);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:8087/api/v1/type")
      .then(response => {
        console.log(response);
        setTypes(response.data.results.listAllType);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:8087/api/v1/status")
      .then(response => {
        console.log(response);
        setStatuses(response.data.results.listAllStatus);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const encodeImageFileAsURL = e => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      console.log("RESULT", reader.result);
      values.attachment = reader.result;
      setUpload(true);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    Axios.put(`http://localhost:8087/api/v1/defect`, values)
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
      <Container className={classes.container}>
        <Paper
          className={classes.paper}
          components={{
            Container: props => <Paper {...props} elevation={4} />
          }}
        >
          <form
            className={classes.container}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Grid container direction="column" alignItems="center">
              <div>
                <TextField
                  required
                  id="defect-name"
                  label="Defect Name"
                  className={classes.textField}
                  value={values.name}
                  onChange={handleChange("name")}
                  margin="normal"
                  variant="outlined"
                />

                <FormControl required className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="project-name">
                    Project
                  </InputLabel>
                  <Select
                    id="project-name"
                    labelWidth={labelWidth}
                    value={values.projectId}
                    onChange={handleChange("projectId")}
                  >
                    <MenuItem value="1">CMS</MenuItem>
                    <MenuItem value="2">LMS</MenuItem>
                    <MenuItem value="3">SIS</MenuItem>
                  </Select>
                </FormControl>

                <FormControl required className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="module-name">
                    Module
                  </InputLabel>
                  <Select
                    id="module-name"
                    value={values.moduleId}
                    onChange={handleChange("moduleId")}
                  >
                    <MenuItem value="1">Left Drawer</MenuItem>
                    <MenuItem value="2">Header</MenuItem>
                    <MenuItem value="3">Footer</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
                <FormControl required className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="submodule-name">
                    Sub Module
                  </InputLabel>
                  <Select
                    id="submodule-name"
                    value={values.submoduleId}
                    onChange={handleChange("submoduleId")}
                  >
                    <MenuItem value="1">Menu Item</MenuItem>
                    <MenuItem value="2">Search Bar</MenuItem>
                  </Select>
                </FormControl>

                <FormControl required className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="defect-type">
                    Type
                  </InputLabel>
                  <Select
                    id="defect-type"
                    value={values.typeId}
                    onChange={handleChange("typeId")}
                  >
                    {types.map((type, i) => (
                      <MenuItem key={i} value={type.id}>
                        {type.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl required className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="defect-severity">
                    Severity
                  </InputLabel>
                  <Select
                    id="defect-severity"
                    value={values.severityId}
                    onChange={handleChange("severityId")}
                  >
                    {severities.map((severity, i) => (
                      <MenuItem key={i} value={severity.id}>
                        {severity.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div>
                <FormControl required className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="def">
                    Priority
                  </InputLabel>
                  <Select
                    id="defect-priority"
                    value={values.priorityId}
                    onChange={handleChange("priorityId")}
                  >
                    {priorities.map((priority, i) => (
                      <MenuItem key={i} value={priority.id}>
                        {priority.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl required className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="assigned-to">
                    Assigned To
                  </InputLabel>
                  <Select
                    id="assigned-to"
                    value={values.assignedTo}
                    onChange={handleChange("assignedTo")}
                  >
                    <MenuItem value="1">Balasankar</MenuItem>
                    <MenuItem value="2">Sinthujan</MenuItem>
                    <MenuItem value="3">Jeyaruban</MenuItem>
                  </Select>
                </FormControl>

                <FormControl required className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="defect-status">
                    Status
                  </InputLabel>
                  <Select
                    id="defect-status"
                    value={values.statusId}
                    onChange={handleChange("statusId")}
                  >
                    {statuses.map((status, i) => (
                      <MenuItem key={i} value={status.id}>
                        {status.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div>
                <TextField
                  required
                  id="found-in"
                  label="Found In"
                  className={classes.textField}
                  value={values.foundIn}
                  onChange={handleChange("foundIn")}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  id="fixed-in"
                  label="Fixed In"
                  className={classes.textField}
                  value={values.fixedIn}
                  onChange={handleChange("fixedIn")}
                  margin="normal"
                  variant="outlined"
                />
                <input
                  accept="image/*"
                  className={classes.input}
                  id="defect-screenshot"
                  onChange={e => encodeImageFileAsURL(e)}
                  multiple
                  type="file"
                />
                <label htmlFor="defect-screenshot">
                  <Button
                    variant="outlined"
                    component="span"
                    className={classes.buttonUpload}
                  >
                    {upload ? "Uploaded" : "Upload Screenshot"}
                  </Button>
                </label>
              </div>
              <div>
                <TextField
                  required
                  id="defect-desc"
                  label="Description"
                  multiline
                  rows="2"
                  className={classes.descField}
                  value={values.description}
                  onChange={handleChange("description")}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  id="defect-steps"
                  label="Steps to Re-create"
                  multiline
                  rows="2"
                  className={classes.descField}
                  value={values.stepsToCreate}
                  onChange={handleChange("stepsToCreate")}
                  margin="normal"
                  variant="outlined"
                />
              </div>
            </Grid>
            <Grid container justify="flex-end">
              <Button
                className={classes.button}
                color="primary"
                component={Link}
                to={"/manage-defect"}
              >
                Back
              </Button>
              <Button
                type="submit"
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Update
              </Button>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
