import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import {Actors, Profile, Movies, MovieInformation, Navbar} from "./components/index"
import useStyles from "./components/styles"

const App =() => {
  const  classes = useStyles()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar/>
      <main className={classes.content}>
      <div className={classes.toolbar}/>
        <Routes>
          <Route path="/" element={<Movies/>} />
          <Route path="/movie/:id" element={<MovieInformation/>} />
          <Route path="/actors/:id" element={<Actors/>} />
          <Route path="/profile/:id" element={<Profile/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
