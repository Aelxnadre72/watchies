import { useState, useEffect, useCallback } from "react";
import { getMovies } from "../api/movieAPI";
import { IfetchType, IMovieType } from "../types/types";

// custom callback hook to fetch more movies when scrolling
function useFetch(query:IfetchType, offset: number) {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState<IMovieType[]>([]);

  const sendQuery = useCallback(async (query:IfetchType) => {
      await setLoading(false);
      let multiplier = 2;
      if(offset===0) {
        multiplier = 1;
      }
      // movies would get fetched in slightly different order from time to time
      // therefore, we fetch 60 movies and gets the first 30 unique ones that has not been displayed earlier
      // the offset (set to 30) and the rest of the query are decided in movies.tsx
      setTimeout(() => {
        getMovies(offset, query.limit*multiplier, query.filterWord, query.searchWord, query.orderBy).then((value) => {
            if(offset===0){
                setList(value);
                if(value.length === 0) {
                    setLoading(true);
                }
            }
            // filter out the first 30 unique movies because of the movies getting fetched
            // in slightly different order when changing the offset
            // for instance, offset=X and limit=1 would give the same movie for two different X's,
            // even though we sort the whole array by year when fetching.
            else if(list.length>0 && offset!==0) {
                let movList:IMovieType[] = [];
                value.forEach((mov:IMovieType) => {
                    let dup = false;
                    for(let i = 0; i<list.length; i++) {
                        if(list[i].id === mov.id){
                            dup = true;
                            break;
                        }
                    }
                    if(!dup && movList.length < query.limit) {
                        movList.push(mov);
                    }
                });
                setList([...list, ...movList]);
                if(value.length === 0) {
                    setLoading(true);
                }
            }
          });
      }, 800);
  }, [offset]);

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery, offset]);

  return { loading, list };
}

export default useFetch;
