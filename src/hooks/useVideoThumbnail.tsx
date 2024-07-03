import { useRef, useState, useEffect, MutableRefObject } from "react";

interface UseVideoThumbnailResult {
  videoRef: MutableRefObject<HTMLVideoElement | null>;
  canvasRef: MutableRefObject<HTMLCanvasElement | null>;
  thumbnail: string | null;
}

const useVideoThumbnail = (videoSrc: string): UseVideoThumbnailResult => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  useEffect(() => {
    const captureThumbnail = () => {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      if (!video || !canvas) {
        return;
      }

      const context = canvas.getContext("2d");
      if (!context) {
        return;
      }

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const dataUrl = canvas.toDataURL("image/png");
      setThumbnail(dataUrl);
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadeddata", captureThumbnail);
    }

    return () => {
      if (video) {
        video.removeEventListener("loadeddata", captureThumbnail);
      }
    };
  }, [videoSrc]);

  return { videoRef, canvasRef, thumbnail };
};

export default useVideoThumbnail;
