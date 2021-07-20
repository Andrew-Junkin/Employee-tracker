
USE employeeDatabase;

INSERT INTO department
    (id, deptName)
VALUES
    (1, "Microbiology");

INSERT INTO department
    (id, deptName)
VALUES
    (2, "Chemistry");
INSERT INTO department
    (id, deptName)
VALUES
    (3, "Physics");


INSERT INTO role
    (title, salary, departmentId)
VALUES("Microbiologist", 33296.53, 1);

INSERT INTO role
    (title, salary, departmentId)
VALUES("Chemist", 34596.02, 2);

INSERT INTO role
    (title, salary, departmentId)
VALUES("Physicist", 36521.47, 3);



INSERT INTO employee
    (firstName, lastName, roleId)
VALUES("Anthony", "Garza", 1);

INSERT INTO employee
    (firstName, lastName, roleId)
VALUES("Brianna", "McCray", 2);

INSERT INTO employee
    (firstName, lastName, roleId)
VALUES("Kimi", "Inglet", 3);



INSERT INTO employee
    (firstName, lastName, roleId, managerId)
VALUES("Donald", "Taylor", 1, 1);

INSERT INTO employee
    (firstName, lastName, roleId, managerId)
VALUES("Ashley", "Jones", 2, 2);

INSERT INTO employee
    (firstName, lastName, roleId, managerId)
VALUES("David", "Kirb", 3, 3);



SELECT *
FROM department;
SELECT *
FROM role;
SELECT *
FROM employee;