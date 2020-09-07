import React, { useState, useEffect } from 'react'
import "./feed.css"
import Storyreel from './storyreel';
import MessageSender from './MessageSender'
import Post from './Post'
import db from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
            );
    }, []);

    return (
        <div className="feed">
            {/*Story Feed Center*/}
            <Storyreel />

            {/*Message Feed Center*/}
            <MessageSender />

            {/*Post the message */}
            {posts.map((post) => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}

            {/* <Post 
                profilePic={Photo}
                message="Wow This is an Facebook-clone."
                timestamp="time..."
                username="Mohan kumar"
                image="https://i2.wp.com/movingtips.wpengine.com/wp-content/uploads/2019/07/new-york2.jpg?fit=1024%2C684&ssl=1"
            />

            <Post 
                profilePic={Photo}
                message="Wow This is an Facebook-clone."
                timestamp="time..."
                username="Mohan kumar"
                image="https://i2.wp.com/movingtips.wpengine.com/wp-content/uploads/2019/07/new-york2.jpg?fit=1024%2C684&ssl=1"
            />*/}
        </div>
    )
}

export default Feed
