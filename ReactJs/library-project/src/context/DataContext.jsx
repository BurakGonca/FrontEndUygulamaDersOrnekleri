import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";

//context oluşturulması
const DataContext = createContext();

//oluşturulan context için bir sağlayıcı oluşturulur.
export const DataProvider = ({ children }) => {

  const [state,dispatch] = useReducer(reducer,initialState);


  const companyName = "Kütüphanem";

  const {secilenKitap,kitaplar,kitapAdi,kitapYazari,kitapKategorisi,kitapSayfaSayisi,kitapResmi,kitapAciklamasi,secilenKategori}=state

  //kitap düzenleyi de burada yapiyoruz
  const kitapEkle = async (yeni) => {
    let url = "http://localhost:3005/kitaplar";
    if (!secilenKitap) {
      //önyüze ekleme işlemi
      // setKitaplar((prev) => [...prev, yeni]);
      //case12
      dispatch({type:"kitapEkle",yeni})
      //arka yüze ekleme işlemi
      const response = await axios.post(url, yeni);
    }

    //secilen kitap varsa düzenle çalışacak
    else {
      //arka yüze ekleme işlemi
      url += `/${secilenKitap.id}`;
      const response2 = await axios.put(url, yeni);
      
      //case15
      // setSecilenKitap("");
      dispatch({type:"kitapDuzenle",yeni})
    }
  };

  const kitapSil = async (id) => {
    //ön yüzde silme işlemi
    dispatch({type:"kitapSil",id})
   

    //arka yüzde silme işlemi
    // const url = "http://localhost:3005/kitaplar/" + id; ya da ;
    const url = `http://localhost:3005/kitaplar/${id}`;

    // const response = await axios.delete(url); veriyi komple silmemek için patch yapacağız
    const response = await axios.patch(url, { isDeleted: true });

    //bu sekilde isDeleted: true eklediğimiz dosyaları göstermeyeceğiz ancak datalarımızın içinde hala olacak.
  };

  const cardDuzenle = (id) => {
    // setSecilenKitap(kitaplar.find((item) => item.id === id));
    //case14
    dispatch({type:"cardDuzenle",id})
    
  };

  //kategoriye gore kitapları getirmeyi de burada yapiyoruz
  const kitaplariGetir = async () => {
    let url = "http://localhost:3005/kitaplar";
    if (secilenKategori && secilenKategori !== "Tüm Kitaplar") {
      url += `?kitapKategorisi=${secilenKategori}`;
    }
    const response = await fetch(url);
    const kitaplar = await response.json();
    //setKitaplar(kitaplar);
    //case_1
    dispatch({type:"kitaplariGetir",payload:kitaplar})
  };

  const kategorileriGetir = async () => {
    const url = "http://localhost:3005/kategoriler";
    const response = await axios.get(url);
    const kategoriler = await response.data;
    //setKategoriler(kategoriler);
    //case_2
    dispatch({type:"kategorileriGetir",payload:kategoriler})
  };

  // kategorileriGetir();

  useEffect(() => {
    kategorileriGetir();
  }, []);

  useEffect(() => {
    kitaplariGetir();
  }, [secilenKategori]);





//formdaki veriler
  

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
    // setKitapAdi("");
    // setKitapYazari("");
    // setKitapKategorisi("Kategori Seçiniz");
    // setKitapResmi("");
    // setKitapSayfaSayisi("");
    // setKitapAciklamasi("");

    //case_3
    dispatch({type:"resetForm"})
    

  };


  //case14
  // useEffect(()=>{

  //   if (secilenKitap) {
  //     setKitapAdi(secilenKitap.kitapAdi);
  //     setKitapYazari(secilenKitap.kitapYazari);
  //     setKitapKategorisi(secilenKitap.kitapKategorisi);
  //     setKitapResmi(secilenKitap.kitapResmi);
  //     setKitapSayfaSayisi(secilenKitap.kitapSayfaSayisi);
  //     setKitapAciklamasi(secilenKitap.kitapAciklamasi);
  //   }

  // },[secilenKitap])





  return <DataContext.Provider value={{
    companyName,
    handleSubmit,
    kitapSil,
    cardDuzenle, 
    state, dispatch

         

  }}>
        {children}
         </DataContext.Provider>
}

export default DataContext;
