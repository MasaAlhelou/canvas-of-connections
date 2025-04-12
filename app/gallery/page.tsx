'use client';

import toast from 'react-hot-toast';

import { useEffect, useState } from 'react';

interface NFT {
  title: string;
  description: string;
  image: string;
}

export default function GalleryPage() {
  const [nfts, setNfts] = useState<NFT[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('mintedNFTs');
    if (stored) {
      setNfts(JSON.parse(stored));
    }
  }, []);

  const deleteNFT = (index: number) => {
    const confirmDelete = confirm('Are you sure you want to delete this NFT?');
    if (!confirmDelete) return;
  
    const updatedNFTs = [...nfts];
    updatedNFTs.splice(index, 1);
    setNfts(updatedNFTs);
    localStorage.setItem('mintedNFTs', JSON.stringify(updatedNFTs));
  
    toast.success('NFT deleted successfully!');
  };
  

  const clearGallery = () => {
    const confirmClear = confirm('Are you sure you want to clear all NFTs?');
    if (confirmClear) {
      localStorage.removeItem('mintedNFTs');
      setNfts([]);
    }
  };

  return (
    <main className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">🖼️ NFT Gallery</h1>

      {nfts.length > 0 && (
        <div className="text-center mb-6">
          <button
            onClick={clearGallery}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Clear All NFTs
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {nfts.map((nft, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-md relative">
            <button
              onClick={() => deleteNFT(index)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-xl"
              title="Delete NFT"
            >
              ❌
            </button>
            <img
              src={nft.image}
              alt={nft.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 text-center">{nft.title}</h2>
            <p className="text-sm text-gray-600 text-center mt-1">{nft.description}</p>
          </div>
        ))}
      </div>

      {nfts.length === 0 && (
        <p className="text-center text-gray-500 mt-20">No NFTs minted yet.</p>
      )}
    </main>
  );
}
