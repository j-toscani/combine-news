export default async function fetchRedditPosts() {
  const response = await fetch("https://www.reddit.com/r/StormGate.json");

  if (!response.ok) throw new Error("Response was not 'ok'");

  return await response.json();
}
