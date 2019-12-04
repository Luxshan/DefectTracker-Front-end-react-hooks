import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
import CompanyCustomToolbar from "./CompanyCustomToolbar";
import CompanyCustomToolbarSelect from "./CompanyCustomToolbarSelect";
import Axios from "axios";

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
const divStyle = {
  marginRight: "35px",
  marginLeft: "35px",
  marginTop: "30px"
};
const columns = [
  {
    name: "companyName",
    label: "Company Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "email",
    label: "Email",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "license.licenseName",
    label: "License Type",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "licenseCreatedDate",
    label: "License Start Date",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "licenseExpiryDate",
    label: "License Expiry Date",
    options: {
      filter: true,
      sort: false
    }
  }
];

// const data = [
//   {
//     CompanyName: "Samuel Gnanam IT Centre",
//     Email: "admin@sgic.com",
//     LicenseType: "Platinum",
//     LicenseStart: "12-03-2019",
//     LicenseExpire: "12-03-2024"
//   }
// ];

// const options = {
//   filterType: "checkbox",
//   selectableRows: "single",
//   selectableRowsOnClick: true,
//   responsive: "scrollMaxHeight",
//   customToolbar: () => {
//     return <CompanyCustomToolbar />;
//   },
//   customToolbarSelect: () => {
//     return <CompanyCustomToolbarSelect />;
//   }
// };

export default function ManageCompany() {
  const classes = useStyles();
  const [company, setCompany] = React.useState([]);
  const [showResult, setShowResult] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [trackAdd, setTrackAdd] = React.useState(false);
  const [trackEdit, setTrackEdit] = React.useState(false);
  const [trackDelete, setTrackDelete] = React.useState(false);
  const [values] = React.useState({
    id: ""
  });

  const handleTrackAdd = () => {
    setTrackAdd(!trackAdd);
  };

  const handleTrackEdit = () => {
    setTrackEdit(!trackEdit);
  };

  const handleTrackDelete = () => {
    setTrackDelete(!trackDelete);
  };

  const getId = () => {
    return values.id;
    
  };

  useEffect(() => {
    Axios.get("http://localhost:8080/company")
      .then(response => {
        console.log(response.data);
        setCompany(response.data);
      })
      .catch(error => {
        console.log(error);
        setShowResult("alert alert-danger");
        setMessage("Failed to Retrive Data");
      });
  }, [trackDelete, trackAdd, trackEdit]);

  const options = {
    filterType: "dropdown",
    selectableRows: "single",
    selectableRowsOnClick: true,
    responsive: "scrollMaxHeight",
    textLabels: {
      body: {
        noMatch: company.length > 0 ? "Loading data..." : "No Records Found!"
      }
    },
    customToolbar: () => {
      return <CompanyCustomToolbar onCreate={handleTrackAdd} />;
    },
    customToolbarSelect: () => {
      return (
        <CompanyCustomToolbarSelect
          onDelete={handleDelete}
          onEdit={handleTrackEdit}
          id={getId}
        />
      );
    },
    onRowsSelect: allRows => {
      allRows.forEach(row => {
        const dataRow = company[row.dataIndex];
        values.id = dataRow["id"];
        console.log(values.id);
      });
    }
  };

  const handleDelete = () => {
    Axios.delete(`http://localhost:8080/company/${values.id}`)
      .then(response => {
        console.log(response);
        setShowResult("alert alert-success");
        setMessage(response.data.message);
        handleTrackDelete();
      })
      .catch(error => {
        console.log(error);
        setShowResult("alert alert-danger");
        setMessage("Failed to Delete");
      });
  };


  return (
    <div>
      <div style={divStyle} className={showResult} role="alert">
        {message}
      </div>
      <Container className={classes.container}>
        <MUIDataTable data={company} columns={columns} options={options} />
      </Container>
    </div>
  );
}
