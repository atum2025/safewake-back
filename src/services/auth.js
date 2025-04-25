// src/services/auth.js
export async function registerUser(userData) {
  const response = await fetch('http://SEU_IP_LOCAL:4000/users/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  return response.json();
}
