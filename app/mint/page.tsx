'use client';
import React from 'react';

import { useState } from 'react';

export default function MintPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!title || !description || !image) {
      alert('Please fill in all fields!');
      return;
    }
  
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result as string;
  
      const newNFT = {
        title,
        description,
        image: base64Image,
      };
  
      const existing = localStorage.getItem('mintedNFTs');
      const allNFTs = existing ? JSON.parse(existing) : [];
  
      allNFTs.push(newNFT);
      localStorage.setItem('mintedNFTs', JSON.stringify(allNFTs));
  
      alert('✅ NFT minted and saved to gallery!');
      setTitle('');
      setDescription('');
      setImage(null);
      setPreview(null);
    };
  
    reader.readAsDataURL(image);
  };
  
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">🖼️ Mint Your NFT</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 w-full max-w-md space-y-4"
      >
        <div>
          <label className="block mb-1 font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your artwork"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Upload Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        {preview && (
          <div className="mt-4 text-center">
            <p className="mb-2 font-semibold text-gray-600">Preview:</p>
            <img
              src={preview}
              alt="NFT Preview"
              className="w-48 h-48 object-cover rounded-md mx-auto"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
        >
          Mint NFT
        </button>
      </form>
    </main>
  );
}
