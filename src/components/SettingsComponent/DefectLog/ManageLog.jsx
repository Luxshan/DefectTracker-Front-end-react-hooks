import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";

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
    name: "DefectId",
    label: "Defect Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "DefectName",
    label: "Defect Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "CreatedBy",
    label: "Created By",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "CreatedOn",
    label: "Created On",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "UpdatedBy",
    label: "Updated By",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "UpdatedOn",
    label: "Updated On",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Status",
    label: "Status",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    DefectId: "D-001",
    DefectName: "Button Issue",
    CreatedBy: "Bals",
    CreatedOn: "25-11-2019",
    UpdatedBy: "Sinthu",
    UpdatedOn: "27-11-2019",
    Status: "Opened"
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "none",
  responsive: "scrollMaxHeight"
};

export default function ManageLog() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </Container>
    </div>
  );
}
