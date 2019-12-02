import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
import ClientCustomToolbar from "./ClientCustomToolbar";
import ClientCustomToolbarSelect from "./ClientCustomToolbarSelect";

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
    name: "ClientName",
    label: "Client Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "ClientEmail",
    label: "Client Email",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "ClientType",
    label: "Client Type",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "JoinedDate",
    label: "Client Joined Date",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "ContactPerson",
    label: "Contact Person",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "ContactNo",
    label: "Contact No",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    ClientName: "LOLC",
    ClientEmail: "admin@lolc.com",
    ClientType: "Private",
    JoinedDate: "27-06-2019",
    ContactPerson: "Sinthujan",
    ContactNo: "0777123456"
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "single",
  selectableRowsOnClick: true,
  responsive: "scrollMaxHeight",
  customToolbar: () => {
    return <ClientCustomToolbar />;
  },
  customToolbarSelect: () => {
    return <ClientCustomToolbarSelect />;
  }
};

export default function ManageClient() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </Container>
    </div>
  );
}
