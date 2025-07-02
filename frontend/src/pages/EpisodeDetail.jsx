import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStoryStore } from "../stores/story.store";

export default function EpisodeDetail() {
  const { episodeId } = useParams();
  const { getEpisodeById, episode } = useStoryStore();
  const navigate = useNavigate();

  useEffect(() => {
    getEpisodeById(episodeId);
  }, [episodeId]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <button
        onClick={() => {
          if (window.history.length > 2) {
            navigate(-1); 
          } else {
            navigate("/");
          }
        }}
        className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        ← Go Back
      </button>
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="/gar.jpg"
            alt={episode.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Description Section */}
        <div className="w-full lg:w-1/2 p-6 overflow-y-auto max-h-[80vh]">
          <h1 className="text-3xl font-bold mb-4">{episode.title}</h1>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            چاندنی راتوں میں نظر آتا۔ یہ سایہ نہ انسان لگتا تھا، نہ جانور۔ ایک
            رات، لڑکا ہمت کر کے اُس سایے کے پیچھے گیا۔ سایہ اُسے گاؤں کے پرانے
            کنویں کی طرف لے گیا جہاں کئی سال پہلے ایک لڑکی کے لاپتہ ہونے کی
            کہانی مشہور تھی۔ جیسے ہی وہ کنویں کے پاس پہنچا، سایہ غائب ہو گیا…
            لیکن لڑکے کو نیچے سے کسی کے رونے کی آواز آئی۔ اب وہ ہر رات اسی آواز
            کا پیچھا کرتا ہے… لیکن گاؤں والے کہتے ہیں، وہ لڑکا اب خود سایہ بن
            چکا ہے
          </p>
        </div>
      </div>
    </div>
  );
}
