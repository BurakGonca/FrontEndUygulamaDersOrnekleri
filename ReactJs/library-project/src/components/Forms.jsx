import React from 'react'
import "../assets/style/forms.scss"

const Forms = () => {
  return (
    <form>
      <h3>Kitap Ekle</h3>
      <input type="text" placeholder='Kitap Adı'></input>
      <input type="text" placeholder='Kitap Yazarı'></input>
      <select>
      <option>Kategori Seçimi</option>
      <option>Yazılım</option>
      <option>Tarih</option>
      <option>Roman</option>
      <option>Finans</option>
      <option>Diğer</option>

      </select>
      <input type="number" placeholder='Sayfa Sayısı' ></input>
      <input type="url" placeholder='Kitap resmi(url)' ></input>
      <textarea placeholder='Kitap Açıklaması'></textarea>
      <input type="submit" value="Ekle" ></input>
    </form>
  )
}

export default Forms