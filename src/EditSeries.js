import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { seriesApi } from "./global";
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function EditSeries() {
    const { id } = useParams();
    const [series, setSeries] = useState(null);

    useEffect(() => {
        fetch(`${seriesApi}/${id}`, {
            method: "GET",
        })
            .then((data) => data.json()) //response object
            .then((sr) => setSeries(sr))
            .catch((err) => console.log(err));
    }, []);

    //console.log(series);
    return (
        <div>
            {series ? <EditSeriesForm series={series} /> : <h2 style={{margin: "20px", fontSize: "35px"}}>Loading...</h2>}
        </div>
    );
}

function EditSeriesForm({ series }) {
    const [title, setTitle] = useState(series.title);
    const [poster, setPoster] = useState(series.poster);
    const [summary, setSummary] = useState(series.summary);
    const [rating, setRating] = useState(series.rating);
    const [video, setVideo] = useState(series.video);
    const history = useHistory();
    return (
        <div className='add-container'>
            <h1>Edit Series Details</h1>
            <TextField
                value={title}
                id="outlined-basic"
                className="input-field"
                label="Series Name"
                color="primary"
                variant="outlined"
                onChange={(event) => setTitle(event.target.value)}
            />
            <br></br>
            <TextField
                value={poster}
                id="outlined-basic"
                className="input-field"
                label="Series Poster"
                color="primary"
                variant="outlined"
                onChange={(event) => setPoster(event.target.value)}
            />
            <br></br>
            <TextField
                value={summary}
                id="outlined-basic"
                className="input-field"
                label="Series Summary"
                color="primary"
                variant="outlined"
                onChange={(event) => setSummary(event.target.value)}
            />
            <br></br>
            <TextField
                value={rating}
                id="outlined-basic"
                className="input-field"
                label="Series Rating"
                color="primary"
                variant="outlined"
                onChange={(event) => setRating(event.target.value)}
            />
            <br></br>
            <TextField
                value={video}
                id="outlined-basic"
                className="input-field"
                label="Series Videoclip"
                color="primary"
                variant="outlined"
                onChange={(event) => setVideo(event.target.value)}
            />
            <br></br>
            <Button id="button" variant="contained" color="success" onClick={() => {
                const updatedSeries = {
                    title: title,
                    poster: poster,
                    summary: summary,
                    rating: rating,
                    video: video
                };
                // const copySeriesList = [...seriesList];
                // copySeriesList[id] = updatedSeries;
                // setSeriesList(copySeriesList);
                // history.push("/series");
                fetch(`${seriesApi}/${series.id}`, {
                    method: "PUT",
                    body: JSON.stringify(updatedSeries),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }).then(() => history.push("/series"));
            }}>Save</Button>
        </div>
    );
}
