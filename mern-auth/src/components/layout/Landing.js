import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";

const Landing = ({ isAuthenticated }) => {
  const [publicNotes, setPublicNotes] = useState([]);

  useEffect(() => {
    const fetchPublicNotes = async () => {
      try {
        const response = await axios.get("/notes/public");
        const publiscNotes = response.data.filter((note) => note.isPublic);
        setPublicNotes(publicNotes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPublicNotes();
  }, []);

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>Shared Notes</h1>
          <p>A place to share your notes</p>
          <br />
          <div className="buttons">
            <Link to="/register" className="btn">
              Sign Up
            </Link>
            <Link to="/login" className="btn">
              Login
            </Link>
          </div>
          <div>
            <h2 style={{ marginTop: "2rem" }}>Public Notes</h2>
            {publicNotes.map((note) => (
              <div key={note._id}>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
