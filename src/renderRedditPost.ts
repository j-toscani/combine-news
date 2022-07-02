interface ReducedRedditPost {
  selftext: string;
  title: string;
  url: string;
  stickied: boolean;
}

function reducePostContent(post: any) {
  const { selftext, title, url, stickied } = post;
  return {
    selftext,
    stickied,
    title,
    url,
  };
}

function createRedditPostMarkup(post: ReducedRedditPost) {
  const { selftext, title, url, stickied } = post;
  return `<li class="${stickied ? "stickied" : ""}">
          <a href="${url}" target="_blank" rel="noopener noreferrer">
            <h3>
              ${title}
            </h3>
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
