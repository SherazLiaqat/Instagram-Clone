import { Button } from '@material-ui/core';
import React,{useState} from 'react'
import {storage,db} from '../Firebase';
const Imageupload = () => {
    const [Caption, setCaption] = useState('');
    const [Progress, setProgress] = useState((0));
    const [Image, setImage] = useState(null);
    const handleChange=(e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }
    const handleUpload=()=>{
const uploadTask=storage.ref(`images/${images.name}`).put(Image);
uploadTask.on(
    "state_changed",
    (snapshot)=>{
        //progress function
        const Progress=Math.round(
            (snapshot.bytesTransferred/snapshot.totalBytes)*100
        );
        setProgress(Progress);
    },
    (error)=>{
        //error finction
        storage
        .ref("images")
        .child(Image.name)
        .getDownloadURL()
        .then(url=>{
            //post image inside db
            db.collection("Posts").add({

            })
        })
    }
)   
}
    return (
        <div>
            <h1>hyy</h1>
            {/*I want to have */}
    {/*caption input */}
    {/*file picker */}
    {/*post button*/}
    <input type="text" placeholder="Enter Caption..." onChange={event=>setCaption(event.target.value)} value={Caption}></input>
      <input type="file" onChange={handleChange}></input>
      <Button onClick={handleUpload}>Upload</Button>
        </div>
    )
}

export default Imageupload
