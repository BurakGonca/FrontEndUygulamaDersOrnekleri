import React from "react";
import Card from "./Card";

const CardList = ({ kitaplar, kitapSil,secilenKategori,cardDuzenle }) => {
  return (
    <>
    <h3 style={{marginLeft:"25px"}}>{secilenKategori} </h3>
      <div className="card-list">
        {kitaplar.map((kitap) => (
          !kitap.isDeleted &&
          <Card kitap={kitap} kitapSil={kitapSil} cardDuzenle={cardDuzenle} key={kitap.id} />
        ))}
      </div>
    </>
  );
};

export default CardList;
