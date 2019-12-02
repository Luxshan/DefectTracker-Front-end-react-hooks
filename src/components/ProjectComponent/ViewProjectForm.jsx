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

export default function ViewProjectForm() {
  const classes = useStyles();
  return (
    <div>
      <style>
        {`
            table, td {
                height: 40px;
            }
        `}
      </style>
      <form className={classes.container} autoComplete="off">
        <Grid container direction="column">
          <table>
            <tr>
              <td>Project Id</td>
              <td>P-100</td>
            </tr>
            <Divider />
            <tr>
              <td>Project Name</td>
              <td>CMS</td>
            </tr>
            <Divider />
            <tr>
              <td>Project Type</td>
              <td>Product</td>
            </tr>
            <Divider />
            <tr>
              <td>Project Start Date</td>
              <td>03/01/2019</td>
            </tr>
            <Divider />
            <tr>
              <td>Project End Date</td>
              <td>03/10/2019</td>
            </tr>
            <Divider />
            <tr>
              <td>Project Duration</td>
              <td>10 Months</td>
            </tr>
            <Divider />
            <tr>
              <td>Project Status</td>
              <td>Finished</td>
            </tr>
            <Divider />
            <tr>
              <td>Project Description</td>
              <td>it's our product</td>
            </tr>
          </table>
        </Grid>
      </form>
    </div>
  );
}
