import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import "date-fns";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
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
  },
  dateField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    margin: theme.spacing(1),
    width: "230px"
  }
}));
const divStyle = {
  marginRight: "50px",
  marginLeft: "50px",
  marginTop: "20px"
};

export default function EditCompanyForm() {
  window.onbeforeunload = function() {
    return false;
  };
  //console.log(id);
  let location = useLocation();
  let id = location.edit.id();
  //console.log(id);
  
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  
  const [licenses, setLicenseType] = React.useState([]);
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2019-10-24T21:11:54")
  );
  const [values, setValues] = React.useState({
    companyName: "",
    email: "",
    abbreviation: "",
    regNo: "",
    contactPerson: "",
    contactNo: "",
    licenseStartDate: "",
    licenseExpiryDate: "",
    adminName: "",
    adminEmail: "",
    userName: "",
    password: "",
    license: {}
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  useEffect(() => {
    Axios.get("http://localhost:8080/license")
      .then(response => {
        console.log(response.data);
        setLicenseType(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  

  useEffect(() => {
    Axios.get(`http://localhost:8080/company/${id}`)
      .then(response => {
        console.log(response);
        updateData(response.data);
      })
      .catch(error => {
        console.log(error);
        // setShowResult("alert alert-danger");
        // setMessage("Failed to Retrive Data!!");
      });
  }, [id]);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const updateData = data => {
    setValues({
      id: data.id,
      companyName: data.companyName,
      email: data.email,
      abbreviation: data.abbreviation,
      regNo: data.regNo,
      contactPerson: data.contactPerson,
      contactNo: data.contactNo,
      licenseStartDate: data.licenseStartDate,
      licenseExpiryDate: data.licenseExpiryDate,
      adminName: data.adminName,
      adminEmail: data.adminEmail,
      userName: data.userName,
      password: data.password,
      license: data.license
      });
  };

  const handleSubmit = event => {
    event.preventDefault();
    Axios.put(`http://localhost:8080/company/${id}`, values)
      .then(response => {
        console.log(response);
        
        // setShowResult("alert alert-success");
        // setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
        // setShowResult("alert alert-danger");
        // setMessage("Failed to Update!!");
      });
  };

  return (
    <div>
      <div style={divStyle} role="alert">
        
      </div>
      <Paper
        className={classes.paper}
        components={{
          Container: props => <Paper {...props} elevation={4} />
        }}
      >
        <form className={classes.container} autoComplete="off" onSubmit={handleSubmit}>
          <Grid container direction="column" alignItems="center">
            <div>
              <TextField
                  required
                  id="company-name"
                  label="Company Name"
                  className={classes.textField}
                  value={values.companyName}
                  onChange={handleChange("companyName")}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  id="abbreviation"
                  label="Abbreviation"
                  className={classes.textField}
                  value={values.abbreviation}
                  onChange={handleChange("abbreviation")}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  id="reg-no"
                  label="Reg No"
                  className={classes.textField}
                  value={values.regNo}
                  onChange={handleChange("regNo")}
                  margin="normal"
                  variant="outlined"
                />
            </div>

            <div>
              <TextField
                required
                type="email"
                id="cpmpany-email"
                label="Company Email"
                className={classes.textField}
                value={values.email}
                onChange={handleChange("email")}
                margin="normal"
                variant="outlined"
              />

              <TextField
                required
                id="contact-person"
                label="Contact Person"
                className={classes.textField}
                value={values.contactPerson}
                onChange={handleChange("contactPerson")}
                margin="normal"
                variant="outlined"
              />

              <TextField
                required
                id="contact-no"
                label="Contact No"
                className={classes.textField}
                value={values.contactNo}
                onChange={handleChange("contactNo")}
                margin="normal"
                variant="outlined"
              />
            </div>

            <div>
            <FormControl required className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="defect-severity">
                    License Type
                  </InputLabel>
                  <Select
                    labelWidth={labelWidth}
                    value= {values.license}
                    onChange={handleChange("license")}
                  >

                    {licenses.map((lice, i) => (
                      <MenuItem key={i} value={lice}>
                        {lice.licenseName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="start-date"
                    label="Start Date"
                    className={classes.dateField}
                    value={selectedDate}
                    onChange={handleDateChange}
                    format="MM/dd/yyyy"
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </MuiPickersUtilsProvider>

                <TextField
                  required
                  id="admin-name"
                  label="Admin Name"
                  className={classes.textField}
                  value={values.adminName}
                  onChange={handleChange("adminName")}
                  margin="normal"
                  variant="outlined"
                />
            </div>

            <div>
              <TextField
                  required
                  type="email"
                  id="admin-email"
                  label="Admin Email"
                  className={classes.textField}
                  value={values.adminEmail}
                  onChange={handleChange("adminEmail")}
                  margin="normal"
                  variant="outlined"
                />

                <TextField
                  required
                  id="admin-username"
                  label="Admin Username"
                  className={classes.textField}
                  value={values.userName}
                  onChange={handleChange("userName")}
                  margin="normal"
                  variant="outlined"
                />

                <TextField
                  required
                  type="password"
                  id="admin-password"
                  label="Admin Password"
                  className={classes.textField}
                  value={values.password}
                  onChange={handleChange("password")}
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
              to={"/product-administration/manage-company"}
            >
              Cancel
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
    </div>
  );
}
