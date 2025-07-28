import * as SecureStore from 'expo-secure-store';

async function login(email, password) {
  const res = await fetch('https://your-api.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error('Login failed');

  const data = await res.json();
  await SecureStore.setItemAsync('authToken', data.token);

  return data.token;
}

async function fetchSecretData() {
  const token = await SecureStore.getItemAsync('authToken');
  if (!token) throw new Error('Not authenticated');

  const res = await fetch('https://your-api.com/data/secret', {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) throw new Error('Unauthorized');

  return await res.json();
}
