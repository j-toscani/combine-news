import fs from "fs/promises";
import path from "path";

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
    `https://api.twitter.com/2/users/${id}/tweets?tweet.fields=public_metrics`,
    headers
  );

  if (!response.ok) throw new Error("Response was not 'ok'");

  return await response.json();
}

async function getHeaders() {
  try {
    const token = await fs.readFile(
      path.resolve(__dirname, "../twitter_token.txt"),
      {
        encoding: "utf-8",
      }
    );

    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
