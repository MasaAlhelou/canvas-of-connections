'use client';

const artists = [
  {
    name: "Layla Al-Saif",
    bio: "Digital artist inspired by Saudi heritage.",
    image: "https://i.pravatar.cc/150?img=32",
    slug: "layla",
  },
  {
    name: "Fahad Al-Mutairi",
    bio: "Creates abstract NFT collections.",
    image: "https://i.pravatar.cc/150?img=56",
    slug: "fahad",
  },
  {
    name: "Noura Al-Qahtani",
    bio: "Mixes modern art with Arabic calligraphy.",
    image: "https://i.pravatar.cc/150?img=47",
    slug: "noura",
  },
];

export default function HomePage() {
  return (
    <>
      <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-600">Canvas of Connections</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><a href="/" className="hover:text-purple-600">Home</a></li>
          <li><a href="/gallery" className="hover:text-purple-600">Gallery</a></li>
          <li><a href="/mint" className="hover:text-purple-600">Mint NFT</a></li>
          <li><a href="/about" className="hover:text-purple-600">About</a></li>
        </ul>
      </nav>

      <main className="flex flex-col items-center min-h-screen p-10 bg-gray-100">
        <h2 className="text-4xl font-bold mb-4 text-purple-700">🎨 Canvas of Connections</h2>
        <p className="text-lg text-gray-700 text-center max-w-xl mb-12">
          A digital art marketplace connecting Saudi artists and the world.
        </p>

        <section className="w-full max-w-6xl">
          <h2 className="text-2xl font-bold mb-6 text-purple-600">🌟 Featured Artists</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {artists.map((artist, index) => (
              <a
                key={index}
                href={`/creators/${artist.slug}`}
                className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition duration-300"
              >
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{artist.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{artist.bio}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
