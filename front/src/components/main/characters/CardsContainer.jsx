import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CardCharacter from "./Card";

function Characters() {
  const { characters } = useSelector((state) => state);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap-reverse",

        justifyContent: "space-between",
      }}
    >
      {characters &&
        characters.map((e) => (
          <CardCharacter
            id={e.id}
            key={e.name}
            name={e.name}
            image={e.image}
            status={e.status}
            species={e.species}
            gender={e.gender}
            origin={e.origin}
          />
        ))}
    </div>
  );
}

export default Characters;
