// import React from "react";
// import { Link } from "react-router-dom";

// const List = (props) => {
//   return (
//     <div className="list">
//       <h3>{props.album.title}</h3>
//       <div className="button-group">
//         <Link to="/update-album">
//           <button
//             className="update-btn"
//             onClick={() => props.setUpdateAlbum(props.album)}
//           >
//             Update
//           </button>
//         </Link>
//         <button
//           className="delete-btn"
//           onClick={() => props.deleteAlbumFromList(props.album.id)}
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// };

// export default List;


import React from "react";
import { Link } from "react-router-dom";

const List = (props) => {
  return (
    <div className="list">
      {/* Display the title of the album */}
      <h3>{props.album.title}</h3>
      <div className="button-group">
        {/* Use the Link component from react-router-dom to navigate to the "/update-album" route 
            when the "Update" button is clicked. */}
        <Link to="/update-album">
          <button
            className="update-btn"
            onClick={() => props.setUpdateAlbum(props.album)}
          >
            Update
          </button>
        </Link>

        {/* Call the deleteAlbumFromList function when the "Delete" button is clicked. */}
        <button
          className="delete-btn"
          onClick={() => props.deleteAlbumFromList(props.album.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default List;

