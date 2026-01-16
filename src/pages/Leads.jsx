import { useEffect, useState } from "react";
import api from "../api/axios";
import useAuth from "../hooks/useAuth";

const Leads = () => {
  const { token } = useAuth();
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const getLeads = async () => {
      const res = await api.get("/leads", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLeads(res.data);
    };
    getLeads();
  }, [token]);

  return (
    <>
      <h2>Leads</h2>
      {leads.map(l => <p key={l._id}>{l.name}</p>)}
    </>
  );
};

export default Leads;
