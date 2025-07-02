import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStoryStore } from "../stores/story.store";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function EpisodeDetail() {
  const { episodeId } = useParams();
  const { getEpisodeById, episode } = useStoryStore();
  const navigate = useNavigate();
  const contentRef = useRef(null);

  useEffect(() => {
    getEpisodeById(episodeId);
  }, [episodeId]);


  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-base-300 p-1 md:p-10">
      {/* Back Button */}
      <button
        onClick={() => {
          if (window.history.length > 2) {
            navigate(-1);
          } else {
            navigate("/");
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
      >
        <ArrowLeft className="w-5 h-5" />
        Go Back
      </button>

      {/* Main Animated Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid md:grid-cols-2 gap-8 bg-base-200 p-1 lg:p-6 rounded-3xl shadow-xl overflow-hidden"
      >
        {/* Image */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full h-80 md:h-auto"
        >
          <img
            src="/gar.jpg"
            alt={episode.title}
            className="w-full h-full md:h-fit object-cover rounded-xl shadow-inner"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col"
        >
          <h1 ref={contentRef} className="text-xl lg:text-4xl font-bold  mb-4">
            {episode.title}
          </h1>
          <p className="text-lg leading-8 whitespace-pre-line tracking-wide text-right">
            چاندنی راتوں میں نظر آتا۔ یہ سایہ نہ انسان لگتا تھا، نہ جانور۔ ایک
            رات، لڑکا ہمت کر کے اُس سایے کے پیچھے گیا۔ سایہ اُسے گاؤں کے پرانے
            کنویں کی طرف لے گیا جہاں کئی سال پہلے ایک لڑکی کے لاپتہ ہونے کی
            کہانی مشہور تھی۔ جیسے ہی وہ کنویں کے پاس پہنچا، سایہ غائب ہو گیا…
            لیکن لڑکے کو نیچے سے کسی کے رونے کی آواز آئی۔ اب وہ ہر رات اسی آواز
            کا پیچھا کرتا ہے… لیکن گاؤں والے کہتے ہیں، وہ لڑکا اب خود سایہ بن
            کہانی مشہور تھی۔ جیسے ہی وہ کنویں کے پاس پہنچا، سایہ غائب ہو گیا…
            لیکن لڑکے کو نیچے سے کسی کے رونے کی آواز آئی۔ اب وہ ہر رات اسی آواز
            کا پیچھا کرتا ہے… لیکن گاؤں والے کہتے ہیں، وہ لڑکا اب خود سایہ بن
            کہانی مشہور تھی۔ جیسے ہی وہ کنویں کے پاس پہنچا، سایہ غائب ہو گیا…
            لیکن لڑکے کو نیچے سے کسی کے رونے کی آواز آئی۔ اب وہ ہر رات اسی آواز
            کا پیچھا کرتا ہے… لیکن گاؤں والے کہتے ہیں، وہ لڑکا اب خود سایہ بن
            کہانی مشہور تھی۔ جیسے ہی وہ کنویں کے پاس پہنچا، سایہ غائب ہو گیا…
            لیکن لڑکے کو نیچے سے کسی کے رونے کی آواز آئی۔ اب وہ ہر رات اسی آواز
            کا پیچھا کرتا ہے… لیکن گاؤں والے کہتے ہیں، وہ لڑکا اب خود سایہ بن
            کہانی مشہور تھی۔ جیسے ہی وہ کنویں کے پاس پہنچا، سایہ غائب ہو گیا…
            لیکن لڑکے کو نیچے سے کسی کے رونے کی آواز آئی۔ اب وہ ہر رات اسی آواز
            کا پیچھا کرتا ہے… لیکن گاؤں والے کہتے ہیں، وہ لڑکا اب خود سایہ بن
            کہانی مشہور تھی۔ جیسے ہی وہ کنویں کے پاس پہنچا، سایہ غائب ہو گیا…
            لیکن لڑکے کو نیچے سے کسی کے رونے کی آواز آئی۔ اب وہ ہر رات اسی آواز
            کا پیچھا کرتا ہے… لیکن گاؤں والے کہتے ہیں، وہ لڑکا اب خود سایہ بن
            کہانی مشہور تھی۔ جیسے ہی وہ کنویں کے پاس پہنچا، سایہ غائب ہو گیا…
            لیکن لڑکے کو نیچے سے کسی کے رونے کی آواز آئی۔ اب وہ ہر رات اسی آواز
            کا پیچھا کرتا ہے… لیکن گاؤں والے کہتے ہیں، وہ لڑکا اب خود سایہ بن
            کہانی مشہور تھی۔ جیسے ہی وہ کنویں کے پاس پہنچا، سایہ غائب ہو گیا…
            لیکن لڑکے کو نیچے سے کسی کے رونے کی آواز آئی۔ اب وہ ہر رات اسی آواز
            کا پیچھا کرتا ہے… لیکن گاؤں والے کہتے ہیں، وہ لڑکا اب خود سایہ بن
            کہانی مشہور تھی۔ جیسے ہی وہ کنویں کے پاس پہنچا، سایہ غائب ہو گیا…
            لیکن لڑکے کو نیچے سے کسی کے رونے کی آواز آئی۔ اب وہ ہر رات اسی آواز
            کا پیچھا کرتا ہے… لیکن گاؤں والے کہتے ہیں، وہ لڑکا اب خود سایہ بن
            کہانی مشہور تھی۔ جیسے ہی وہ کنویں کے پاس پہنچا، سایہ غائب ہو گیا…
            لیکن لڑکے کو نیچے سے کسی کے رونے کی آواز آئی۔ اب وہ ہر رات اسی آواز
            کا پیچھا کرتا ہے… لیکن گاؤں والے کہتے ہیں، وہ لڑکا اب خود سایہ بن
            چکا ہے
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
