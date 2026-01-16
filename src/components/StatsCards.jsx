export default function StatsCards({ stats }) {
  const breakdownTotal = stats.breakdown
    ? stats.breakdown.reduce((sum, s) => sum + s.count, 0)
    : 0;

  return (
    <div className="stats-container">
      <div className="stat-card">
        <h3>Total Leads</h3>
        <p>{stats.total ?? 0}</p>
      </div>

      <div className="stat-card">
        <h3>Converted</h3>
        <p>{stats.converted ?? 0}</p>
      </div>

      <div className="stat-card">
        <h3>All Stages Total</h3>
        <p>{breakdownTotal}</p>
      </div>
    </div>
  );
}
