# Associate Software Engineer Coding Assessment

## Inventory Add / Remove Stock

**Time limit:** 30 minutes  
**Stack:** React, Redux, Node.js, Express, MongoDB

The project already runs and displays seeded inventory products. The UI
has separate **Add stock** and **Remove stock** actions. Complete the
feature without redesigning the application.

## Part 1 — Backend

Complete the `PATCH /product/:sku/stock` route in:

`server/src/routers/product.js`

Request examples:

```json
{
  "change": 5,
  "reason": "Goods received"
}
```

```json
{
  "change": -4,
  "reason": "Customer order"
}
```

Requirements:

1. `change` must be a non-zero integer.
2. `reason` is required after trimming whitespace.
3. Positive values add stock.
4. Negative values remove stock.
5. Stock must never become negative.
6. Return `404` when the SKU does not exist.
7. Return `409` when stock is insufficient.
8. Save a stock-adjustment record containing change, reason and time.
9. Return the updated product.

## Part 2 — Frontend

Complete `adjustStock` in:

`client/src/state/actions/product.js`

The provided UI already converts Add stock / Remove stock into a signed
`change` value. You only need to complete the Redux/Axios action.

Requirements:

1. Send the request to the backend.
2. Set and clear the loading state.
3. Update the changed product in Redux after success.
4. Display the backend error message after failure.
5. Return `true` after success and `false` after failure so the form can
   reset itself.

## You do not need to implement

- Authentication
- CSS or visual redesign
- Deployment
- New database models
- Automated tests

## Final discussion

Be prepared to explain:

- How negative stock is prevented
- What could happen with concurrent requests
- Which automated tests you would add
- What you would improve before production deployment
