import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { seriesApi } from "./global";
import TextField from '@mui/material/TextField';

export function AddSeries() {
  const { id } = useParams();

  const [title, setTitle] = useState(" ");
  const [poster, setPoster] = useState(" ");
  const [summary, setSummary] = useState(" ");
  const [rating, setRating] = useState(" ");
  const [video, setVideo] = useState(" ");
  const history = useHistory();

  const [seriesList, setSeriesList] = useState({});

  useEffect(() => {
    fetch(`${seriesApi}/${id}`, {
      method: "GET",
    })
      .then((data) => data.json()) //response object
      .then((srs) => setSeriesList(srs))
      .catch((err) => console.log(err));
  }, []);

  const addSeries = () => {
    const newSeries = {
      title: title,
      poster: poster,
      summary: summary,
      rating: rating,
      video: video
    };
    fetch(`${seriesApi}`, {
      method: "POST",
      body: JSON.stringify(newSeries),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => history.push("/series"));
    setSeriesList([...seriesList, newSeries]);
  };

  return (
    <div className='add-container'>
      <h1 className>Add Series Details</h1>
      <TextField
        id="outlined-basic"
        className="input-field"
        label="Series Name"
        color="primary"
        variant="outlined"
        onChange={(event) => setTitle(event.target.value)} />
      <br></br>
      <TextField
        id="outlined-basic"
        className="input-field"
        label="Series Poster"
        color="primary"
        variant="outlined"
        onChange={(event) => setPoster(event.target.value)} />
      <br></br>
      <TextField
        id="outlined-basic"
        className="input-field"
        label="Series Summary"
        color="primary"
        variant="outlined"
        onChange={(event) => setSummary(event.target.value)} />
      <br></br>
      <TextField
        id="outlined-basic"
        className="input-field"
        label="Series Rating"
        color="primary"
        variant="outlined"
        onChange={(event) => setRating(event.target.value)} />
      <br></br>
      <TextField
        id="outlined-basic"
        className="input-field"
        label="Series Videoclip"
        color="primary"
        variant="outlined"
        onChange={(event) => setVideo(event.target.value)} />
      <br></br>
      <Button id="button" variant="contained" color="warning" onClick={addSeries}>Add Series</Button>
    </div>
  );
}
