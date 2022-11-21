/**
 * 196. Delete Duplicate Emails
 * @see https://leetcode.com/problems/delete-duplicate-emails/
 */
DELETE p1
FROM
    Person p1
    INNER JOIN Person p2 ON p1.email = p2.email
WHERE
    p1.email = p2.email
    AND p1.ID > p2.ID;