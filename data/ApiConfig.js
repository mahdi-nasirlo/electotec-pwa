export const ApiPath = "http://localhost:8000/graphql";

export default function ApiHeader(
  query,
  method = "POST",
  headers = { "Content-Type": "application/json" }
) {
  return {
    method: method,
    headers: headers,
    body: JSON.stringify(query),
  };
}
