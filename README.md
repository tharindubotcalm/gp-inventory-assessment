# GP Inventory Assessment

A small MERN inventory project modeled after the Gunda Power ERP's
product-management conventions:

- React UI
- Redux + Thunk actions
- Axios API calls
- Node.js and Express routes
- MongoDB with Mongoose
- SKU-based product operations
- Stock and audit-related business rules

This is a synthetic assessment project. It contains no production data,
credentials, or proprietary Gunda Power source code.

## Candidate task

See [ASSESSMENT.md](./ASSESSMENT.md). The UI has separate Add stock /
Remove stock actions. The backend stock route and Redux action
intentionally contain `TODO` sections.

### Requirements

- Node.js 22
- npm
- local MongoDB instance

### Setup

```bash
npm run install:all
npm run seed
npm run dev
```

Open `http://localhost:5173`.

The API runs at `http://localhost:5050`.
