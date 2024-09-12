CREATE TABLE employee (
    employee_id VARCHAR(50) NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_number VARCHAR(20),
    hire_date DATE NOT NULL,
    job_title VARCHAR(100) NOT NULL,
    department_id VARCHAR(50),
    manager_id VARCHAR(50),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);

CREATE TABLE department (
	department_id VARCHAR(50) NOT NULL PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL,
    department_code VARCHAR(20) UNIQUE NOT NULL,
    level INT NOT NULL,
    parent_department_id VARCHAR(50),
    manager_id VARCHAR(50),
    description VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE leave_requests (
    request_id serial PRIMARY KEY,
    employee_id VARCHAR(50) NOT NULL,
    leave_type VARCHAR(50) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    total_days DECIMAL(5,2) NOT NULL,
    reason VARCHAR(200),
    status VARCHAR(50) NOT NULL,
    manager_id VARCHAR(50) NOT NULL,
    manager_comment VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE reimbursement_request (
    request_id serial PRIMARY KEY,
    employee_id VARCHAR(255) NOT NULL,
    request_date DATE NOT NULL,
    expense_date DATE NOT NULL,
    expense_type VARCHAR(255) NOT NULL,
    amount DECIMAL(16,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    description VARCHAR(255),
    receipt_file_path VARCHAR(255),
    status VARCHAR(255) NOT NULL,
    manager_id VARCHAR(255) NOT NULL,
    manager_comment VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE employee_roll_call (
    roll_call_id serial PRIMARY KEY,
    employee_id VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    time_in TIMESTAMP,
    status VARCHAR(255) NOT NULL,
    notes VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE company_news (
    news_id serial PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content VARCHAR(255) NOT NULL,
    author_id VARCHAR(255) NOT NULL,
    publication_date TIMESTAMP NOT NULL,
    category VARCHAR(255) NOT NULL,
    importance VARCHAR(255) NOT NULL,
    attachment_url VARCHAR(255),
    is_published BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE employee_task (
    task_id serial PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    assigned_by VARCHAR(50) NOT NULL,
    assigned_to VARCHAR(50) NOT NULL,
    due_date TIMESTAMP,
    priority VARCHAR(255) NOT NULL,
    status VARCHAR(255) DEFAULT 'Not Started',
    completion_date TIMESTAMP,
    comments VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE department
ADD CONSTRAINT fk_department_manager
FOREIGN KEY (manager_id) REFERENCES employee(employee_id);

ALTER TABLE employee
ADD CONSTRAINT fk_employee_department
FOREIGN KEY (department_id) REFERENCES department(department_id),
ADD CONSTRAINT fk_employee_manager
FOREIGN KEY (manager_id) REFERENCES employee(employee_id);

ALTER TABLE leave_request
ADD CONSTRAINT fk_leave_employee
FOREIGN KEY (employee_id) REFERENCES employee(employee_id),
ADD CONSTRAINT fk_leave_manager
FOREIGN KEY (manager_id) REFERENCES employee(employee_id);

ALTER TABLE reimbursement_request
ADD CONSTRAINT fk_reimbursement_employee
FOREIGN KEY (employee_id) REFERENCES employee(employee_id),
ADD CONSTRAINT fk_reimbursement_manager
FOREIGN KEY (manager_id) REFERENCES employee(employee_id);

ALTER TABLE employee_roll_call
ADD CONSTRAINT fk_rollcall_employee
FOREIGN KEY (employee_id) REFERENCES employee(employee_id);

ALTER TABLE company_news
ADD CONSTRAINT fk_news_author
FOREIGN KEY (author_id) REFERENCES employee(employee_id);

ALTER TABLE employee_task
ADD CONSTRAINT fk_task_assigned_by
FOREIGN KEY (assigned_by) REFERENCES employee(employee_id),
ADD CONSTRAINT fk_task_assigned_to
FOREIGN KEY (assigned_to) REFERENCES employee(employee_id);


SELECT e.employee_id, e.first_name, e.last_name, d.department_name
FROM employee e
JOIN department d ON e.department_id = d.department_id;

SELECT e.employee_id, e.first_name, e.last_name, 
       m.employee_id AS manager_id, m.first_name AS manager_first_name, m.last_name AS manager_last_name
FROM employee e
LEFT JOIN employee m ON e.manager_id = m.employee_id;

SELECT d.department_id, d.department_name, 
       e.employee_id AS manager_id, e.first_name AS manager_first_name, e.last_name AS manager_last_name
FROM department d
LEFT JOIN employee e ON d.manager_id = e.employee_id;

SELECT e.employee_id, e.first_name, e.last_name, 
       lr.request_id, lr.leave_type, lr.start_date, lr.end_date, lr.status
FROM employee e
JOIN leave_request lr ON e.employee_id = lr.employee_id;

SELECT e.employee_id, e.first_name, e.last_name, 
       rr.request_id, rr.expense_type, rr.amount, rr.status
FROM employee e
JOIN reimbursement_request rr ON e.employee_id = rr.employee_id;

SELECT e.employee_id, e.first_name, e.last_name, 
       rc.date, rc.status, rc.time_in
FROM employee e
JOIN employee_roll_call rc ON e.employee_id = rc.employee_id;

SELECT cn.news_id, cn.title, cn.publication_date, cn.category, 
       e.employee_id AS author_id, e.first_name AS author_first_name, e.last_name AS author_last_name
FROM company_news cn
JOIN employee e ON cn.author_id = e.employee_id;

SELECT t.task_id, t.title, t.due_date, t.status,
       e1.employee_id AS assignee_id, e1.first_name AS assignee_first_name, e1.last_name AS assignee_last_name,
       e2.employee_id AS assigner_id, e2.first_name AS assigner_first_name, e2.last_name AS assigner_last_name
FROM employee_task t
JOIN employee e1 ON t.assigned_to = e1.employee_id
JOIN employee e2 ON t.assigned_by = e2.employee_id;

SELECT e.employee_id, e.first_name, e.last_name, e.email, e.job_title,
       d.department_name,
       m.first_name AS manager_first_name, m.last_name AS manager_last_name,
       COUNT(DISTINCT lr.request_id) AS leave_request_count,
       COUNT(DISTINCT rr.request_id) AS reimbursement_request_count,
       COUNT(DISTINCT t.task_id) AS assigned_task_count
FROM employee e
LEFT JOIN department d ON e.department_id = d.department_id
LEFT JOIN employee m ON e.manager_id = m.employee_id
LEFT JOIN leave_request lr ON e.employee_id = lr.employee_id
LEFT JOIN reimbursement_request rr ON e.employee_id = rr.employee_id
LEFT JOIN employee_task t ON e.employee_id = t.assigned_to
GROUP BY e.employee_id, e.first_name, e.last_name, e.email, e.job_title,
       d.department_name, m.first_name, m.last_name;