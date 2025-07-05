import { X } from "lucide-react";

export default function FavoriteItem({
  img,
  title,
  desc,
  isLoading,
  onRemove,
}) {
  if (isLoading) {
    return (
      <div className="flex gap-4 items-start animate-pulse p-3 rounded-xl bg-gray-100">
        <div className="w-16 h-16 bg-gray-300 rounded-md" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4" />
          <div className="h-3 bg-gray-200 rounded w-1/2" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-4 items-start bg-base-200 p-3 rounded-xl shadow-sm relative group">
      <img
        src={img}
        alt={title}
        className="w-16 h-16 object-cover rounded-md"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-xs">{desc}</p>
      </div>

      {/* ❌ Remove Icon Button */}
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-100 transition"
      >
        <X size={16} />
      </button>
    </div>
  );
}
