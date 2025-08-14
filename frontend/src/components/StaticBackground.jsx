import React, { useRef, useEffect } from "react";

const ISS_VIDEO_URL = "/iss-video.mp4";

function StaticBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.src = ISS_VIDEO_URL;
    }
  }, []);

  const handleCanPlay = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play().catch((error) => {
        console.error("Video autoplay was prevented by the browser:", error);
      });
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
        onCanPlay={handleCanPlay}
        onError={(e) =>
          console.error(
            "Video Error: Failed to load video. Check that the file is in the /public folder and the path is correct.",
            e
          )
        }
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}

export default StaticBackground;
