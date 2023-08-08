import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const UpdateAlbum = (props) => {
  const getUpdateData = () => {
    const id = props.album.id;
    let updateTitle = document.getElementById("title-inp").value;
    let updateUserid = document.getElementById("userid-inp").value;

    // If the updateTitle input is empty, use the current album's title
    if (updateTitle === "") {
      updateTitle = props.album.title;
    }

    // If the updateUserid input is empty, use the current album's userId
    if (updateUserid === "") {
      updateUserid = props.album.userId;
    }

    // Call the updateAlbumInList function with the updated data
    props.updateAlbumInList(id, updateTitle, Number(updateUserid), props.album);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar path="/" page="Home" />

      <div className="update-album">
        <div className="form-container">
          {/* Display the current album's title */}
          <h4>Title: {props.album.title}</h4>
          <div className="inp-container">
            Enter New Title:
            <input type="text" id="title-inp" />
          </div>

          {/* Display the current album's userId */}
          <h4>User Id: {props.album.userId}</h4>
          <div className="inp-container">
            Enter New UserId:
            <input type="number" id="userid-inp" />
          </div>

          {/* Use the Link component to navigate back to the home page ("/") when the "Save" button is clicked. */}
          <Link to="/">
            <button type="submit" onClick={getUpdateData}>
              Save
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UpdateAlbum;
