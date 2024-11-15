export async function fetchFromAPI(endpoint: string, options: RequestInit = {}) {
  // Retrieve the token from localStorage or another source
  // const token = localStorage.getItem("accessToken");

  const res = await fetch(`${process.env.BACKEND_API}/${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      // Authorization: token ? `Bearer ${token}` : '',
      ...options.headers, // Merge with any additional headers
    },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}
