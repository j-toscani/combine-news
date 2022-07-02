export default async function fetchRedditPosts(limit = 20) {
  const response = await fetch(
    `https://www.reddit.com/r/StormGate.json?limit=${limit}`
  );

  if (!response.ok) throw new Error("Response was not 'ok'");

  return await response.json();
}
