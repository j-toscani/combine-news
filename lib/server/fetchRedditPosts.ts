export default async function fetchRedditPosts(limit = 20) {
  const response = await fetch(
    `https://www.reddit.com/r/StormGate.json?limit=${limit}`
  );

  if (!response.ok) throw new Error("Response was not 'ok'");

  const posts = await response.json();
  return posts.data.children.map(({ data }) => reduceRedditPostProps(data));
}

function reduceRedditPostProps(post: any) {
  const { selftext, title, url, stickied } = post;
  return {
    selftext,
    stickied,
    title,
    url,
  };
}
