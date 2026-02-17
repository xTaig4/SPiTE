import { useState, useEffect } from "react";
import { getSavedAudiobooks } from "@/app/services/getSavedAudiobooks";

export function useCoverArts(accessToken: string | null) {
  const [coverArts, setCoverArts] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!accessToken) return;

    setLoading(true);
    setError(null);

    getSavedAudiobooks(accessToken)
      .then((audiobooks) => {
        const covers = audiobooks
          .slice(0, 6)
          .map((item: any) => item.audiobook.images[0]?.url)
          .filter(Boolean);
        setCoverArts(covers);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [accessToken]);

  return { coverArts, loading, error };
}
