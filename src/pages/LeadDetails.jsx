import { useEffect, useState } from "react";
import api from "../api";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function LeadDetails() {
  const { id } = useParams();
  const [lead, setLead] = useState(null);

  useEffect(() => {
    api.get(`/leads/${id}`).then(res => setLead(res.data));
  }, []);

  if (!lead) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div style={{ padding: 20 }}>
        <h2>{lead.name}</h2>
        <p>Email: {lead.email}</p>
        <p>Phone: {lead.phone}</p>
        <p>Stage: {lead.stage}</p>
      </div>
    </>
  );
}
