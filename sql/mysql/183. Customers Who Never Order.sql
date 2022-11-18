/**
 * 183. Customers Who Never Order
 * @see https://leetcode.com/problems/customers-who-never-order/
 */
SELECT
  name AS Customers
FROM
  Customers
WHERE
  id NOT IN (
    SELECT
      DISTINCT(customerId)
    FROM
      Orders
  );

/*SELECT
 Customers.name AS Customers
 FROM
 Customers
 LEFT JOIN Orders ON Customers.id = Orders.customerId
 WHERE
 Orders.customerId IS NULL;*/