import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { seriesApi } from "./global";
import { Series } from "./Series";

export function SeriesList() {
  const history = useHistory();
  const [seriesList, setSeriesList] = useState([]);

  const getSeries = () => {
    fetch(`${seriesApi}`, {
      method: "GET",
    }) //promise
      .then((data) => data.json())
      .then((srs) => setSeriesList(srs));
  };

  useEffect(() => getSeries(), []);
  //delete series -> refresh data
  const deleteSeries = (id) => {
    fetch(`${seriesApi}/${id}`, {
      method: "DELETE",
    })
      .then(() => getSeries());
  };
  return (
    <div className="App">
      {seriesList.map(({ title, poster, rating, summary, id }, index) => <Series
        title={title}
        poster={poster}
        rating={rating}
        summary={summary}
        deleteButton={<IconButton aria-label="delete" style={{ marginLeft: "auto" }} color="error"
          onClick={() => deleteSeries(id)}
        ><DeleteIcon /></IconButton>}
        editButton={<IconButton aria-label="edit" size="large" color="primary"
          onClick={() => {
            //console.log(index); 
            history.push(`/series/edit/${id}`);
          }}>
          <EditIcon fontSize="inherit" />
        </IconButton>}
        id={id} />)}
    </div>
  );
}
