import { Eye, EyeOff, LoaderPinwheel } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthStore } from "../stores/auth.store.js";

export default function SignUp() {
  const { UserSignUp, authUser, isSignuping } = useAuthStore();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    UserSignUp(formData);
  }
  if (authUser) {
    return <Navigate to="/" />;
  }
  console.log("Auth User:", authUser);
  return (
    <div className="w-full h-screen flex p-4 items-center">
      {/* signup */}
      <div className="w-full min-w-1/2 space-y-8  text-center mb-8">
        {/* form */}
        <form
          className="space-y-6 flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl font-bold">SignUp</h1>
          {/* fullName */}
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>
            <input
              type="text"
              required
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              placeholder="Username"
            />
          </label>
          <label className="input ">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              placeholder="haroon@gmail.com"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </label>
          <label className="input ">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type={false ? "text" : "password"}
              required
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button type="" className="text-gray-500">
              {true ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </label>
          <button
            className="btn bg-primary font-extrabol text-white min-w-[3rem] max-w-full w-[20rem] mx-auto"
            type="submit"
          >
            {isSignuping ? (
              <>
                <LoaderPinwheel className=" size-5 animate-spin " />
                Signing up...
              </>
            ) : (
              "Sign up"
            )}
          </button>
        </form>
        <div className="text-gray-500">
          Already have an account.{" "}
          <Link to="/login" className="link link-primary">
            Login
          </Link>
        </div>
        {/* text for our storyHub web app */}
        <div className="w-full min-w-1/2 h-full flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Our StoryHub</h1>
            <p className="text-gray-500 text-lg">
              Connect, share, and explore stories from around the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
