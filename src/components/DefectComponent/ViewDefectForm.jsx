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

export default function ViewDefectForm() {
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
              <td>Defect Id</td>
              <td>D-100</td>
            </tr>
            <Divider />
            <tr>
              <td>Defect Name</td>
              <td>Button is not aligned</td>
            </tr>
            <Divider />
            <tr>
              <td>Project Name</td>
              <td>CMS</td>
            </tr>
            <Divider />
            <tr>
              <td>Module Name</td>
              <td>View Drawer</td>
            </tr>
            <Divider />
            <tr>
              <td>Sub Module Name</td>
              <td>Company Component</td>
            </tr>
            <Divider />
            <tr>
              <td>Defect Type</td>
              <td>UI</td>
            </tr>
            <Divider />
            <tr>
              <td>Defect Priority</td>
              <td>High</td>
            </tr>
            <Divider />
            <tr>
              <td>Defect Severity</td>
              <td>Low</td>
            </tr>
            <Divider />
            <tr>
              <td>Assigned To</td>
              <td>Bals</td>
            </tr>
            <Divider />
            <tr>
              <td>Assigned By</td>
              <td>Sankar</td>
            </tr>
            <Divider />
            <tr>
              <td>Found In</td>
              <td>Company Component</td>
            </tr>
            <Divider />
            <tr>
              <td>Fixed In</td>
              <td>Company Component</td>
            </tr>
            <Divider />
            <tr>
              <td>Defect Status</td>
              <td>Fixed</td>
            </tr>
            <Divider />
            <tr>
              <td>Defect Description</td>
              <td>Button is not aligned</td>
            </tr>
            <Divider />
            <tr>
              <td>Created By</td>
              <td>Sinthujan</td>
            </tr>
            <Divider />
            <tr>
              <td>Created On</td>
              <td>13/11/2019</td>
            </tr>
            <tr>
              <td>Updated By</td>
              <td>Anns</td>
            </tr>
            <Divider />
            <tr>
              <td>Updated On</td>
              <td>27/11/2019</td>
            </tr>
            <Divider />
          </table>
        </Grid>
      </form>
    </div>
  );
}
