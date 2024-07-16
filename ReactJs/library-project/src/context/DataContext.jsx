import axios from "axios";
import { createContext, useEffect, useState } from "react";

//context oluşturulması
const DataContext = createContext();

//oluşturulan context için bir sağlayıcı oluşturulur.
export const DataProvider = ({ children }) => {
  //yapıdaki tüm state,method buraya taşınacak

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
          } else {
            return { ...kitap };
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
    if (secilenKategori && secilenKategori !== "Tüm Kitaplar") {
      url += `?kitapKategorisi=${secilenKategori}`;
    }
    const response = await fetch(url);
    const kitaplar = await response.json();
    setKitaplar(kitaplar);
  };

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





//formdaki veriler
  const [kitapAdi, setKitapAdi] = useState("");
  const [kitapYazari, setKitapYazari] = useState("");
  const [kitapKategorisi, setKitapKategorisi] = useState("Kategori Seçiniz");
  const [kitapSayfaSayisi, setKitapSayfaSayisi] = useState("");
  const [kitapResmi, setKitapResmi] = useState("");
  const [kitapAciklamasi, setKitapAciklamasi] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    kitapEkle({
      id: (Number(kitaplar[kitaplar.length - 1].id) + 1).toString(),
      kitapAdi: kitapAdi,
      kitapYazari: kitapYazari,
      kitapKategorisi: kitapKategorisi,
      kitapSayfaSayisi: kitapSayfaSayisi,
      kitapResmi: kitapResmi,
      kitapAciklamasi: kitapAciklamasi,
    });
    console.log(kitaplar);
    setKitapAdi("");
    setKitapYazari("");
    setKitapKategorisi("Kategori Seçiniz");
    setKitapResmi("");
    setKitapSayfaSayisi("");
    setKitapAciklamasi("");

    

  };


  useEffect(()=>{

    if (secilenKitap) {
      setKitapAdi(secilenKitap.kitapAdi);
      setKitapYazari(secilenKitap.kitapYazari);
      setKitapKategorisi(secilenKitap.kitapKategorisi);
      setKitapResmi(secilenKitap.kitapResmi);
      setKitapSayfaSayisi(secilenKitap.kitapSayfaSayisi);
      setKitapAciklamasi(secilenKitap.kitapAciklamasi);
    }

  },[secilenKitap])



const [search,setSearch] = useState("");

  return <DataContext.Provider value={{
    companyName,kategoriler,setSecilenKategori, //navi componentinden gelenler

          secilenKitap, 
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
          handleSubmit, //Forms componentinden gelenler

          kitaplar,secilenKategori, //CardList componentinden gelenler

          kitapSil, cardDuzenle, //card componentinden gelenler

          search,setSearch

  }}>
        {children}
         </DataContext.Provider>
}

export default DataContext;
