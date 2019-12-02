import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
import CompanyCustomToolbar from "./CompanyCustomToolbar";
import CompanyCustomToolbarSelect from "./CompanyCustomToolbarSelect";

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
    name: "CompanyName",
    label: "Company Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Email",
    label: "Email",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "LicenseType",
    label: "License Type",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "LicenseStart",
    label: "License Start Date",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "LicenseExpire",
    label: "License Expiry Date",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    CompanyName: "Samuel Gnanam IT Centre",
    Email: "admin@sgic.com",
    LicenseType: "Platinum",
    LicenseStart: "12-03-2019",
    LicenseExpire: "12-03-2024"
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "single",
  selectableRowsOnClick: true,
  responsive: "scrollMaxHeight",
  customToolbar: () => {
    return <CompanyCustomToolbar />;
  },
  customToolbarSelect: () => {
    return <CompanyCustomToolbarSelect />;
  }
};

export default function ManageCompany() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </Container>
    </div>
  );
}
