import React, { useEffect, useState } from 'react'

const App = () => {

  const [sayac,setsayac] = useState(0);
  const [deger,setDeger] = useState(true);



//1.Durum = sayfa yüklendiğinde 1defa çalışır. sayfada gerçekleşen her değişiklikte tekrar tekrar tetiklenir.(defaul durum yani effect kullanılmadan yapilan işlemler de böyle çalışırdı.)
// useEffect(()=>{
//   console.log("1.Durum useEffect çalıştı");
// })


//2.Durum = sayfa yüklendiğinde 1defa çalışır. ancak bağımlılık dizisine hiç bir eleman tanımlanmadığı için değişikliğe bağlı olarak tekrar tetiklenmez. Yani sayfa yüklendiğinde sadece 1defa çalışır bir daha çalışmaz!
// useEffect(()=>{
//   console.log("2.Durum useEffect çalıştı");
// },[])



//3.Durum = sayfa yüklendiğinde 1defa çalışır.Bağımlılık dizisinin içine verilen elemanlar her değiştiğinde tekrar tetiklenir.
// useEffect(()=>{
//   console.log("3.Durum useEffect çalıştı");
// },[sayac])



//3.1 Durum
// useEffect(()=>{
//   console.log("3.1.Durum useEffect çalıştı");
// },[sayac,deger])



//4.Durum = sayfa yüklendiğinde 1defa çalışır. CleanUp methodu olarak örn: debouncing yapılarında kullanılır.
useEffect(()=>{
  console.log("4.Durum useEffect çalıştı");
  return()=>{
    console.log("CleanUp methodu çalıştırıldı!");
  }
},[sayac])



  return (
   
    <>
      <button onClick={()=>setsayac(sayac+1)}>Arttır</button>
      <span>{sayac}</span>
      <button onClick={()=>setsayac(sayac-1)}>Azalt</button>
      <br /><br />
      <button onClick={()=>setDeger(!deger)}>{deger?"True":"False"}</button>
    </>
  )
}

export default App