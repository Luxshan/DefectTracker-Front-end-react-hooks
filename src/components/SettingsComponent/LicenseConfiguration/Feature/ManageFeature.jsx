import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
import FeatureCustomToolbar from "./FeatureCustomToolbar";
import FeatureCustomToolbarSelect from "./FeatureCustomToolbarSelect";
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
    name: "id",
    label: "Feature Id",
    options: {
      filter: true,
      sort: true,
      display: false
    }
  },
  {
    name: "featureName",
    label: "Feature Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "featureDescription",
    label: "Feature Description",
    options: {
      filter: true,
      sort: false
    }
  }
];

// const data = [
//   {
//     FeatureId: "F-101",
//     FeatureName: "Manage 5 Projects",
//     FeatureDescription: "Company can manage only 5 projects"
//   }
// ];

// const options = {
//   filterType: "checkbox",
//   selectableRows: "single",
//   selectableRowsOnClick: true,
//   responsive: "scrollMaxHeight",
//   customToolbar: () => {
//     return <FeatureCustomToolbar />;
//   },
//   customToolbarSelect: () => {
//     return <FeatureCustomToolbarSelect />;
//   }
// };

export default function ManageFeature() {
  const classes = useStyles();
  const [feature, setFeature] = React.useState([]);
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
    Axios.get("http://localhost:8080/feature")
      .then(response => {
        console.log(response.data);
        setFeature(response.data);
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
        noMatch: feature.length > 0 ? "Loading data..." : "No Records Found!"
      }
    },
    customToolbar: () => {
      return <FeatureCustomToolbar onCreate={handleTrackAdd} />;
    },
    customToolbarSelect: () => {
      return (
        <FeatureCustomToolbarSelect
          onDelete={handleDelete}
          onEdit={handleTrackEdit}
          id={getId}
        />
      );
    },
    onRowsSelect: allRows => {
      allRows.forEach(row => {
        const dataRow = feature[row.dataIndex];
        values.id = dataRow["id"];
        console.log(values.id);
      });
    }
  };

  const handleDelete = () => {
    Axios.delete(`http://localhost:8080/feature/${values.id}`)
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
        <MUIDataTable data={feature} columns={columns} options={options} />
      </Container>
    </div>
  );
}
