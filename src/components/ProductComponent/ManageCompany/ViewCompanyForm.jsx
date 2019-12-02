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

export default function ViewCompanyForm() {
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
              <td>Company Id</td>
              <td>C-100</td>
            </tr>
            <Divider />
            <tr>
              <td>Company Name</td>
              <td>Soft Code</td>
            </tr>
            <Divider />
            <tr>
              <td>Abbreviation</td>
              <td>SC</td>
            </tr>
            <Divider />
            <tr>
              <td>Email</td>
              <td>softcode@gmail.com</td>
            </tr>
            <Divider />
            <tr>
              <td>license Type</td>
              <td>Platinum</td>
            </tr>
            <Divider />
            <tr>
              <td>Start date</td>
              <td>20-12-2019</td>
            </tr>
            <Divider />
            <tr>
              <td>Expiry date</td>
              <td>20-12-2024</td>
            </tr>
            <Divider />
            <tr>
              <td>Contact Person</td>
              <td>kumar aiya</td>
            </tr>
            <Divider />
            <tr>
              <td>Contact Number</td>
              <td>0770314525</td>
            </tr>
          </table>
        </Grid>
      </form>
    </div>
  );
}
