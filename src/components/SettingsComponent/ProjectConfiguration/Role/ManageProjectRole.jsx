import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
import ProjectRoleCustomToolbar from "./ProjectRoleCustomToolbar";
import ProjectRoleCustomToolbarSelect from "./ProjectRoleCustomToolbarSelect";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  container: {
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

const columns = [
  {
    name: "RoleId",
    label: "Role Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "RoleName",
    label: "Role Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Description",
    label: "Role Description",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    RoleId: "R-001",
    RoleName: "Senior Software Engineer",
    Description: "Software Engineer acts as a Senior SE"
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "single",
  selectableRowsOnClick: true,
  responsive: "scrollMaxHeight",
  customToolbar: () => {
    return <ProjectRoleCustomToolbar />;
  },
  customToolbarSelect: () => {
    return <ProjectRoleCustomToolbarSelect />;
  }
};

export default function ManageProjectRole() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </Container>
    </div>
  );
}
