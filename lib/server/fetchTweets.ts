export default async function fetchTweets() {
  const headers = await getHeaders();

  const response = await fetch(
    `https://api.twitter.com/2/users/1514038364277673988/tweets?tweet.fields=public_metrics`,
    headers
  );

  if (!response.ok) throw new Error("Response was not 'ok'");

  return (await response.json()).data;
}

function getHeaders() {
  const token = process.env.TWITTER_API_TOKEN;

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}
