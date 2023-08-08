import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AddAlbum from "./AddAlbum";
import AlbumsList from "./AlbumsList";
import UpdateAlbum from "./UpdateAlbum";

const App = () => {
  const [albums, setAlbums] = useState([]);
  const [updateAlbum, setUpdateAlbum] = useState({});

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        const albumsData = await response.json();
        setAlbums(albumsData);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };
    fetchAlbums();
  }, []);

  const deleteAlbumFromList = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: "DELETE",
    });
    const newAlbums = albums.filter((album) => album.id !== id);
    setAlbums(newAlbums);
    alert("Your Album Deleted successfully");
  };

  const updateAlbumInList = async (id, updateTitle, updateUserid, oldAlbum) => {
    const index = albums.indexOf(oldAlbum);
    let updatedAlbum = [];

    if (id < 100) {
      updatedAlbum = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            userId: updateUserid,
            id: id,
            title: updateTitle,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      ).then((response) => response.json());
    } else {
      updatedAlbum = {
        userId: updateUserid,
        id: id,
        title: updateTitle,
      };
    }

    const updatedAlbums = [...albums];
    updatedAlbums[index] = updatedAlbum;
    setAlbums(updatedAlbums);
    alert("Update Successfully done");
  };

  const addAlbumToList = async (userId, title) => {
    await fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      body: JSON.stringify({
        userId: userId,
        title: title,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albumsData = await response.json();
    setAlbums(albumsData);
    alert("New Album added successfully to the bottom");
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <AlbumsList
              albums={albums}
              setUpdateAlbum={setUpdateAlbum}
              deleteAlbumFromList={deleteAlbumFromList}
            />
          }
        />
        <Route
          path="/add-album"
          element={<AddAlbum addAlbumToList={addAlbumToList} />}
        />
        <Route
          path="/update-album"
          element={
            <UpdateAlbum
              album={updateAlbum}
              updateAlbumInList={updateAlbumInList}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
