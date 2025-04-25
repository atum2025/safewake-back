export const API_URL = "http://localhost:4000/"; // Coloque o IP e PORTA CERTOS!

export async function registerUser({ name, email, password }) {
  const response = await fetch(`${API_URL}/users/register`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });
  return response.json();
}

export async function loginUser({ email, password }) {
  const response = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
}
