import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Badge from '@mui/material/Badge';


export function Series({ title, poster, rating, summary, deleteButton, editButton, id }) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [show, setShow] = useState(true);
  const history = useHistory();
  return (
    <Card className="series-container">
      <img src={poster} className="series-poster" alt="series-poster"></img>
      <CardContent>
        <div className='series-specs'>
          <h2 className='series-name'>{title}
            <IconButton color="warning" aria-label="series-summary" onClick={() => setShow(!show)}>
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </h2>
          <IconButton color="primary" aria-label="series-details" onClick={() => history.push(`/series/details/${id}`)}>
            <InfoIcon />
          </IconButton>
        </div>
        {/* conditional rendering */}
        {show ? <p className='series-summary'>{summary}</p> : " "}
        <h2 className='series-rating'><b style={{ color: "green" }}>IMDb Rating: </b>⭐ {rating}/10</h2>
      </CardContent>
      <CardActions>
        <IconButton color="success" aria-label="delete" onClick={() => setLike(like + 1)}>
          <Badge color="success" badgeContent={like}>👍</Badge>
        </IconButton>
        <IconButton aria-label="delete" color="primary" onClick={() => setDislike(dislike + 1)}>
          <Badge color="primary" badgeContent={dislike}>👎</Badge>
        </IconButton>
        {deleteButton}
        {editButton}
      </CardActions>
      <br></br>
    </Card>
  );
}
