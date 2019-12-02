import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
import ModuleCustomToolbar from "./ModuleCustomToolbar";
import ModuleCustomToolbarSelect from "./ModuleCustomToolbarSelect";

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
    name: "ModuleId",
    label: "Module Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "ModuleName",
    label: "Module Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "ProjectName",
    label: "Project Name",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    ModuleId: "M-001",
    ModuleName: "Left Drawer",
    ProjectName: "CMS"
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "single",
  selectableRowsOnClick: true,
  responsive: "scrollMaxHeight",
  customToolbar: () => {
    return <ModuleCustomToolbar />;
  },
  customToolbarSelect: () => {
    return <ModuleCustomToolbarSelect />;
  }
};

export default function ManageModule() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </Container>
    </div>
  );
}
