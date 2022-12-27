import { useCallback, useEffect, useState } from "react";

import { httpGetAllSongs} from "../requests/song";

function useSongs(kw, page, size) {
  const [songs, setSongs] = useState([]);

  const getSongs = useCallback(async () => {
    const fetchedSongs = await httpGetAllSongs(kw, page, size);
    setSongs(fetchedSongs);
  }, [kw, page, size]);

  useEffect(() => {
    getSongs();
  }, [getSongs]);

  return songs;
}


export {
  useSongs,
} 