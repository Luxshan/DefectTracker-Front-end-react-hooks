import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
import DefectStatusCustomToolbar from "./DefectStatusCustomToolbar";
import DefectStatusCustomToolbarSelect from "./DefectStatusCustomToolbarSelect";

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
    name: "StatusId",
    label: "Defect Status Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "StatusName",
    label: "Defect Status Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Description",
    label: "Defect Status Description",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    StatusId: "DS-001",
    StatusName: "New",
    Description: "Newly created by QA"
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "single",
  selectableRowsOnClick: true,
  responsive: "scrollMaxHeight",
  customToolbar: () => {
    return <DefectStatusCustomToolbar />;
  },
  customToolbarSelect: () => {
    return <DefectStatusCustomToolbarSelect />;
  }
};

export default function ManageDefectStatus() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </Container>
    </div>
  );
}
