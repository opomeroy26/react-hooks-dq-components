import React from "react";
import AlbumCard from "./AlbumCard";
import { albums } from "../data/albums";

function AlbumList() {
  return (
    <section className="albums">

      {albums.map(albumsObj =>  { return <AlbumCard
        name={albumsObj.name}
        image={albumsObj.image}
        genre={albumsObj.genre}
        key = {albumsObj.id}
      />})}
    </section>
  );
}



export default AlbumList;
