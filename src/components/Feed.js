import React, {useState} from 'react'
import './Feed.css'
import Post from './Post';
const Feed = () => {
    const data = [
        {
          name: "Berlin",
          image:
            "https://images.unsplash.com/photo-1551354515-519f5506542c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
          text: "I had the most amazing time here!",
        },
        {
          name: "Paris",
          image:
            "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=810&q=80",
          text: "Now I know what chocolate crepes are supposed to taste like",
        },
        {
          name: "Bali",
          image:
            "https://images.unsplash.com/photo-1573790387438-4da905039392?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=850&q=80",
          text: "Bali was otherworldly.",
        },
        {
          name: "Seoul",
          image:
            "https://images.unsplash.com/photo-1538485399081-7191377e8241?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80",
          text: "I'm already planning my next trip!",
        },
      ];
      const [posts, setPosts] = useState(data);
      const [location, setLocation] = useState("");
      const [imgURL, setImgURL] = useState("");
      const [text, setText] = useState("");

      const locationChangeHandle = (event) => {
          setLocation(event.target.value);
      }

      const urlChangeHandle = (event) => {
        setImgURL(event.target.value);
    }
    const textChangeHandle = (event) => {
        setText(event.target.value);
    }
    const addPosts = () => {
        const newPost = {name: location, image: imgURL, text: text}
        setPosts([newPost, ...posts])
    }
    return (
        <div className="feed">
            <div className="newPost">
                <h2> Add New Post </h2>
                <label>Location</label>
                <input onChange={locationChangeHandle}></input>

                <label>Image URL</label>
                <input onChange={urlChangeHandle}></input>

                <label>Text</label>
                <input onChange={textChangeHandle}></input>
            </div>
            <button onClick={addPosts}>Add Post</button>
            {posts.map((location) => (
                <Post name={location.name} image={location.image} text={location.text}/>
            ))}
        </div>
    )
}

export default Feed
