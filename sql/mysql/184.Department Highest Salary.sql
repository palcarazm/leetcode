/**
 * 184. Department Highest Salary
 * @see https://leetcode.com/problems/department-highest-salary/
 */
SELECT
  Department.name as Department,
  Employee.name as Employee,
  Salary as Salary
FROM
  Employee
  INNER JOIN Department on Employee.departmentId = Department.id
WHERE
  (departmentId, salary) in (
    SELECT
      departmentId,
      max(salary)
    from
      employee
    GROUP BY
      DepartmentId
  );