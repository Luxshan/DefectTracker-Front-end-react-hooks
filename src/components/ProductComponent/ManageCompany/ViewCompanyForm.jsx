import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Axios from "axios";
import jsonQuery from "json-query";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  }
}));
const divStyle = {
  marginRight: "35px",
  marginLeft: "35px",
  marginTop: "30px"
};

export default function ViewCompanyForm({ id }) {
  const classes = useStyles();
  const [company, setCompany] = React.useState([]);
  const [showResult, setShowResult] = React.useState("");
  const [message, setMessage] = React.useState("");

  useEffect(() => {
    Axios.get(`http://localhost:8080/company/${id()}`)
      .then(response => {
        console.log(response);
        setCompany(response.data);
      })
      .catch(error => {
        console.log(error);
        setShowResult("alert alert-danger");
        setMessage("Failed to Retrive Data!!");
      });
  }, [id]);

  var companyArray = [];
  return (
    <div>
      <div style={divStyle} className={showResult} role="alert">
        {message}
      </div>
      <style>
        {`
            table, td {
                height: 40px;
                width:350px;
            }
        `}
      </style>
      <form className={classes.container} autoComplete="off">
        <Grid container direction="column">
          <table>
            <tbody>
              <tr>
                <td>Company Id</td>
                <td>{company.id}</td>
              </tr>
              <Divider />
              <tr>
                <td>Company Name</td>
                <td>{company.companyName}</td>
              </tr>
              <Divider />
              <tr>
                <td>Abbreviation</td>
                <td>{company.abbreviation}</td>
              </tr>
              <Divider />
              <tr>
                <td>Email</td>
                <td>{company.email}</td>
              </tr>
              <Divider />
              <tr>
                <td>license Type</td>
                
               {/* {console.log(Object.values(jsonQuery('license.licenseName', {
                    data: company
                  })))} */}
                  
                <td>{ Object.values(jsonQuery('license.licenseName', {
                          data: company
                        }))[0]}</td>
              </tr>
              <Divider />
              <tr>
                <td>Start date</td>
                <td>{company.licenseStartDate}</td>
              </tr>
              <Divider />
              <tr>
                <td>Start date</td>
                <td>{company.licenseCreatedDate}</td>
              </tr>
              <Divider />
              <tr>
                <td>Expiry date</td>
                <td>{company.licenseExpiryDate}</td>
              </tr>
              <Divider />
              <tr>
                <td>Contact Person</td>
                <td>{company.contactPerson}</td>
              </tr>
              <Divider />
              <tr>
                <td>Contact Number</td>
                <td>{company.contactNo}</td>
              </tr>
              </tbody>
          </table>
        </Grid>
      </form>
    </div>
  );
}
