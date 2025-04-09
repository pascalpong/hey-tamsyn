import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    title: "My Birthday ! 28/03/2025",
    description: "I was seriously surprised seeing all of you there, I know friday was not the best day to have a little dinner after work but I really appreciated that!",
    type: "image",
    url: "/images/20250328_211752.jpg"
  },
  {
    id: 2,
    title: "Our little Phu Quoc trip ! 31/12/2024",
    description: "The last sunset of 2024 was amazing!",
    type: "video",
    url: "/images/20241231_173453.mp4"
  },
  {
    id: 3,
    title: "What a beautiful last day of 2024 ! 31/12/2024",
    description: "I hate that the water was so expensive but your dress was amazing !",
    type: "video",
    url: "/images/20241231_173745.mp4"
  },
  {
    id: 4,
    title: "This group pic is amazing ! 31/12/2024",
    description: "I love it !",
    type: "image",
    url: "/images/IMG-20241231-WA0038.jpg"
  },
  {
    id: 5,
    title: "You in the yellow dress ! 31/12/2024",
    description: ":)",
    type: "video",
    url: "/images/20241231_174821.mp4"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Hiiiiiiiiiii TAMSYN :)</h1>
        <p className="text-center mb-12 text-gray-800">I hope you like this little website version of our group!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-full">
                {item.type === "image" ? (
                  <Image
                    src={item.url}
                    alt={item.title}
                    layout="responsive"
                    width={366}
                    height={225}
                    className="object-cover"
                  />
                ) : (
                  <video controls className="w-full" muted autoPlay loop>
                    <source src={item.url} type="video/mp4" />
                  </video>
                )}
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="pt-10 text-center mb-12 text-gray-800">Im so happy to have you as my friend ! I have no idea yet where you are moving to but I know it will be a great experience :) and I am so jelly</p>
        <p className="text-center mb-12 text-gray-800">Developed by Pascal 09/04/2025</p>
      </div>
    </main>
  );
}
