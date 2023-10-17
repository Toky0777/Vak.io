import React, { useState } from 'react';

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClose = () => {
    setSelectedImage(null);
  }

  return (
    <div className="flex items-center justify-center">
    {!selectedImage && (
      <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-gray-300 hover:text-white">
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-sm">Sélectionner une image</span>
        <input type='file' accept="image/*" onChange={handleImageChange} className="hidden" />
      </label>
    )}
    {selectedImage && (
      <div>
        <button type="button" className="close" aria-label="Close" onClick={handleClose} title='Choisir une autre image'>
          <span aria-hidden="true">&times;</span>
        </button>
        <img
          src={selectedImage}
          alt="Votre texte"
          style={{ maxWidth: '200px' }}
        />
      </div>
    )}
  </div>
  );
}

export default ImageUploader;
