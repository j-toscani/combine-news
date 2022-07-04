import { defineEventHandler } from "h3";
import fetchRedditPosts from "@/lib/server/fetchRedditPosts";
import fetchTweets from "@/lib/server/fetchTweets";

export default defineEventHandler(async (_event) => {
  const settledPromises = await Promise.allSettled([
    fetchTweets(),
    fetchRedditPosts(20),
  ]);
  const results = settledPromises.map((result) =>
    result.status === "fulfilled" ? result.value : []
  );
  const [tweets, redditPosts] = results;

  return { tweets, redditPosts };
});
