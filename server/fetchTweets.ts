import fs from "fs/promises";
import fetch from "node-fetch";

export default async function fetchTweets(name: string) {
  const headers = await getHeaders();
  const idResponse = await fetch(
    `https://api.twitter.com/2/users/by/username/${name}`,
    headers
  );
  const {
    data: { id },
  } = (await idResponse.json()) as any;

  const response = await fetch(
    `https://api.twitter.com/2/users/${id}/tweets`,
    headers
  );

  if (!response.ok) throw new Error("Response was not 'ok'");

  return await response.json();
}

async function getHeaders() {
  const token = fs.readFile("twitter_token.txt", { encoding: "utf8" });
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}
