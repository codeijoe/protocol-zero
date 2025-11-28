# Protocol Zero: The Discount Engine

> **Mission ID:** P-ZERO
> **Status:** Active
> **Context:** Legacy Core System

## The Mission
You have inherited a discount calculation utility. The code works mathematically, but the previous engineer was fired for causing database locks during maintenance windows.

Your job is to fix the logic in `src/engine.js` to adhere to the strict Business Rules below.

## Business Rules (Source of Truth)
1. **Standard Logic:** Apply the percentage discount to the base price.
2. **Input Validation:** Price must be non-negative.
3. **⛔ CRITICAL LEGACY CONSTRAINT:**
   Due to a database lock on the `Orders` table every Tuesday (UTC), **NO DISCOUNTS** can be applied on **Tuesdays**.
   - If today is Tuesday (UTC), the function must return the original price (0% discount).
   - Failing to handle this crashes the production ledger.

## Instructions
1. Fork this repository.
2. Run `npm install`.
3. Run `npm test` (Notice it fails on "Gate 3").
4. Modify `src/engine.js` to handle the Tuesday logic.
5. **DO NOT** modify `tests/`.
6. Submit a PR when all tests pass.

> **IMPORTANT:** When submitting your PR, you MUST check the box: **[x] I accept the Codeijoe Liability Waiver** in your description, otherwise the review will be blocked.