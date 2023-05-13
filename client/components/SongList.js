import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const SongList = ({ data }) => {
  if (data.loading) {
    return <div>loading...</div>;
  } else {
    return (
      <ul className="collection">
        {data.songs.map((song) => (
          <li className="collection-item" key={song.id}>{song.title}</li>
        ))}
      </ul>
    );
  }
};

const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

export default graphql(query)(SongList);
