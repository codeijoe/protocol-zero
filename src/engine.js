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

  // Tuesday Rule: Discount MUST be 0 on Tuesdays due to legacy DB lock
  const today = new Date();
  const isTuesday = today.getDay() === 2; // 0 = Sunday, 2 = Tuesday

  if (isTuesday) {
    return price; // No discount on Tuesdays
  }

  const discountAmount = price * (discountPercentage / 100);
  return price - discountAmount;
}

module.exports = { calculateDiscount };
