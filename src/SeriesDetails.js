import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { seriesApi } from "./global";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function SeriesDetails() {
  const { id } = useParams();
  const [series, setSeries] = useState({});

  useEffect(() => {
    fetch(`${seriesApi}/${id}`, {
      method: "GET",
    })
      .then((data) => data.json()) //response object
      .then((sr) => setSeries(sr))
      .catch((err) => console.log(err));
  }, []);

  const history = useHistory();
  return (
    <div>
      <iframe width="100%" height="650" src={series.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h2 className="details-name">{series.title}</h2>
          <p className="details-rating"><b style={{color: "green"}}>IMDb Rating: </b>⭐ {series.rating}/10</p>
        </div>
        <p className="details-summary">{series.summary}</p>
        <Button style={{margin: "15px"}} variant="contained" startIcon={<ArrowBackIosIcon />} onClick={() => { history.goBack(); }}>
          Back
        </Button>
      </div>
    </div>
  );
}
