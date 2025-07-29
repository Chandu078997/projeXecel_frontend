/*
export const registerUser = async (email, password, name) => {
  const res = await fetch("http://localhost:8085/projectwork/api/users/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  if (!res.ok) throw new Error(await res.text());
  return res.text();
};

export const loginUser = async (email, password) => {
  const res = await fetch("http://localhost:8085/projectwork/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error(await res.text());
  return res.text();
};

*/// Set your backend base URL (keep /projectwork since your backend uses it)

// Deployed backend URL
const BASE_URL = "https://projexcel-production.up.railway.app/projectwork";

// Register new user
export const registerUser = async (form) => {
  try {
    const res = await fetch(`${BASE_URL}/api/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    console.log("Register response:", res.status);

    if (!res.ok) throw new Error(await res.text());
    return res.text();
  } catch (err) {
    console.error("Register API error:", err);
    throw err;
  }
};

export const registerUserWithForm = async (form) => {
  return registerUser(form);
};

// FIXED loginUser (use backticks)
export async function loginUser(email, password) {
  const res = await fetch(`${BASE_URL}/api/users/login`, {  // <-- FIXED
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || "Login failed");
  }

  return await res.json();
}
