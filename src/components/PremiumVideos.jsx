// PremiumVideos.jsx
export default function PremiumVideos() {
  return (
    <section className="bg-gray-50 py-16">
      <h3 className="text-3xl font-bold text-center mb-10">Premium Videos</h3>
      <div className="max-w-7xl   w-3/4 mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white shadow-lg rounded-lg overflow-hidden" >
            <img
              src={`https://images.unsplash.com/photo-1592621385612-4d7129426394?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8fDA%3D"${i}`}
              alt={`Premium ${i}`}
              className="w-full"
            />
            <div className="p-4">
              <h4 className="font-semibold">Premium Video {i}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
