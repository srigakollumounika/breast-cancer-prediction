function StatCard({ title, value, description, icon, trend }) {
  return (
    <div className="stat-card">
      
      <div className="stat-card-top">
        <div>
          <p className="stat-title">{title}</p>
          <h2 className="stat-value">{value}</h2>
        </div>

        <div className="stat-icon">
          {icon}
        </div>
      </div>

      <div className="stat-card-bottom">
        {trend && (
          <span className="stat-trend">
            {trend}
          </span>
        )}

        <span className="stat-description">
          {description}
        </span>
      </div>

    </div>
  );
}

export default StatCard;