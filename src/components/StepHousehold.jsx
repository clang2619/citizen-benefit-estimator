import React from 'react';

export default function StepHousehold({ formData, updateFormData, onNext }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.qualifyingBenefits) {
      alert("Please select whether you receive any qualifying benefits.");
      return;
    }
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="step-card">
      <h2>Step 1: Household & Support Details</h2>
      <p className="hint-text">
        Tell us about your household to help determine potential eligibility.
      </p>

      <div className="form-group">
        <label htmlFor="childrenCount">
          How many dependent children under 16 live with you?
        </label>
        <input
          id="childrenCount"
          type="number"
          min="0"
          max="15"
          value={formData.childrenCount}
          onChange={(e) => updateFormData("childrenCount", e.target.value)}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label>
          Do you or your partner receive a qualifying low-income benefit (e.g. Universal Credit, Tax Credits)?
        </label>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name="qualifyingBenefits"
              value="yes"
              checked={formData.qualifyingBenefits === "yes"}
              onChange={(e) => updateFormData("qualifyingBenefits", "yes")}
            />
            Yes
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="qualifyingBenefits"
              value="no"
              checked={formData.qualifyingBenefits === "no"}
              onChange={(e) => updateFormData("qualifyingBenefits", "no")}
            />
            No
          </label>
        </div>
      </div>

      <button type="submit" className="btn-primary">
        Next: Care Responsibilities &rarr;
      </button>
    </form>
  );
}