import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
import EmployeeDesignationCustomToolbar from "./EmployeeDesignationCustomToolbar";
import EmployeeDesignationCustomToolbarSelect from "./EmployeeDesignationCustomToolbarSelect";

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
    name: "designationId",
    label: "Designation Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "employeeDesignation",
    label: "Employee Designation",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "designationDescription",
    label: "Designation Description",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    designationId: "DS-001",
    employeeDesignation: "Tech Lead",
    designationDescription: "More than 4+ Years experience in Software development field"
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "single",
  selectableRowsOnClick: true,
  responsive: "scrollMaxHeight",
  customToolbar: () => {
    return <EmployeeDesignationCustomToolbar/>;
  },
  customToolbarSelect: () => {
    return <EmployeeDesignationCustomToolbarSelect/>;
  }
};

export default function ManageEmployeeDesignation() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </Container>
    </div>
  );
}
