import React from "react";
import { Link } from "react-router-dom";

const List = ({ album, setUpdateAlbumData, deleteAlbumFromList }) => {
  return (
    <div className="list">
      <h3>{album.title}</h3>
      <div className="button-group">
        <Link to={`/update-album/${album.id}`}>
          <button
            className="update-btn"
            onClick={() => setUpdateAlbumData(album)}
          >
            Update
          </button>
        </Link>
        <button
          className="delete-btn"
          onClick={() => deleteAlbumFromList(album.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default List;
