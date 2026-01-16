import { useEffect, useState } from "react";
import api from "../api";
import LeadTable from "../components/LeadTable";
import StatsCards from "../components/StatsCards";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [stats, setStats] = useState({});
  const [search, setSearch] = useState("");
  const [stage, setStage] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const limit = 20;

  const getLeads = async () => {
    const res = await api.get(
      `/leads?search=${search}&stage=${stage}&sort=${sort}&page=${page}&limit=${limit}`
    );
    setLeads(res.data.leads);
    setTotal(res.data.total);
  };

 const getStats = async () => {
  const res = await api.get(
    `/leads/stats?search=${search}&stage=${stage}`
  );
  setStats(res.data);
};


  useEffect(() => {
    getLeads();
    getStats();
  }, [search, stage, sort, page]);

  const totalPages = Math.ceil(total / limit);

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <StatsCards stats={stats} />

        {/* SEARCH + FILTERS */}
        <div className="top-controls">
          <input
            placeholder="Search leads..."
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />

          <select onChange={(e) => setStage(e.target.value)}>
            <option value="">All Stages</option>
            <option value="new">New</option>
            <option value="in-progress">In Progress</option>
            <option value="converted">Converted</option>
            <option value="lost">Lost</option>
          </select>

          <select onChange={(e) => setSort(e.target.value)}>
            <option value="">Sort</option>
            <option value="asc">Oldest</option>
            <option value="desc">Newest</option>
          </select>
        </div>

        <LeadTable leads={leads} />

        {/* PAGINATION */}
        <div style={{ marginTop: 15, display: "flex", gap: 10 }}>
          <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
            Prev
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
