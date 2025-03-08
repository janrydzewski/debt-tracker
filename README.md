# Debt Tracker

## Overview
Debt Tracker is a web/mobile application built with LynxJS for managing personal debts and financial obligations. Users can add debts, track repayments, and send reminders to debtors. The backend is powered by **Supabase**.

## Features
- **Add Debt** – Enter amount, debtor, and description.
- **Debt List** – View debts owed and debts to be received.
- **Debt Status** – Mark debts as "paid."
- **Reminders** – Send notifications to debtors.
- **Transaction History** – Log repayments, including partial ones.
- **Report Generation** – Export debts to a PDF file.
- **Authentication** – Login with email/Google via Supabase Auth.

## Tech Stack
- **Frontend:** LynxJS (JavaScript/React)
- **Backend:** Supabase
- **Database:** PostgreSQL (Supabase)
- **Authentication:** Supabase Auth

## Database Schema (Supabase)
### **Table: debts**
| Column      | Data Type      | Description                  |
|------------|---------------|------------------------------|
| id         | UUID          | Unique identifier           |
| user_id    | UUID          | User ID                      |
| debtor     | STRING        | Debtor's name                |
| amount     | FLOAT         | Debt amount                  |
| currency   | STRING        | Currency                     |
| status     | ENUM          | ('unpaid', 'paid')           |
| due_date   | TIMESTAMP     | Due date                     |
| created_at | TIMESTAMP     | Creation date                |

## Project Structure
```
/src
  /components
    - DebtList.tsx
    - DebtForm.tsx
    - DebtItem.tsx
  /pages
    - Home.tsx
    - AddDebt.tsx
    - Settings.tsx
  /services
    - supabaseClient.ts
  /utils
    - formatCurrency.ts
  App.tsx
```

## User Flow
1. User logs in.
2. Views debt list (owed & received debts).
3. Adds a new debt.
4. Marks a debt as "paid."
5. Sends a reminder to a debtor.
6. Generates a PDF report.

## Conclusion
Debt Tracker provides an efficient way to manage personal debts and track repayments. Using Supabase ensures seamless data synchronization. Future updates may include online payments and group debt tracking.

