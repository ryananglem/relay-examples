
export async function fetchGraphQL(text: string, variables: any) {

const response = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${process.env.REACT_APP_GITHUB_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}
