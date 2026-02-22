import { useState } from "react";
import { get } from "request";

export function playService(
  accessToken: string,
  deviceId?: string,
  uri?: string,
  context_uri?: string,
) {
  const [isPlaying, setIsPlaying] = useState(false);

  async function pausePlayback() {
    if (isPlaying) {
      const endpoint = deviceId
        ? `https://api.spotify.com/v1/me/player/pause?device_id=${deviceId}`
        : `https://api.spotify.com/v1/me/player/pause`;
      try {
        fetch(endpoint, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }).then((response) => {
          if (response.status === 204) {
            setIsPlaying(false);
          }
        });
      } catch (error) {
        return error;
      }
    }
  }

  async function resumePlayback() {
    const endpoint = deviceId
      ? `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`
      : `https://api.spotify.com/v1/me/player/play`; // use current device
    try {
      fetch(endpoint, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uris: [uri], // pass URI to play the specific track (optional)
          context_uri: context_uri, // pass context URI to play album/playlist (optional)
        }),
      }).then((response) => {
        if (response.status === 204) {
          setIsPlaying(true);
        }
      });
    } catch (error) {
      return error;
    }
  }

  async function getPlayBackState(accessToken: string) {
    try {
      const response = await fetch(`https://api.spotify.com/v1/me/player`, {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }

  return { isPlaying, pausePlayback, resumePlayback, getPlayBackState };
}
