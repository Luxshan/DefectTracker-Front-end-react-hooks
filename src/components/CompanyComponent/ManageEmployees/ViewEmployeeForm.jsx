import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  }
}));

export default function ViewEmployeeForm() {
  const classes = useStyles();
  return (
    <div>
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
            <tr>
              <td>Employee Id</td>
              <td>E-100</td>
            </tr>
            <Divider />
            <tr>
              <td>First Name</td>
              <td>Tom</td>
            </tr>
            <Divider />
            <tr>
              <td>Last Name</td>
              <td>Cruse</td>
            </tr>
            <Divider />
            <tr>
              <td>Email</td>
              <td>tomcruise@gmail.com</td>
            </tr>
            <Divider />
            <tr>
              <td>Sub Module Name</td>
              <td>Company Component</td>
            </tr>
            <Divider />
            <tr>
              <td>Date Of Birth</td>
              <td>20-09-1988</td>
            </tr>
            <Divider />
            <tr>
              <td>Address</td>
              <td>Kandy</td>
            </tr>
            <Divider />
            <tr>
              <td>Mobile Number</td>
              <td>0778668881</td>
            </tr>
            <Divider />
            <tr>
              <td>Designation</td>
              <td>Tech Lead</td>
            </tr>
            <Divider />
            <tr>
              <td>Remarks</td>
              <td>Good</td>
            </tr>
            <Divider />
            <tr>
              <td>Active</td>
              <td>Yes</td>
            </tr>
            <Divider />
            <tr>
              <td>Start Date</td>
              <td>14-07-2018</td>
            </tr>
            <Divider />
            <tr>
              <td>Leave Date</td>
              <td>23-04-2019</td>
            </tr>
            <Divider />
            <tr>
              <td>User Name</td>
              <td>Tom Cruise</td>
            </tr>
            <Divider />
            <tr>
              <td>Added On</td>
              <td>14-07-2018</td>
            </tr>
            <Divider />
            <tr>
              <td>Updated On</td>
              <td>13-08-2018</td>
            </tr>
            <Divider />
          </table>
        </Grid>
      </form>
    </div>
  );
}
