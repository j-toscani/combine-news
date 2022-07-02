const headers = {
  Authorization: `Bearer <token>`,
};

async function fetchTweets(name) {
  const idResponse = await fetch(
    `https://api.twitter.com/2/users/by/username/${name}`,
    { headers }
  );
  const {
    data: { id },
  } = await idResponse.json();

  const response = await fetch(`https://api.twitter.com/2/users/${id}/tweets`, {
    headers,
  });

  if (!response.ok) throw new Error("Response was not 'ok'");

  return await response.json();
}

fetchTweets("PlayStormgate")
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
