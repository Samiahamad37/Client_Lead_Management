import { useEffect, useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  source: '',
  status: 'new',
  notes: '',
};

function LeadForm({ onSubmit, initialData, onCancel }) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm(initialForm);
    }
  }, [initialData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="lead-form">
      <h2>{initialData ? 'Edit Lead' : 'New Lead'}</h2>
      <form onSubmit={submit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          Source
          {/* <input name="source" value={form.source} onChange={handleChange} /> */}
             {/* <select name="source" value={form.source} onChange={handleChange}> */}
             <select>
              <option value="">Select Source</option>
             <option>Website</option>
             <option>Facebook</option>
             <option>Instagram</option>
             <option>Referral</option>
             <option>WhatsApp</option>
             <option>LinkedIn</option>
              </select>
        </label>
        <label>
          Status
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="converted">Converted</option>
          </select>
        </label>
        <label>
          Notes
          <textarea name="notes" value={form.notes} onChange={handleChange} />
        </label>
        <div className="actions">
          <button type="submit">{initialData ? 'Save' : 'Add Lead'}</button>
          {initialData && (
            <button type="button" className="secondary" onClick={onCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default LeadForm;
