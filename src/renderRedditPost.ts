interface ReducedRedditPost {
  selftext: string;
  title: string;
  url: string;
}

function reducePostContent(post: any) {
  const { selftext, title, url } = post;
  return {
    selftext,
    title,
    url,
  };
}

function createRedditPostMarkup(post: ReducedRedditPost) {
  const { selftext, title, url } = post;
  return `<li>
          <a href="${url}" target="_blank" rel="noopener noreferrer">
            <h2>
              ${title}
            </h2>
            <small>
            <p>
              ${
                selftext.length > 139
                  ? selftext.slice(0, 140) + "..."
                  : selftext
              }
            </p>
            </small>
          </a>
        </li>`;
}

export default function renderRedditPost(response: any): string {
  const postData = response.data.children.map(
    ({ data }: { data: any }) => data
  );
  return postData.map(reducePostContent).map(createRedditPostMarkup).join("");
}
