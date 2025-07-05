import { LogOutIcon } from "lucide-react";
import { useAuthStore } from "../stores/auth.store.js";
import FavoriteItem from "./FavoriteItem.jsx";
import LogoutConfirmDialog from "./LogoutConfirmDialog.jsx";
import { useEffect, useState } from "react";

export default function Profile() {
  const { authUser, LogOut } = useAuthStore();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFavorites([
        {
          img: "/gar.jpg",
          title: "Store 1",
          desc: "Best gadgets here",
        },
        {
          img: "/bot.jpg",
          title: "Store 2",
          desc: "Top rated books",
        },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box max-w-2xl">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        <div className="mb-4">
          <h2 className="font-bold text-lg">
            <span className="text-xl">{authUser.username}</span>{" "}
            <span className="text-sm text-gray-600">
              your favorite stories are here
            </span>
          </h2>
        </div>

        <div className="space-y-3">
          {(loading ? Array(4).fill({}) : favorites).map((item, i) => (
            <FavoriteItem
              key={i}
              img={item.img}
              title={item.title}
              desc={item.desc}
              isLoading={loading}
            />
          ))}
        </div>

        {/* 🔻 Moved logout button to bottom */}
        <div className="mt-6 text-right">
          <button
            onClick={() => setShowConfirm(true)}
            className="flex items-center space-x-2 text-red-500 btn-ghost btn rounded-2xl"
          >
            <LogOutIcon size={20} />
            <span className="hidden sm:block">Logout</span>
          </button>
        </div>

        {showConfirm && (
          <LogoutConfirmDialog
            onConfirm={() => {
              setShowConfirm(false);
              LogOut();
            }}
            onCancel={() => setShowConfirm(false)}
          />
        )}
      </div>
    </dialog>
  );
}
