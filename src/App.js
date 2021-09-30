import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Components/Post";
import logo from "./images/instagram.png";
import { db ,auth} from "./Firebase";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, Switch,Input } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Imageupload from "./Components/Imageupload";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function App() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [Posts, SetPosts] = useState([]);
  const [openSignin, setopenSignin] = useState(false);
  const [open, setopen] = useState(false);
  const [username, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [user, setUser] = useState(null);
useEffect(()=>{
const unsubscribe =auth.onAuthStateChanged((authUser)=>{
  if(authUser){
console.log(authUser)
setUser(authUser);

  }else{
    setUser(null);
  }
})
return()=>{
  //perform some cleanup
  unsubscribe();
}
},[user,username])

  useEffect(() => {
    db.collection("Posts").onSnapshot((snapshot) => {
      SetPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);
  
  const Signup=(event)=>{
   event.preventDefault();
 
  auth
  .createUserWithEmailAndPassword(email,password)
  .then((authUser)=>{
return  authUser.user.updateProfile({
  displayName:username
})
  })
  .catch((error)=>alert(error.message));
  setopen(false);
}
const Signin=(event)=>{
  event.preventDefault();
  auth
  .signInWithEmailAndPassword(email,password)
  .catch((error)=>alert(error.message))
  setopenSignin(false);
}
  return (
    <div className="App">
      <Imageupload/>
    
      <Modal open={open} onClose={() => setopen(false)}>
        <div style={modalStyle} className={classes.paper}>
         <form className="app-signup">
          <center>
          <img className="app-header-image" src={logo} alt="insta-logo" />
          </center>
          <Input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e)=>setuserName(e.target.value)
            }
            />
            <Input
            placeholder="Email"
            type="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)
            }
            /> 
               <Input
            placeholder="Password"
            type="Password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)
            }
            />
            <Button type="submit" onClick={Signup}>Signup</Button>
          
          </form>
        </div>
      </Modal>
      <Modal open={openSignin} onClose={() => setopenSignin(false)}>
        <div style={modalStyle} className={classes.paper}>
         <form className="app-signup">
          <center>
          <img className="app-header-image" src={logo} alt="insta-logo" />
          </center>
         
            <Input
            placeholder="Email"
            type="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)
            }
            /> 
               <Input
            placeholder="Password"
            type="Password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)
            }
            />
            <Button type="submit" onClick={Signin}>Sign In</Button>
          
          </form>
        </div>
      </Modal>
      <div className="app-header">
        <img className="app-header-image" src={logo} alt="insta-logo" />
      </div>
      {user?(
        <Button  onClick={()=>auth.signOut()}> Logout</Button>
      ): (
        <div className="app-loginContainer">
          <Button  onClick={()=>setopenSignin(true)}> Sign In</Button>
<Button  onClick={()=>setopen(true)}> Sign uP</Button>
        </div>

        
      )}

      <h1>This is instagram clone Get Ready for something new</h1>
      {Posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          Imageurl={post.Imageurl}
        />
      ))}
    </div>
  );
}

export default App;
