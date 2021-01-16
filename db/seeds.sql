
INSERT INTO projects (project_name, project_status, project_manager, percent_complete, createdAt, updatedAt) VALUES ('CSU', 'New', 'John Doe', 0, '2021-01-15 12:00:00', '2021-01-15 12:00:00');
INSERT INTO projects (project_name, project_status, project_manager, start_date, percent_complete, createdAt, updatedAt) VALUES ('CU', 'Active', 'Barney Rubble', '2021-01-01 12:00:00', 15, '2021-01-15 12:00:00', '2021-01-15 12:00:00');
INSERT INTO projects (project_name, project_status, project_manager, percent_complete, createdAt, updatedAt) VALUES ('DU', 'Hold', 'Barney Rubble', 0, '2021-01-15 12:00:00', '2021-01-15 12:00:00');
INSERT INTO projects (project_name, project_status, project_manager, percent_complete, start_date, createdAt, updatedAt) VALUES ('NCAR', 'Active', 'John Doe', 90, '2020-10-01 12:00:00', '2021-01-15 12:00:00', '2021-01-15 12:00:00');
INSERT INTO projects (project_name, project_status, project_manager, percent_complete, start_date, completion_date, createdAt, updatedAt) VALUES ('NOAA', 'Complete', 'John Doe', 100, '2020-07-01 12:00:00', '2020-11-05 12:00:00', '2021-01-15 12:00:00', '2021-01-15 12:00:00');

SELECT * FROM projects;