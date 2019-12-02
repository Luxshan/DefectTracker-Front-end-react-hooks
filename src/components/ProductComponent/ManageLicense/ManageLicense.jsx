import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
import LicenseCustomToolbar from "./LicenseCustomToolbar";
import LicenseCustomToolbarSelect from "./LicenseCustomToolbarSelect";

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
    name: "LicenseId",
    label: "License Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "LicenseName",
    label: "License Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "LicenseValidity",
    label: "License Validity",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "LicenseCost",
    label: "License Cost",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "LicenseFeatures",
    label: "License Features",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    LicenseId: "L-101",
    LicenseName: "Platinum",
    LicenseValidity: "5 Years",
    LicenseCost: "Rs.550,000/-",
    LicenseFeatures: "All Features"
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "single",
  selectableRowsOnClick: true,
  responsive: "scrollMaxHeight",
  customToolbar: () => {
    return <LicenseCustomToolbar />;
  },
  customToolbarSelect: () => {
    return <LicenseCustomToolbarSelect />;
  }
};

export default function ManageLicense() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </Container>
    </div>
  );
}
