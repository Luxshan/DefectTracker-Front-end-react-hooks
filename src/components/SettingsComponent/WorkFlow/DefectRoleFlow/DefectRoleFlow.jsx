import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  paper: {
    color: theme.palette.text.secondary,
    borderRadius: "4px",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    marginTop: theme.spacing(5),
    margin: theme.spacing(3),
    padding: theme.spacing(5)
  },
  formControl: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
    margin: theme.spacing(1),
    width: "230px"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    width: "120px"
  }
}));

export default function DefectRoleFlow() {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const [value, setValue] = React.useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Container className={classes.container}>
        <Paper
          className={classes.paper}
          components={{
            Container: props => <Paper {...props} elevation={4} />
          }}
        >
          <form className={classes.container} autoComplete="off">
            <Grid container direction="column" alignItems="center">
              <div>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="def">
                    First
                  </InputLabel>
                  <Select
                    labelWidth={labelWidth}
                    value={value}
                    onChange={handleChange}
                  >
                    <MenuItem value="Software Engineer">
                      Software Engineer
                    </MenuItem>
                    <MenuItem value="Senior Software Engineer">
                      Senior Software Engineer
                    </MenuItem>
                    <MenuItem value="Tech Lead">Tech Lead</MenuItem>
                    <MenuItem value="QA">QA</MenuItem>
                    <MenuItem value="QA Lead">QA Lead</MenuItem>
                    <MenuItem value="Project Manager">Project Manager</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <ArrowDownwardIcon />
              <div>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="def">
                    Second
                  </InputLabel>
                  <Select
                    labelWidth={labelWidth}
                    value={value}
                    onChange={handleChange}
                  >
                    <MenuItem value="Software Engineer">
                      Software Engineer
                    </MenuItem>
                    <MenuItem value="Senior Software Engineer">
                      Senior Software Engineer
                    </MenuItem>
                    <MenuItem value="Tech Lead">Tech Lead</MenuItem>
                    <MenuItem value="QA">QA</MenuItem>
                    <MenuItem value="QA Lead">QA Lead</MenuItem>
                    <MenuItem value="Project Manager">Project Manager</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <ArrowDownwardIcon />
              <div>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="def">
                    Third
                  </InputLabel>
                  <Select
                    labelWidth={labelWidth}
                    value={value}
                    onChange={handleChange}
                  >
                    <MenuItem value="Software Engineer">
                      Software Engineer
                    </MenuItem>
                    <MenuItem value="Senior Software Engineer">
                      Senior Software Engineer
                    </MenuItem>
                    <MenuItem value="Tech Lead">Tech Lead</MenuItem>
                    <MenuItem value="QA">QA</MenuItem>
                    <MenuItem value="QA Lead">QA Lead</MenuItem>
                    <MenuItem value="Project Manager">Project Manager</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <ArrowDownwardIcon />
              <div>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="def">
                    Forth
                  </InputLabel>
                  <Select
                    labelWidth={labelWidth}
                    value={value}
                    onChange={handleChange}
                  >
                    <MenuItem value="Software Engineer">
                      Software Engineer
                    </MenuItem>
                    <MenuItem value="Senior Software Engineer">
                      Senior Software Engineer
                    </MenuItem>
                    <MenuItem value="Tech Lead">Tech Lead</MenuItem>
                    <MenuItem value="QA">QA</MenuItem>
                    <MenuItem value="QA Lead">QA Lead</MenuItem>
                    <MenuItem value="Project Manager">Project Manager</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <ArrowDownwardIcon />
              <div>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="def">
                    Fifth
                  </InputLabel>
                  <Select
                    labelWidth={labelWidth}
                    value={value}
                    onChange={handleChange}
                  >
                    <MenuItem value="Software Engineer">
                      Software Engineer
                    </MenuItem>
                    <MenuItem value="Senior Software Engineer">
                      Senior Software Engineer
                    </MenuItem>
                    <MenuItem value="Tech Lead">Tech Lead</MenuItem>
                    <MenuItem value="QA">QA</MenuItem>
                    <MenuItem value="QA Lead">QA Lead</MenuItem>
                    <MenuItem value="Project Manager">Project Manager</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Grid>
            <Grid container justify="flex-end">
              <Button className={classes.button} color="primary">
                Cancel
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Set
              </Button>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
