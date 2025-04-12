interface Props {
    params: { slug: string };
  }
  
  const artistData: Record<string, { name: string; bio: string; image: string }> = {
    layla: {
      name: "Layla Al-Saif",
      bio: "Digital artist inspired by Saudi heritage.",
      image: "https://i.pravatar.cc/150?img=32",
    },
    fahad: {
      name: "Fahad Al-Mutairi",
      bio: "Creates abstract NFT collections.",
      image: "https://i.pravatar.cc/150?img=56",
    },
    noura: {
      name: "Noura Al-Qahtani",
      bio: "Mixes modern art with Arabic calligraphy.",
      image: "https://i.pravatar.cc/150?img=47",
    },
  };
  
  export default function CreatorProfile({ params }: Props) {
    const artist = artistData[params.slug];
  
    if (!artist) {
      return <div className="p-10 text-center text-red-600">Artist not found.</div>;
    }
  
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-gray-100">
        <img src={artist.image} alt={artist.name} className="w-32 h-32 rounded-full mb-6" />
        <h1 className="text-3xl font-bold text-purple-700 mb-2">{artist.name}</h1>
        <p className="text-gray-700 max-w-xl text-center">{artist.bio}</p>
      </main>
    );
  }
  