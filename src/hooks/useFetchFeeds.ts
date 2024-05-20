import { Feed } from "@/src/types/feed";
import logger from "@/src/utils/logger";
import { useEffect, useState } from "react";

export const useFetchFeeds = () => {
  const [feeds, setFeeds] = useState<Feed[]>([]);

  useEffect(() => {
    console.log('Fetching feeds from server');
    try {
      fetch('/feeds')
        .then((response) => response.json())
        .then((feeds: Feed[]) => setFeeds(feeds))
        .catch((e) => {
          throw e;
        });
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Unknown error';
      console.log(message);
      logger.error('Unable to fetch feeds from server', { errorMessage: message })
    }
  }, []);

  return feeds;
}