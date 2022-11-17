/**
 * 182. Duplicate Emails
 * @see https://leetcode.com/problems/duplicate-emails/
 */
/**
 * SELECT
 *   e.email
 * FROM
 *   (
 *     SELECT
 *       email,
 *       COUNT(email) as count
 *     FROM
 *       Person
 *     GROUP BY
 *       email
 *     ) e
 * WHERE
 *   e.count > 1;
 */
SELECT
  email
FROM
  Person
GROUP BY
  email
HAVING
  COUNT(email) > 1;