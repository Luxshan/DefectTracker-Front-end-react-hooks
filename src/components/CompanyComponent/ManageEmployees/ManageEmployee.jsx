import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
import EmployeeCustomToolbar from "./EmployeeCustomToolbar";
import EmployeeCustomToolbarSelect from "./EmployeeCustomToolbarSelect";
import Avatar from "@material-ui/core/Avatar";

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
    name: "EmployeeId",
    label: "Employee Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "EmployeeName",
    label: "Employee Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Username",
    label: "Username",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Designation",
    label: "Designation",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "EmailId",
    label: "Email Id",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Photo",
    label: "Photo",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    EmployeeId: "U-25487",
    EmployeeName: "Bals",
    Username: "Balasankar",
    Designation: "Developer",
    EmailId: "bals@bals.com",
    Photo: (
      <Avatar
        alt="Remy Sharp"
        src="https://material-ui.com/static/images/avatar/1.jpg"
      />
    )
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "single",
  selectableRowsOnClick: true,
  responsive: "scrollMaxHeight",
  customToolbar: () => {
    return <EmployeeCustomToolbar />;
  },
  customToolbarSelect: () => {
    return <EmployeeCustomToolbarSelect />;
  }
};

export default function ManageEmployee() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </Container>
    </div>
  );
}
