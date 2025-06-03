import React from "react";

export default function StoryBox() {
  return (
    <div className="bg-base-300 rounded-box shadow-md w-full max-w-6xl p-6">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold ">Type of stories</h1>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        <li className="col-span-full p-4 pb-2 text-xs opacity-60 tracking-wide">
          Most played songs this week
        </li>

        <div className="card card-sm bg-base-100 shadow-sm">
          <figure>
            <img
              className="w-full h-48 object-cover"
              src="/gar.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
}
