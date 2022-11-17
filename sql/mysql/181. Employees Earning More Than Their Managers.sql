/**
 * 181. Employees Earning More Than Their Managers
 * @see https://leetcode.com/problems/employees-earning-more-than-their-managers/
 */
SELECT
  e.name as Employee
FROM
  Employee e
  INNER JOIN Employee m ON e.managerId = m.id
WHERE
  e.salary > m.salary;