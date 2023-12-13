const NewCourse = () => {
  return (
    <div>
      <h1 className="pageTitle">Add New Course</h1>
      <div className="courseInfo">
        <form className="addCourse">
          <label>
            Course title:
            <input type="text" required />
          </label>

          <label>
            Course description:
            <textarea name="description" required />
          </label>

          <label>
            Course Image URL:
            <input type="text" />
          </label>

          <label>
            Rate:
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>

          <label>
            Participants:
            <input type="number" required />
          </label>

          <label>
            Course price:
            <input type="number" required />
          </label>
          <button type="submit">Add Course</button>
        </form>
      </div>
    </div>
  );
};

export default NewCourse;
