const headers = {
  Authorization: `Bearer <token>`,
};

export default async function fetchTweets(name: string) {
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
