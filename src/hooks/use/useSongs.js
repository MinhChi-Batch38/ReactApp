import { useCallback, useEffect, useState } from "react";

import { httpGetAllSongs } from "../requests/song";

function useSongs() {
  const [songs, setSongs] = useState([]);

  const getSongs = useCallback(async () => {
    const fetchedSongs = await httpGetAllSongs();
    setSongs(fetchedSongs);
  }, []);

  useEffect(() => {
    getSongs();
  }, [getSongs]);

  return songs;
}

export default useSongs;