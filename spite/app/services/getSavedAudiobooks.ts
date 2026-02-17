export async function getSavedAudiobooks(accessToken: string) {
  const response = await fetch("https://api.spotify.com/v1/me/audiobooks", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();
  return data.items; // Each item has audiobook.images[]
}
