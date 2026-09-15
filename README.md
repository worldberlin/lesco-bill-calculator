# LESCO Bill Calculator Engine (Open Source)

An open-source JavaScript calculation engine for modeling, verifying, and forecasting residential electricity bills for **Lahore Electric Supply Company (LESCO)** consumers under active **NEPRA tariff slabs** in Pakistan.

For the interactive web tool and live bill checking, visit:
👉 **[LESCOBill Guide — Interactive Bill Calculator](https://onlinebillchecklesco.com/bill-calculator)**

---

## Features
- **Protected vs Unprotected Slab Modeling:** Accurately models the 200-unit threshold and progressive unit tiers.
- **Statutory Taxes & Duties:** Incorporates Electricity Duty (ED), General Sales Tax (GST), and Financing Cost (FC) surcharges.
- **Late Payment Surcharges (LPS):** Computes before/after due date payable totals.
- **Zero External Dependencies:** Lightweight pure JavaScript module.

---

## Installation & Quick Start

```bash
npm install lesco-bill-calculator
```

### Usage

```javascript
const { calculateLescoBill } = require('lesco-bill-calculator');

// Calculate bill for 250 units (Unprotected domestic connection)
const bill = calculateLescoBill(250, false);
console.log(bill);
```

### Sample Output:
```json
{
  "units": 250,
  "isProtected": false,
  "costOfElectricity": 6171,
  "electricityDuty": 92.57,
  "fcSurcharge": 807.5,
  "tvFee": 35,
  "gst": 1110.78,
  "totalPayableBeforeDueDate": 8217,
  "latePaymentSurcharge": 657,
  "totalPayableAfterDueDate": 8874
}
```

---

## Related Documentation & Reference Guides
- **Online Bill Check & Interactive Calculator:** [https://onlinebillchecklesco.com/bill-calculator](https://onlinebillchecklesco.com/bill-calculator)
- **Detailed LESCO Tariff Slabs Guide:** [https://onlinebillchecklesco.com/lesco-tariff-guide](https://onlinebillchecklesco.com/lesco-tariff-guide)
- **Consumer Complaint Resolution Guide:** [https://onlinebillchecklesco.com/lesco-complaint](https://onlinebillchecklesco.com/lesco-complaint)
- **LESCO vs WAPDA Explainer:** [https://onlinebillchecklesco.com/lesco-vs-wapda](https://onlinebillchecklesco.com/lesco-vs-wapda)

---

## Legal & Independence Notice
This project is an independent community resource provided by [LESCOBill Guide](https://onlinebillchecklesco.com). It is not affiliated with, endorsed by, or operated by Lahore Electric Supply Company (LESCO), Pakistan Electric Power Company (PEPCO), or the National Electric Power Regulatory Authority (NEPRA).

## License
MIT © [LESCOBill Guide](https://onlinebillchecklesco.com)
