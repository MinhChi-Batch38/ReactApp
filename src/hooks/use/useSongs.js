import { useCallback, useEffect, useState } from "react";

import { httpGetAllSongs } from "../requests/song";

function useSongs() {
  const [songs, setUsers] = useState([]);

  const getSongs = useCallback(async () => {
    const fetchedSongs = await httpGetAllSongs();
    setUsers(fetchedSongs);
  }, []);

  useEffect(() => {
    getSongs();
  }, [getSongs]);

  return songs;
}

export default useSongs;