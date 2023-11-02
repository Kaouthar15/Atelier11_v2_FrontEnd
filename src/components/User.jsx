import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
export default function User({ user, activeId, idClick }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (activeId === user.id) {
      const getPosts = async () => {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId${activeId}`
        );
        setPosts(res.data);
      };
      getPosts();
    }
  }, [activeId, user.id]);
  return (
    <div className="User">
      <h3>Name : {user.name}</h3>
      <p>Mail : {user.email}</p>
      <p>City : {user.address.city}</p>
      <p>Street : {user.address.street}</p>
      <button onClick={() => idClick(user.id)} disabled={activeId === user.id}>
        More details{" "}
      </button>
      <button onClick={() => idClick(0)} disabled={activeId === 0}>
        Less details
      </button>
      {activeId === user.id && (
        <div className="Post">
          {posts.map((e) => (
            <div key={e.id}>
              <p>{e.title}</p>
              <p>{e.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
