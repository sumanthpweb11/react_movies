import { makeStyles } from "@material-ui/core/styles";

// if you want to immediately return an arrow function wrap callback function body in parenthesis
export default makeStyles(() => ({

  root:{
    backgroundColor: "red"
  },
  toolbar:{
    height:"70px",
    backgroundColor:"green",
  },
  content:{
    flexGrow:1,
    padding:"2rem" ,
  }
}));
