import fs from "fs/promises";
import path from "path";

getTweets()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

async function getTweets() {
  const headers = await getReqeustHeaders();
  const id = getTwitterId(headers);
  return await fetchTweets(id);
}

async function fetchTweets(id) {
  const response = await fetch(`https://api.twitter.com/2/users/${id}/tweets`, {
    headers,
  });

  if (!response.ok) throw new Error("Response was not 'ok'");

  return await response.json();
}

async function getTwitterId(headers, username = "PlayStormgate") {
  const idResponse = await fetch(
    `https://api.twitter.com/2/users/by/username/${username}`,
    { headers }
  );
  const {
    data: { id },
  } = await idResponse.json();

  return id;
}

async function getReqeustHeaders() {
  const token = await fs.readFile(
    path.resolve(__dirname, "twitter_token.txt"),
    {
      encoding: "utf8",
    }
  );
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return headers;
}
