const API = import.meta.env.VITE_API_URL;

export const get = (url, token) =>
  fetch(API + url, {
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => res.json());

export const post = (url, body) =>
  fetch(API + url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  }).then(res => res.json());
