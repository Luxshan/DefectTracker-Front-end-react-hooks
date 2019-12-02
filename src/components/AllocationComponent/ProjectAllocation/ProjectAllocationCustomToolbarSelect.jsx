import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import RedoIcon from "@material-ui/icons/Redo";
import UndoIcon from "@material-ui/icons/Undo";
import Tooltip from "@material-ui/core/Tooltip";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import AddProjectAllocationForm from "./AddProjectAllocationForm";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  fab: {
    marginTop: "4px",
    marginBottom: "4px",
    marginRight: theme.spacing(2)
  }
}));

export default function ProjectAllocationCustomToolbarSelect() {
  const classes = useStyles();
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openDeallocate, setOpenDeallocate] = React.useState(false);

  const handleAddOpen = () => {
    setOpenAdd(true);
  };

  const handleAddClose = () => {
    setOpenAdd(false);
  };

  const handleDeallocateOpen = () => {
    setOpenDeallocate(true);
  };

  const handleDeallocateClose = () => {
    setOpenDeallocate(false);
  };

  return (
    <div>
      <Tooltip title={"Deallocate"}>
        <Fab
          color="default"
          aria-label="edit"
          className={classes.fab}
          size="small"
          onClick={handleDeallocateOpen}
        >
          <UndoIcon />
        </Fab>
      </Tooltip>

      <Dialog
        open={openDeallocate}
        onClose={handleDeallocateClose}
        aria-labelledby="add-project-title"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle id="add-project-title">Deallocate Employees</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to deallocate the selected employee(s)?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeallocateClose} color="primary">
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleDeallocateClose}
            color="primary"
          >
            Deallocate
          </Button>
        </DialogActions>
      </Dialog>

      <Tooltip title={"Allocate"}>
        <Fab
          color="secondary"
          aria-label="edit"
          className={classes.fab}
          size="small"
          onClick={handleAddOpen}
        >
          <RedoIcon />
        </Fab>
      </Tooltip>

      <Dialog
        open={openAdd}
        onClose={handleAddClose}
        aria-labelledby="add-project-title"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle id="add-project-title">Allocate Employees</DialogTitle>
        <Divider />
        <DialogContent>
          <AddProjectAllocationForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleAddClose} color="primary">
            Allocate
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
