const API_BASE = 'http://localhost:8000/api';

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || 'API request failed');
  }

  return response.json();
}

export const fetchLeads = () => request('/leads/');
export const createLead = (lead) => request('/leads/', { method: 'POST', body: JSON.stringify(lead) });
export const updateLead = (id, lead) => request(`/leads/${id}/`, { method: 'PUT', body: JSON.stringify(lead) });
export const deleteLead = (id) => request(`/leads/${id}/`, { method: 'DELETE' });
