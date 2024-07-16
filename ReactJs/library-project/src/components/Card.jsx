import React, { useContext } from "react";
import "../assets/style/card.scss";
import Book from "../assets/img/defaultBook.jpg";
import DataContext from "../context/DataContext";

import { FaTrash } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";

import { FaEdit } from "react-icons/fa";

const Card = ({ kitap }) => {
  let kelimeDizisi = kitap.kitapAciklamasi.split(" ");
const {kitapSil, cardDuzenle, search} = useContext(DataContext);
  return (
    (kitap.kitapAdi.toLowerCase().startsWith(search.toLowerCase())) &&

    <div className="card">
      <button onClick={() => kitapSil(kitap.id)} className="delete">
      <FaRegTrashAlt size={40}/>
      </button>
      <button onClick={() => cardDuzenle(kitap.id)} className="edit">
        <FaEdit size={40}/>
      </button>
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
