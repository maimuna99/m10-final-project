import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";

const Dashboard = ({ auth: { user } }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/Createnotes", {
        title,
        content,
        isPublic,
      });
      console.log("skdjnclsjdnlsjd");
      console.log(response.data);
      // Clear form fields after submitting the note
      setTitle("");
      setContent("");
      setIsPublic(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ marginTop: "5rem", textAlign: "center" }}>
      <h1>Welcome, {user && user.name}</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="isPublic">Public:</label>
          <input
            type="checkbox"
            id="isPublic"
            checked={isPublic}
            onChange={(e) => setIsPublic(e.target.checked)}
          />
        </div>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
