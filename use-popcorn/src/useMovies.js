import { useEffect, useState } from "react";

const KEY = "f84fc31d";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const fetchMovies = async () => {
      setIsLoading(true);
      setErr("");
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );
        if (!res.ok)
          throw new Error("something went wrong with fetching movies");
        const data = await res.json();
        if (data.Response === "False") throw new Error("movie not found");
        setMovies(data.Search);
        setErr("");
      } catch (err) {
        if (err.name !== "AbortError") setErr(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (query.length < 3) {
      setMovies([]);
      setErr("");
      return;
    }

    //handleCloseMovie();
    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, err };
}
