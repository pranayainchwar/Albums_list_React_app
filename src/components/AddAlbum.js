// import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";

// const AddAlbum = (props) => {
//   const getAlbumFormData = () => {
//     const userId = document.getElementById("aaform-userid-inp").value;
//     const title = document.getElementById("aaform-title-inp").value;
//     props.addAlbumToList(Number(userId), title);
//   };

//   return (
//     <>
//       <Navbar path="/" page="Home" />
//       <div className="addalbum-container">
//         <div className="addalbum-form">
//           <h4>Enter New Album Details</h4>
//           <div className="inp-container">
//             Enter User Id:
//             <input id="aaform-userid-inp" type="number" />
//           </div>
//           <div className="inp-container">
//             Enter Album Title:
//             <input id="aaform-title-inp" type="text" />
//           </div>
//           <div>
//             <Link to="/">
//               <button onClick={getAlbumFormData}>Add To List</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddAlbum;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const AddAlbum = (props) => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");

  // This function gets the user input (userId and title) and calls the addAlbumToList function to add the album to the list
  const getAlbumFormData = async () => {
    try {
      await props.addAlbumToList(Number(userId), title);
      setUserId("");
      setTitle("");
      alert("New Album added successfully to the bottom");
    } catch (error) {
      console.error("Error adding album:", error);
      alert("Error adding album. Please try again later.");
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar path="/" page="Home" />

      <div className="addalbum-container">
        <div className="addalbum-form">
          <h4>Enter New Album Details</h4>
          <div className="inp-container">
            Enter User Id :
            <input
              id="aaform-userid-inp"
              type="number"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="inp-container">
            Enter Album Title :
            <input
              id="aaform-title-inp"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Use the Link component to navigate back to the home page ("/") when the "Add To List" button is clicked. */}
          <Link to="/">
            <button onClick={getAlbumFormData}>Add To List</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AddAlbum;
