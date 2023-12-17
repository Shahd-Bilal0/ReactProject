import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

const NewCourse = () => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});
  const [title, setTitle] = useState("add title");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("img/course-04.jpg");
  const [rating, setRating] = useState("1");
  const [user, setUser] = useState("");
  const [price, setPrice] = useState("");
  const [isPending, setIsPending] = useState(false);
  const hist = useHistory();
  const handleAdd = (e) => {
    e.preventDefault();
    const newCourse = { img, title, description, user, price, rating };
    setIsPending(true);
    fetch("http://localhost:8000/coursesData", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCourse),
    }).then(() => {
      setIsPending(false);
      //   hist.go(-1);
      //   hist.go(1);
      hist.push("/courses");
    });
  };
  return (
    <div>
      <h1 className="pageTitle">Add New Course</h1>
      <div className="new">
        <form onSubmit={handleAdd} className="addCourse">
          <label>
            Course title:
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label>
            Course description:
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>

          <label>
            Course Image URL:
            <input type="file" ref={fileInputField} />
          </label>
          <label>
            Course Image URL:
            <input
              type="text"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </label>

          <label>
            Rate:
            <select value={rating} onChange={(e) => setRating(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>

          <label>
            Participants:
            <input
              type="number"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </label>

          <label>
            Course price:
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>
          <div className="button-container">
            {!isPending && <button type="submit">Add Course</button>}
            {isPending && (
              <button disabled type="submit">
                Waiting...
              </button>
            )}
          </div>
        </form>
        <div className="image">
          <img src="img/c.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewCourse;
