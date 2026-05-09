import { useEffect, useState } from 'react';
import { fetchLeads, createLead, updateLead, deleteLead } from './api';
import LeadForm from './components/LeadForm';
import LeadList from './components/LeadList';

function App() {
  const [leads, setLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [error, setError] = useState('');

  const loadLeads = async () => {
    try {
      const data = await fetchLeads();
      setLeads(data);
    } catch (err) {
      setError('Unable to load leads.');
    }
  };

  useEffect(() => {
    loadLeads();
  }, []);

  const handleCreate = async (lead) => {
    try {
      const newLead = await createLead(lead);
      setLeads((prev) => [newLead, ...prev]);
      setError('');
    } catch (err) {
      setError('Unable to add lead.');
    }
  };

  const handleUpdate = async (id, updatedLead) => {
    try {
      const savedLead = await updateLead(id, updatedLead);
      setLeads((prev) => prev.map((lead) => (lead.id === id ? savedLead : lead)));
      setSelectedLead(null);
      setError('');
    } catch (err) {
      setError('Unable to update lead.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteLead(id);
      setLeads((prev) => prev.filter((lead) => lead.id !== id));
      setError('');
    } catch (err) {
      setError('Unable to delete lead.');
    }
  };

  return (
    <div className="app-shell">
      <header>
        <h1>Client Lead Management System</h1>
        <p>Manage incoming website leads, update status, and track notes.</p>
      </header>

      {error && <div className="error-banner">{error}</div>}

      <main>
        <section className="form-panel">
          <LeadForm
            onSubmit={selectedLead ? (data) => handleUpdate(selectedLead.id, data) : handleCreate}
            initialData={selectedLead}
            onCancel={() => setSelectedLead(null)}
          />
        </section>

        <section className="list-panel">
          <LeadList
            leads={leads}
            onEdit={(lead) => setSelectedLead(lead)}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
