/**
 * 176. Second Highest Salary
 * @see https://leetcode.com/problems/second-highest-salary/description/
 */
SELECT
    (
        SELECT
            salary
        FROM
            Employee
        GROUP BY
            salary
        ORDER BY
            salary desc
        LIMIT
            1, 1
    ) AS SecondHighestSalary;