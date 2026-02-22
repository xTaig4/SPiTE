import { useEffect, useState } from "react";
import { playService } from "@/app/services/playerService";

export function usePlay() {
  const [position, setPosition] = useState(0);
  const acessToken = process.env.SPOTIFY_ACCESS_TOKEN!;
  const { getPlayBackState, isPlaying } = playService(acessToken);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setPosition((prev) => prev + 1000); // Increment position by 1 second
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    const syncInterval = setInterval(async () => {
      const state = await getPlayBackState(acessToken);
      setPosition(state.progress_ms);
    }, 5000); // Sync every 5 seconds

    return () => clearInterval(syncInterval);
  }, [acessToken]);

  return { position, isPlaying };
}
