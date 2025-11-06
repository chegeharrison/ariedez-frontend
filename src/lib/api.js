export const API_BASE_URL = "http://127.0.0.1:8000/api";

export async function fetchServices() {
  const res = await fetch(`${API_BASE_URL}/services/`);
  if (!res.ok) throw new Error("Failed to fetch services");
  return res.json();
}
