import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PhotoListItem from "./PhotoListItem";

const columns = [
  { id: "expand", label: "", minWidth: 50 },
  { id: "title", label: "Title", minWidth: 150, align: "left" },
  { id: "tag", label: "Tag", minWidth: 125 },
  { id: "link", label: "Link", minWidth: 100 },
  { id: "isActive", label: "Is Active", minWidth: 150 },
  { id: "delete", label: "Delete", minWidth: 100, align: "center" },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: 50,
  },
  container: {
    minHeight: 440,
  },
  iconStyles: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});

const ManagePhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [id, setId] = useState(0);
  const classes = useStyles();

  const fetchPictures = async () => {
    const result = await fetch(
      process.env.NODE_ENV == "production"
        ? PRODUCTION_API_URL + "admin/update"
        : "http://localhost:5000/admin/update"
    )
      .then((pics) => pics.json())
      .then((sorted) => sorted.sort((a, b) => a.tagIndex - b.tagIndex))
      .then((activePhotos) =>
        activePhotos.sort((a, b) => {
          let val1 = a.tag.toUpperCase();
          let val2 = b.tag.toUpperCase();
          return val1 < val2 ? -1 : val1 > val2 ? 1 : 0;
        })
      );
    setPhotos(result);
  };

  useEffect(() => {
    fetchPictures();
  }, [id]);
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
                  style={{ minWidth: column.minwidth, color: "#ffffff" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {photos.map((photo) => (
              <PhotoListItem photo={photo} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ManagePhotos;
