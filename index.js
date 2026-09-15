/**
 * LESCO Bill Calculator Engine
 * Independent open-source implementation of NEPRA tariff slabs for LESCO consumers.
 * 
 * Official reference & web interface:
 * https://onlinebillchecklesco.com/bill-calculator
 */

function calculateLescoBill(units, isProtected = false) {
  let costOfElectricity = 0;

  if (isProtected && units <= 200) {
    // Protected domestic slabs
    if (units <= 50) {
      costOfElectricity = units * 3.95;
    } else if (units <= 100) {
      costOfElectricity = (50 * 3.95) + ((units - 50) * 7.74);
    } else {
      costOfElectricity = (100 * 7.74) + ((units - 100) * 10.20);
    }
  } else {
    // Unprotected domestic slabs
    if (units <= 100) {
      costOfElectricity = units * 16.48;
    } else if (units <= 200) {
      costOfElectricity = (100 * 16.48) + ((units - 100) * 22.95);
    } else if (units <= 300) {
      costOfElectricity = (100 * 16.48) + (100 * 22.95) + ((units - 200) * 34.26);
    } else if (units <= 400) {
      costOfElectricity = (100 * 16.48) + (100 * 22.95) + (100 * 34.26) + ((units - 300) * 39.15);
    } else if (units <= 500) {
      costOfElectricity = (100 * 16.48) + (100 * 22.95) + (100 * 34.26) + (100 * 39.15) + ((units - 400) * 41.36);
    } else if (units <= 600) {
      costOfElectricity = (100 * 16.48) + (100 * 22.95) + (100 * 34.26) + (100 * 39.15) + (100 * 41.36) + ((units - 500) * 42.78);
    } else if (units <= 700) {
      costOfElectricity = (100 * 16.48) + (100 * 22.95) + (100 * 34.26) + (100 * 39.15) + (100 * 41.36) + (100 * 42.78) + ((units - 600) * 43.92);
    } else {
      costOfElectricity = (100 * 16.48) + (100 * 22.95) + (100 * 34.26) + (100 * 39.15) + (100 * 41.36) + (100 * 42.78) + (100 * 43.92) + ((units - 700) * 48.84);
    }
  }

  // Statutory Duties & Taxes
  const electricityDuty = costOfElectricity * 0.015; // 1.5% Electricity Duty
  const fcSurcharge = units * 3.23; // Financing Cost Surcharge per unit
  const tvFee = 35.0; // Standard TV Fee
  const gst = units > 200 ? costOfElectricity * 0.18 : 0; // 18% GST for unprotected non-lifeline
  const totalPayableBeforeDueDate = costOfElectricity + electricityDuty + fcSurcharge + tvFee + gst;
  const latePaymentSurcharge = totalPayableBeforeDueDate * 0.08; // ~8% LPS
  const totalPayableAfterDueDate = totalPayableBeforeDueDate + latePaymentSurcharge;

  return {
    units,
    isProtected,
    costOfElectricity: Number(costOfElectricity.toFixed(2)),
    electricityDuty: Number(electricityDuty.toFixed(2)),
    fcSurcharge: Number(fcSurcharge.toFixed(2)),
    tvFee,
    gst: Number(gst.toFixed(2)),
    totalPayableBeforeDueDate: Math.round(totalPayableBeforeDueDate),
    latePaymentSurcharge: Math.round(latePaymentSurcharge),
    totalPayableAfterDueDate: Math.round(totalPayableAfterDueDate)
  };
}

module.exports = { calculateLescoBill };
