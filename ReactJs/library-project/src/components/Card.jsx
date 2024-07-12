import React from "react";
import "../assets/style/card.scss";
import Book from "../assets/img/defaultBook.jpg";

const Card = ({ kitap, kitapSil, cardDuzenle }) => {
  let kelimeDizisi = kitap.kitapAciklamasi.split(" ");

  return (
    <div className="card">
      <button onClick={() => kitapSil(kitap.id)} className="delete">
        Sil
      </button>
      <button onClick={() => cardDuzenle(kitap.id)} className="edit">Düzenle</button>
      <img
        src={kitap.kitapResmi ? kitap.kitapResmi : Book}
        alt={kitap.KitapAdi}
      />
      <div className="card-body">
        <h4>{kitap.kitapAdi}</h4>
        <p>Yazar: {kitap.kitapYazari}</p>
        <p>Kategori: {kitap.kitapKategorisi}</p>
        <p>Sayfa Sayısı: {kitap.kitapSayfaSayisi}</p>
        <p>
          Açıklaması:
          {kelimeDizisi[0] +
            " " +
            kelimeDizisi[1] +
            " " +
            kelimeDizisi[1] +
            " " +
            kelimeDizisi[2] +
            " " +
            kelimeDizisi[3] +
            " " +
            kelimeDizisi[4] +
            " " +
            kelimeDizisi[5] +
            " " +
            kelimeDizisi[6] +
            " " +
            kelimeDizisi[7] +
            " " +
            kelimeDizisi[8] +
            " " +
            kelimeDizisi[9] +
            " " +
            kelimeDizisi[10] +
            " " +
            "..."}
        </p>
      </div>
    </div>
  );
};

export default Card;
