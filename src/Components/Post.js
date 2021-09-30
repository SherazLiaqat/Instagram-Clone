import React from 'react'
import './Post.css';
import { Avatar } from '@material-ui/core';
const Post = ({username,caption,Imageurl}) => {
    return (
        <div className="post">
           {/*Header-> Avatar+username */}
           <div className= "post-Header">
           <Avatar
           className="post-Avatar"
           alt="img-Avatar"
           src="/static/images/avatar/1.jpg"
           />
           <h3> {username}</h3>
           </div>
             {/*image */}
             <img className="post-img" src={Imageurl} alt="Post"></img>
             {/*username+caption */}
             <h4 className="post-text"><strong>{username}</strong> {caption}</h4>
        </div>
    )
}

export default Post
