import React from "react";
import Card from "./Card";

const CardList = ({ kitaplar, kitapSil,secilenKategori }) => {
  return (
    <>
    <h3 style={{marginLeft:"25px"}}>{secilenKategori} </h3>
      <div className="card-list">
        {kitaplar.map((kitap) => (
          <Card kitap={kitap} kitapSil={kitapSil} key={kitap.id} />
        ))}
      </div>
    </>
  );
};

export default CardList;
