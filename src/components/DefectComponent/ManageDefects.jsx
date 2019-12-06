import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
import DefectCustomToolbar from "./DefectCustomToolbar";
import DefectCustomToolbarSelect from "./DefectCustomToolbarSelect";
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
    label: "Defect Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "name",
    label: "Defect Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "projectId",
    label: "Project",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "moduleId",
    label: "Module",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "submoduleId",
    label: "Submodule",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "severityId",
    label: "Severity",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "priorityId",
    label: "Priority",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "statusId",
    label: "Status",
    options: {
      filter: true,
      sort: false
    }
  }
];

export default function ManageDefects() {
  const classes = useStyles();
  const [defect, setDefect] = React.useState([]);
  const [showResult, setShowResult] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [trackDelete, setTrackDelete] = React.useState(false);
  const [values] = React.useState({
    id: ""
  });

  const handleTrackDelete = () => {
    setTrackDelete(!trackDelete);
  };

  const getId = () => {
    return values.id;
  };

  useEffect(() => {
    Axios.get("http://localhost:8087/api/v1/defect")
      .then(response => {
        console.log(response);
        setDefect(response.data.results.listAllDefect);
      })
      .catch(error => {
        console.log(error);
        setShowResult("alert alert-danger");
        setMessage("Failed to Retrive Data");
      });
  }, [trackDelete]);

  const options = {
    filterType: "dropdown",
    selectableRows: "single",
    selectableRowsOnClick: true,
    responsive: "scrollMaxHeight",
    textLabels: {
      body: {
        noMatch: defect.length > 0 ? "Loading data..." : "No Records Found!"
      }
    },
    customToolbar: () => {
      return <DefectCustomToolbar />;
    },
    customToolbarSelect: () => {
      return <DefectCustomToolbarSelect onDelete={handleDelete} id={getId} />;
    },
    onRowsSelect: allRows => {
      allRows.forEach(row => {
        const dataRow = defect[row.dataIndex];
        values.id = dataRow["id"];
        console.log(values.id);
      });
    }
  };

  const handleDelete = () => {
    Axios.delete(`http://localhost:8087/api/v1/defect/${values.id}`)
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
        <MUIDataTable data={defect} columns={columns} options={options} />
      </Container>
    </div>
  );
}
