import axios from "axios";
import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({children})=>{
    
    const [secilenRecipe,setSecilenRecipe] = useState("");
    const [recipes,setRecipes] = useState([]);

//recipe ekleme ve düzeltme islemi aynı yerdedir.
  const recipeEkle = async (yeni) => {
    let url = "http://localhost:3000/fakeRecipes";
    if(!secilenRecipe){
      setRecipes((prev) => [...prev, yeni]);
      const response = await axios.post(url,yeni);
    }
    else{
      url+=`/${secilenRecipe.id}`;
      const response2 = await axios.put(url,yeni);
      setRecipes(prev=>prev.map(recipe=>{
        if(recipe.id === secilenRecipe.id){
          return {...response2.data}
        }
        else{
          return {...recipe}
        }
      }))

      setSecilenRecipe("");
    }
    
  };



  const recipeSil = async (id) => {
    setRecipes((prev) =>
      prev.filter((statedenGelen) => statedenGelen.id !== id)
    );
    const url =`http://localhost:3000/fakeRecipes/${id}`
    const response = await axios.patch(url,{isDeleted: true});
  };


  const recipeDuzenle = (id) => {
    setSecilenRecipe(recipes.find(item=>item.id===id));
  }


  const recipeGetir = async ()=>{
   
      let url ="http://localhost:3000/fakeRecipes";
      const response = await fetch(url);
      const recipes = await response.json();
      setRecipes(recipes);
    
    
  }

  useEffect(()=>{
    recipeGetir()
  },[secilenRecipe])


//formdan gelen methodlar
const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    recipeEkle({
      id: (Number(recipes[recipes.length - 1].id) + 1).toString(),
      title: title,
      description: description,
      image: image,
    });

    setTitle("");
    setDescription("");
    setImage("");
  };

  useEffect(()=>{
    if(secilenRecipe){
      setTitle(secilenRecipe.title);
      setDescription(secilenRecipe.description);
      setImage(secilenRecipe.image);
    }
  },[secilenRecipe])

  //search
  const [search,setSearch] = useState("");


    return <DataContext.Provider value={{
        recipes, //recipeListten gelenler
        recipeSil, recipeDuzenle, //recipe'den gelenler
        secilenRecipe, //forms'dan gelenler
          title,
          description,
          image,
          setTitle,
          setDescription,
          setImage,
          handleSubmit,
          search,setSearch //searchden gelen
        
    }} >{children}</DataContext.Provider>
}

export default DataContext;