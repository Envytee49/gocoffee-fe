export async function fetchFromAPI(
  endpoint: string,
  {
    method = "GET",
    params = {},
    body = null,
    headers = {},
    ...options
  }: {
    method?: string;
    params?: Record<string, any>;
    body?: any;
    headers?: Record<string, string>;
  } = {}
) {
  // Construct query parameters if any
  const queryString = new URLSearchParams(params).toString();

  const url = `${process.env.NEXT_PUBLIC_BACKEND_API}/${endpoint}${queryString ? `?${queryString}` : ""
    }`;
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : null,
    ...options,
  });
  return res;
}
