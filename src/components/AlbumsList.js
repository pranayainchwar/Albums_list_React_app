import React from "react";
import List from "./List";
import Navbar from "./Navbar";

const AlbumsList = (props) => {
  return (
    <>
      <Navbar page="Add Album" path="/add-album" />
      <div className="albums-list">
        {props.albums.map((album) => (
          <List
            album={album}
            key={album.id}
            setUpdateAlbum={props.setUpdateAlbum}
            deleteAlbumFromList={props.deleteAlbumFromList}
          />
        ))}
      </div>
    </>
  );
};

export default AlbumsList;
