import React, { useContext } from "react";
import "../assets/style/forms.scss";
import DataContext from "../context/DataContext";

const Forms = () => {
  
  const { secilenKitap,
          kitapAdi,
          kitapYazari,
          kitapKategorisi,
          kitapResmi,
          kitapSayfaSayisi,
          kitapAciklamasi,
          setKitapAdi,
          setKitapYazari,
          setKitapKategorisi,
          setKitapResmi,
          setKitapSayfaSayisi,
          setKitapAciklamasi,
          handleSubmit

   } = useContext(DataContext);

  return (
    <form onSubmit={handleSubmit}>
      <h3>{secilenKitap?"Kitap Düzenle": "Kitap Ekle"}</h3>
      <input
        value={kitapAdi}
        onChange={(e) => setKitapAdi(e.target.value)}
        type="text"
        placeholder="Kitap Adı"
      ></input>
      <input
        value={kitapYazari}
        onChange={(e) => setKitapYazari(e.target.value)}
        type="text"
        placeholder="Kitap Yazarı"
      ></input>
      <select
        value={kitapKategorisi}
        onChange={(e) => setKitapKategorisi(e.target.value)}
      >
        <option>Kategori Seçiniz</option>
        <option>Yazılım</option>
        <option>Tarih</option>
        <option>Roman</option>
        <option>Finans</option>
        <option>Diğer</option>
      </select>
      <input
        value={kitapSayfaSayisi}
        onChange={(e) => setKitapSayfaSayisi(e.target.value)}
        type="number"
        placeholder="Sayfa Sayısı"
      ></input>
      <input
        value={kitapResmi}
        onChange={(e) => setKitapResmi(e.target.value)}
        type="url"
        placeholder="Kitap resmi(url)"
      ></input>
      <textarea
        value={kitapAciklamasi}
        onChange={(e) => setKitapAciklamasi(e.target.value)}
        placeholder="Kitap Açıklaması"
      ></textarea>
      <input
        disabled={
          kitapAdi === "" ||
          kitapYazari === "" ||
          kitapSayfaSayisi === "" ||
          kitapAciklamasi === "" ||
          kitapKategorisi === "Kategori Seçiniz"
        }
        type="submit"
        value={secilenKitap?"Düzenle": "Ekle"}
      ></input>
    </form>
  );
};

export default Forms;
