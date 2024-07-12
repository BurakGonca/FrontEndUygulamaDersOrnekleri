import React, { useEffect, useState } from "react";
import Navi from "./components/Navi";
import Forms from "./components/Forms";
import CardList from "./components/CardList";
import axios from "axios";

const App = () => {
  const companyName = "Kütüphanem";

  const [kitaplar, setKitaplar] = useState([]);
  const [kategoriler, setKategoriler] = useState([]);
  const [secilenKategori, setSecilenKategori] = useState("Tüm Kitaplar");
  const [secilenKitap, setSecilenKitap] = useState("");

  //kitap düzenleyi de burada yapiyoruz
  const kitapEkle = async (yeni) => {
    let url = "http://localhost:3005/kitaplar";
    if (!secilenKitap) {
      //önyüze ekleme işlemi
      setKitaplar((prev) => [...prev, yeni]);
      //arka yüze ekleme işlemi
      const response = await axios.post(url, yeni);
    }

    //secilen kitap varsa düzenle çalışacak
    else {
      //arka yüze ekleme işlemi
      url += `/${secilenKitap.id}`;
      const response2 = await axios.put(url, yeni);
      //önyüze ekleme işlemi
      setKitaplar((prev) =>
        prev.map((kitap) => {
          if (kitap.id === secilenKitap.id) {
            return { ...response2.data };
          }
          else{
            return {...kitap}
          }
        })
      );
      setSecilenKitap("");
    }
  };

  const kitapSil = async (id) => {
    //ön yüzde silme işlemi
    setKitaplar((prev) =>
      prev.filter((statedenGelen) => statedenGelen.id !== id)
    );

    //arka yüzde silme işlemi
    // const url = "http://localhost:3005/kitaplar/" + id; ya da ;
    const url = `http://localhost:3005/kitaplar/${id}`;

    // const response = await axios.delete(url); veriyi komple silmemek için patch yapacağız
    const response = await axios.patch(url, { isDeleted: true });

    //bu sekilde isDeleted: true eklediğimiz dosyaları göstermeyeceğiz ancak datalarımızın içinde hala olacak.
  };

  const cardDuzenle = (id) => {
    setSecilenKitap(kitaplar.find((item) => item.id === id));
    console.log(kitaplar.find((item) => item.id === id));
  };

  //kategoriye gore kitapları getirmeyi de burada yapiyoruz
  const kitaplariGetir = async () => {
    let url = "http://localhost:3005/kitaplar";
    if(secilenKategori && secilenKategori!=="Tüm Kitaplar"){
      url += `?kitapKategorisi=${secilenKategori}`
    }
    const response = await fetch(url);
    const kitaplar = await response.json();
    setKitaplar(kitaplar);
  };

  
  // const kitaplariGetir = async () => {
  //   let url = "http://localhost:3005/kitaplar";
  //   const response = await fetch(url);
  //   const kitaplar = await response.json();
  //   setKitaplar(kitaplar);
  // };

  // const kitapFiltrele = ()=>{
  //   const filtredLib = kitaplar.filter(kitap=>kitap.kitapKategorisi===secilenKategori)
  //   setKitaplar(filtredLib);
  // }
  

  const kategorileriGetir = async () => {
    const url = "http://localhost:3005/kategoriler";
    const response = await axios.get(url);
    const kategoriler = await response.data;
    setKategoriler(kategoriler);
  };

  // kategorileriGetir();

  useEffect(() => {
    kategorileriGetir();
  
  }, []);

  useEffect(() => {
    kitaplariGetir();
  }, [secilenKategori]);


  return (
    <>
      <Navi
        navHead={companyName}
        kategoriler={kategoriler}
        setSecilenKategori={setSecilenKategori}
      />
      <Forms
        secilenKitap={secilenKitap}
        kitapEkle={kitapEkle}
        kitaplar={kitaplar}
      />
      <CardList
        kitaplar={kitaplar}
        kitapSil={kitapSil}
        secilenKategori={secilenKategori}
        cardDuzenle={cardDuzenle}
      />

      {/* {companyName} */}
    </>
  );
};

export default App;
