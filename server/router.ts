import { Router } from "express";
import fetchRedditPosts from "./fetchRedditPosts";
import fetchTweets from "./fetchTweets";

const router = Router();

router.get("/api/news", async (_req, res) => {
  try {
    const settledPromises = await Promise.allSettled([fetchTweets("PlayStormgate"), fetchRedditPosts(20)]);
    const results = settledPromises.map(result => result.status === 'fulfilled' ? result.value : []);
    const [ tweets, redditPosts ] = results;

    res.status(200).send({tweets, redditPosts})
  } catch (error) {
    res.sendStatus(404);
  }
});

export default router;
