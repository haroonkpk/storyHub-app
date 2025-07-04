export default function RainVideoBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-30"
      >
        <source src="/rain-bg.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
