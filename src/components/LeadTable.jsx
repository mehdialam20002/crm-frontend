import { Link } from "react-router-dom";

export default function LeadTable({ leads }) {
  return (
    <table>
      <thead><tr><th>Name</th><th>Email</th><th>Stage</th></tr></thead>
      <tbody>
        {leads.map(l => (
          <tr key={l._id}>
            <td><Link to={`/lead/${l._id}`}>{l.name}</Link></td>
            <td>{l.email}</td>
            <td>{l.stage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
