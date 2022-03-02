import './index.css';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Switch, Route } from "react-router-dom";
import { seriesApi } from "./global";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { SeriesList } from './SeriesList';
import { AddSeries } from './AddSeries';
import { SeriesDetails } from './SeriesDetails';
import { NotFound } from './NotFound';
import { EditSeries } from './EditSeries';

export default function App() {
  // const initialSeriesList = [
  //   {
  //     title: "Breaking Bad",
  //     poster: "https://www.themoviedb.org/t/p/original/7LUswjn6jgLxdJ4e6sgwkULXsZI.jpg",
  //     rating: 9.4,
  //     summary: "Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.",
  //     video: "https://www.youtube.com/embed/8h-iAZBtNrs"
  //   },
  //   {
  //     title: "Dark",
  //     poster: "https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_.jpg",
  //     rating: 8.8,
  //     summary: "The mystery-drama series introduces an intricate puzzle filled with twists that includes a web of curious characters, all of whom have a connection to the town's troubled history whether they know it or not.",
  //     video: "https://www.youtube.com/embed/CYz-RUe4HH8"
  //   },
  //   {
  //     title: "Money Heist",
  //     poster: "https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
  //     rating: "8.2",
  //     summary: "A criminal mastermind who goes by, The Professor has a plan to pull off the biggest heist in recorded history to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose.",
  //     video: "https://www.youtube.com/embed/MsWvBA49Ido"
  //   },
  //   {
  //     title: "Peaky Blinders",
  //     poster: "https://cdn.shopify.com/s/files/1/0969/9128/products/PeakyBlinders-ThomasShelby-GarrisonBombing-NetflixTVShow-ArtPoster_a29a5be9-9611-43d9-b415-18655f60c629.jpg?v=1619864667",
  //     rating: "8.8",
  //     summary: "Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.",
  //     video: "https://www.youtube.com/embed/M-7v9bP10-U"
  //   },
  //   {
  //     title: "Stranger Things",
  //     poster: "https://assets.teenvogue.com/photos/5c2cf71c7f2f0852e2b9d603/master/w_1259,h_1786,c_limit/lede.jpg",
  //     rating: 8.7,
  //     summary: "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",
  //     video: "https://www.youtube.com/embed/CKtq-bZgS8I"
  //   }
  // ];
  const history = useHistory();
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  //const [seriesList, setSeriesList] = useState(initialSeriesList);

  return (
    <ThemeProvider theme={theme}>
      <Paper className="background" style={{ borderRadius: "0px", minHeight: "150vh" }} elevation={4}>
        <div className="appbar">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => history.push("/")}>Home</Button>
              <Button color="inherit" onClick={() => history.push("/series")}>Series</Button>
              <Button color="inherit" onClick={() => history.push("/series/add")}>Add Series</Button>
              <Button
                color="inherit"
                startIcon={theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                style={{ marginLeft: "auto" }}
                onClick={() => setMode(mode === "light" ? "dark" : "light")}>{mode === "light" ? "Dark" : "Light"}</Button>
            </Toolbar>
          </AppBar>
        </div>

        <Switch>
          <Route exact path="/">
            <h1 className="welcome">Welcome to Netflix TV Shows</h1>
          </Route>
          <Route exact path="/series">
            <SeriesList />
          </Route>

          <Route exact path="/series/add">
            <AddSeries />
          </Route>

          <Route exact path="/series/edit/:id">
            <EditSeries />
          </Route>

          <Route exact path="/series/details/:id">
            <SeriesDetails />
          </Route>

          <Route exact path="**">
            <NotFound />
          </Route>
        </Switch>
      </Paper>
    </ThemeProvider>
  );
}