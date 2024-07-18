import React, { useContext } from "react";
import Card from "./Card";
import DataContext from "../context/DataContext";
import SearchBar from "./SearchBar";

const CardList = () => {

  const {state} = useContext(DataContext);
  
  return (
    <>
    <SearchBar/>
    <div className='card-list'>
        {
          state.kitaplar.map(kitap=>
              (kitap.kitapKategorisi === state.secilenKategori || state.secilenKategori === "Tüm Kitaplar") &&
              (!kitap.isDeleted &&
              <Card kitap={kitap} key={kitap.id}/>)
            )
        }
      </div>
    </>
  );
};

export default CardList;
