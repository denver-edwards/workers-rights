export default function InfoCard({ title, description }) {
  return (
    <div className="inline-block px-3">
      <div className="w-64 h-64 p-4 max-w-xs overflow-hidden rounded-lg shadow-xl bg-white hover:shadow-sm transition-shadow duration-300 ease-in-out">
        <h2 className="font-bold text-xl text-center mb-2 text-gray-800">
          {title}
        </h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}
