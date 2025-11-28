/**
 * Calculates the final price after discount.
 * @param {number} price - The base price (e.g., 100)
 * @param {number} discountPercentage - The discount (e.g., 20 for 20%)
 * @returns {number} The final price
 */
function calculateDiscount(price, discountPercentage) {
  // CHALLENGE: Something is missing here regarding the "Tuesday Rule".
  // Check the README.md carefully.

  if (price < 0) {
    throw new Error("Price cannot be negative");
  }

  if (discountPercentage < 0 || discountPercentage > 100) {
    throw new Error("Discount must be between 0 and 100");
  }

  const today = new Date();
  const dayOfWeek = today.getDay(); // Sunday - 0, Monday - 1, Tuesday - 2, etc.

  let actualDiscountPercentage = discountPercentage;

  if (dayOfWeek === 2) {
    // Tuesday
    actualDiscountPercentage = 0;
  }

  const discountAmount = price * (actualDiscountPercentage / 100);
  return price - discountAmount;
}

module.exports = { calculateDiscount };
