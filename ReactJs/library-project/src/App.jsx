import React, { useState } from 'react'
import Navi from './components/Navi'
import Forms from './components/Forms'
import CardList from './components/CardList'

const App = () => {

  const companyName = "Kütüphanem";
  const data = [
    {
      id: "1",
      kitapAdi: "Körlük",
      kitapYazari: "Jose Saramago",
      kitapKategorisi: "Roman",
      kitapSayfaSayisi: 320,
      kitapResmi : "https://img.kitapyurdu.com/v1/getImage/fn:11911357/wh:true/wi:220",
      kitapAciklamasi: "Usta yazarın belki de en etkileyici yapıtı olan, sinemaya da uyarlanmış Körlük, toplumsal yaşamın nasıl bir vahşete dönüşebileceğini müthiş bir incelikle gözler önüne sererken, insana dair son umut kırıntısını da bir kadının tek başına örgütlediği dayanışma ve direniş örneğiyle sergileyen unutulmaz eserler arasında yerini almıştır."
    },
    {
      id:"2",
      kitapAdi:"Yabancı",
      kitapYazari:"Stephan King",
      kitapKategorisi:"Roman",
      kitapSayfaSayisi:"544",
      kitapResmi:"https://img.kitapyurdu.com/v1/getImage/fn:8682866/wh:true/wi:220",
      kitapAciklamasi:"Şehir parkında, vahşice katledilen on bir yaşındaki bir erkek çocuğunun cesedi bulunur. Görgü tanıklarının ifadelerine göre katil, İngilizce öğretmeni, şehrin Küçükler Beyzbol Ligi’nin koçu ve herkesin çok sevdiği Terry Maitland’dır."
    },
    {
      id:"3",
      kitapAdi: "Gecenin Anlamı",
      kitapYazari: "Michael Cox",
      kitapKategorisi: "Roman",
      kitapSayfaSayisi: 468,
      kitapResmi: "https://img.kitapyurdu.com/v1/getImage/fn:20333/wh:true/wi:220",
      kitapAciklamasi:"1854 yılı, soğuk bir Ekim gecesi. Karanlık bir geçitte masum bir adam bıçaklanarak öldürülür. Edward Glyver'ın olağanüstü öyküsü işte böyle başlıyor. Victoria dönemi Londrası'nın puslu sokaklarında, umumhanelerinde ve afyon batakhanelerinde geçen ihanet, vefasızlık, ölüm, vehim, saplantı ve hırs öyküsü…"
    },
    {
      id: "4",
      kitapAdi: "Faust",
      kitapYazari:"Johann Wolfgang von Goethe",
      kitapKategorisi:"Roman",
      kitapSayfaSayisi:575,
      kitapResmi:"https://cdn.bkmkitap.com/faust-tam-metin-13380814-12-O.jpg",
      kitapAciklamasi:"Faust kitabının genel anlamda konusu, insanı temsil eden Faust ile şeytanın savaşı anlatılmaktadır. Faust, hedefleri olan, hayatını bilime adayan bir karakterdir. Yaşamının büyük bir çoğunluğunu bilime harcarken oldukça şaşırtıcı bir sonuçla bir bunalıma sürüklenmiştir. Bu sırada, bir bilim insanı olarak gerekli araştırma ve öğrenme eylemlerinden  uzaklaştığını anlar. İkilemler arasında boğuşurken, şeytanla bir pazarlığa girmiştir."
    },
    {
      id: "5",
      kitapAdi: "Türklerin Tarihi",
      kitapYazari: "İlber Ortaylı ",
      kitapKategorisi: "Tarih",
      kitapSayfaSayisi: 272,
      kitapResmi : "https://img.kitapyurdu.com/v1/getImage/fn:11599115/wh:true/wi:220",
      kitapAciklamasi: "“Koca bir kavmin binlerce kilometreyi üç asır içinde geçtiğini düşünün… Bu, dünyayı değiştirmez de ne yapar? İşte Türkler dünyayı böyle değiştirdi. Bu sebeple, bizim hayalî bir tarih ve kahramanlar üretmeye değil, yalnızca doğruyu öğrenmeye ihtiyacımız var…”"
    }
  ]

  const [kitaplar,setKitaplar] = useState(data);


  const kitapEkle = (yeni) => {
    //setKitaplar([...kitaplar,yeni])
    setKitaplar(prev=>[...prev,yeni]);
  }

  const kitapSil = (id) => {
    //setKitaplar(kitaplar.filter(statedenGelen=>statedenGelen.id !== id))
    setKitaplar(prev=>prev.filter(statedenGelen=>statedenGelen.id !== id))
  }

  return (
    <>
    
    <Navi navHead = {companyName} />
    <Forms kitapEkle={kitapEkle} kitaplar={kitaplar} />
    <CardList kitaplar={kitaplar} kitapSil={kitapSil}/>

    {/* {companyName} */}

    </>

  )
}

export default App