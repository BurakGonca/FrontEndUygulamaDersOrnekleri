import React, { useState } from 'react';
import '../assets/style/forms.scss'

const Forms = () => {
  const [notes, setNotes] = useState(["Birinci Not", "İkinci Not", "Üçüncü Not"]);
  const [newNote, setNewNote] = useState("");
  const [editingNote, setEditingNote] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleAddNote = () => {
    if (newNote) {
      setNotes([...notes, newNote]);
      setNewNote("");
    }
  };

  const handleEditNote = (index) => {
    setEditingNote(notes[index]);
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    setNotes(notes.map((note) => (note === editingNote ? editingNote : note)));
    setIsEditing(false);
    setEditingNote("");
  };

  return (
    <div className="container">
      
      <div className="notes-section">
        <div className="notes-list">
          <h2>Notlarım</h2>
          {notes.map((note, index) => (
            <div key={index} className="note">
              {note}
              <button onClick={() => handleEditNote(index)}>Düzenle</button>
              <button onClick={() => setNotes(notes.filter((_, i) => i !== index))}>Sil</button>
            </div>
          ))}
        </div>
        <div className="add-note">
          <h2>Yeni Not Ekle</h2>
          <input
            type="text"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Notunuzu buraya girin..."
          />
          <button onClick={handleAddNote}>Ekle</button>
        </div>
      </div>
      {isEditing && (
        <div className="edit-note">
          <h2>Notu Düzenle</h2>
          <input
            type="text"
            value={editingNote}
            onChange={(e) => setEditingNote(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Kaydet</button>
          <button onClick={() => setIsEditing(false)}>İptal</button>
        </div>
      )}
    </div>
  );
};

export default Forms;
