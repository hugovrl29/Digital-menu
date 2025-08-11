import { useEffect, useState } from "react";

export default function Screensaver({ youtubeLiveUrl }) {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let timer;

    const resetTimer = () => {
      clearTimeout(timer);
      setIsActive(true);
      timer = setTimeout(() => setIsActive(false), 2 * 60 * 1000); // 2 min
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("touchstart", resetTimer);

    resetTimer();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("touchstart", resetTimer);
    };
  }, []);

  if (!isActive) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          zIndex: 9999,
        }}
      >
        <iframe
            width="100%"
            height="100%"
            src={`${youtubeLiveUrl}&autoplay=1&muted=1&controls=0&disablekb=1&modestbranding=1&playsinline=1`}
            title="YouTube video player"
            style={{ border: "none" }}
            allow="autoplay" 
            allowfullscreen>
        </iframe>

      </div>
    );
  }

  return null;
}
