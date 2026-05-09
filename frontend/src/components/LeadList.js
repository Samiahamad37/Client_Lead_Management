function LeadList({ leads, onEdit, onDelete }) {
  return (
    <div className="lead-list">
      <h2>Leads</h2>
      {leads.length === 0 ? (
        <p>No leads yet.</p>
      ) : (
        <ul>
          {leads.map((lead) => (
            <li key={lead.id} className="lead-card">
              <div className="lead-header">
                <strong>{lead.name}</strong>
                <span className={`status status-${lead.status}`}>{lead.status}</span>
              </div>
              <p>{lead.email}</p>
              {lead.source && <p><strong>Source:</strong> {lead.source}</p>}
              {lead.notes && <p><strong>Notes:</strong> {lead.notes}</p>}
              <div className="lead-actions">
                <button onClick={() => onEdit(lead)}>Edit</button>
                <button className="danger" onClick={() => onDelete(lead.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LeadList;
