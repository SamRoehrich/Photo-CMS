import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import { Switch } from "@material-ui/core";

const columns = [
  { id: "title", label: "Title", minWidth: 150 },
  { id: "tag", label: "Tag", minWidth: 200 },
  { id: "link", label: "Link", minWidth: 100 },
  { id: "isActive", label: "Is Active", minWidth: 150 },
  { id: "delete", label: "Delete", minWidth: 100, align: "right" },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: 50,
  },
  container: {
    minHeight: 440,
  },
});

const ManagePhotos = () => {
  const [photos, setPhotos] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    fetch("https://kyle-garrett-photo-server.herokuapp.com/photos/all")
      .then((res) => res.json())
      .then((pics) => {
        setPhotos(pics);
      });
  });
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minwidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {photos.map((photo) => (
              <TableRow key={photo.id}>
                <TableCell>{photo.title}</TableCell>
                <TableCell>{photo.tag}</TableCell>
                <TableCell>
                  <a href={photo.link}>Photo</a>
                </TableCell>
                <TableCell>
                  <Switch checked={photo.isActive} />
                </TableCell>
                <TableCell align="right">
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ManagePhotos;
