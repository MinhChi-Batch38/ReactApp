import { useCallback, useEffect, useState } from "react";

import { httpGetAllSongs, httpCountSongs } from "../requests/song";

function useSongs(page, size) {
  const [songs, setSongs] = useState([]);

  const getSongs = useCallback(async () => {
    const fetchedSongs = await httpGetAllSongs(page, size);
    setSongs(fetchedSongs);
  }, [page, size]);

  useEffect(() => {
    getSongs();
  }, [getSongs]);

  return songs;
}


function useTotal() {
  const [total, setTotal] = useState();

  const getTotal = useCallback(async () => {
    const fetchedTotal = await httpCountSongs();
    setTotal(fetchedTotal);
  }, []);

  useEffect(() => {
    getTotal();
  }, [getTotal]);

  return total;
}

export {
  useSongs,
  useTotal,
} 