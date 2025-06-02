import React from "react";

export default function HomePage() {
  return (
    <div className="flex flex-col  justify-center items-center">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse md:w-6xl">
          <img
            src="/bot.jpg"
            draggable="false"
            className="lg:w-full sm:max-w-sm rounded-lg shadow-2xl select-none pointer-events-auto"
            alt="Bot"
          />
          <div>
            <h1 className="text-5xl font-bold">Welcome to Our StoryHub</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-base-300 rounded-box shadow-md w-full max-w-6xl p-6">
        <li className="col-span-full p-4 pb-2 text-xs opacity-60 tracking-wide">
          Most played songs this week
        </li>

        {/** Card 1 */}
        <li className="flex flex-col gap-2 bg-base-100 rounded-box p-4 shadow">
          {/* <div className="flex items-center gap-3">
            <img
              className="size-10 rounded-box"
              src="https://img.daisyui.com/images/profile/demo/1@94.webp"
              alt="Dio Lupa"
            />
            <div>
              <div>Dio Lupa</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                Remaining Reason
              </div>
            </div>
          </div> */}
          <p className="text-xs mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dicta voluptate quaerat, temporibus voluptas nobis voluptatibus ipsum. Maiores beatae aperiam non dolorum eum itaque, rem placeat, quaerat distinctio minus ullam odit, laboriosam alias aliquid? Accusantium, assumenda repellendus possimus dignissimos eveniet eos obcaecati alias voluptatem quae quisquam eaque nam soluta temporibus non eligendi autem reiciendis vitae.
          </p>
          {/* <div className="flex gap-2 mt-2">
            <button className="btn btn-square btn-ghost">
              <svg
                className="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 3L20 12 6 21 6 3z"></path>
                </g>
              </svg>
            </button>
            <button className="btn btn-square btn-ghost">
              <svg
                className="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </g>
              </svg>
            </button>
          </div> */}
        </li>
      </ul>
    </div>
  );
}
