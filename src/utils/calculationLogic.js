/**
 * Simple entitlement calculation logic based on user criteria.
 * Mock rules aligned with devolved Scottish benefit examples:
 * - Scottish Child Payment
 * - Carer Support Payment
 */
export function calculateEntitlements({ childrenCount, qualifyingBenefits, careHours }) {
  const results = [];
  const numChildren = parseInt(childrenCount, 10) || 0;
  const hours = parseInt(careHours, 10) || 0;

  // Scottish Child Payment check: £26.70 per child per week if on a qualifying benefit
  if (numChildren > 0 && qualifyingBenefits === "yes") {
    const weeklyTotal = (numChildren * 26.70).toFixed(2);
    results.push({
      id: "scp",
      title: "Scottish Child Payment",
      amount: `£${weeklyTotal} per week`,
      frequency: "Paid every 4 weeks",
      summary: `Estimated support for ${numChildren} eligible child(ren).`
    });
  }

  // Carer Support Payment check: 35+ hours/week providing care
  if (hours >= 35) {
    results.push({
      id: "csp",
      title: "Carer Support Payment",
      amount: "£81.90 per week",
      frequency: "Paid every 4 weeks",
      summary: "Qualifying based on 35+ weekly care hours provided."
    });
  }

  return results;
}