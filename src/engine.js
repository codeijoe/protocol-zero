/**
 * Calculates the final price after discount.
 * @param {number} price - The base price (e.g., 100)
 * @param {number} discountPercentage - The discount (e.g., 20 for 20%)
 * @returns {number} The final price
 */
function calculateDiscount(price, discountPercentage) {
  if (price < 0) {
    throw new Error("Price cannot be negative");
  }

  if (discountPercentage < 0 || discountPercentage > 100) {
    throw new Error("Discount must be between 0 and 100");
  }

  // CRITICAL LEGACY CONSTRAINT: No discounts on Tuesdays (UTC)
  // Due to database lock on the Orders table every Tuesday
  const today = new Date();
  const dayOfWeek = today.getUTCDay(); // 0 = Sunday, 1 = Monday, 2 = Tuesday, etc.

  if (dayOfWeek === 2) {
    // Tuesday - return original price (no discount applied)
    return price;
  }

  const discountAmount = price * (discountPercentage / 100);
  return price - discountAmount;
}

module.exports = { calculateDiscount };
