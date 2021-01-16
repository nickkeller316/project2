module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    project_name: DataTypes.STRING,
    project_status: DataTypes.ENUM('New', 'Active', 'Hold', 'Complete'),
    project_manager: DataTypes.STRING,
    start_date: DataTypes.DATE,
    due_date: DataTypes.DATE,
    percent_complete: DataTypes.INTEGER,
    completion_date: DataTypes.DATE,
  });
  return Project;
};