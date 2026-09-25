import React from 'react';

export default function StepCare({ formData, updateFormData, onBack, onCalculate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate();
  };

  return (
    <form onSubmit={handleSubmit} className="step-card">
      <h2>Step 2: Care Responsibilities</h2>
      <p className="hint-text">
        Caring support is available if you provide regular care for someone with a disability or health condition.
      </p>

      <div className="form-group">
        <label htmlFor="careHours">
          Roughly how many hours per week do you provide care for someone?
        </label>
        <input
          id="careHours"
          type="number"
          min="0"
          max="168"
          value={formData.careHours}
          onChange={(e) => updateFormData("careHours", e.target.value)}
          className="form-input"
          required
        />
        <span className="field-hint">Enter 0 if you do not provide care.</span>
      </div>

      <div className="button-row">
        <button type="button" onClick={onBack} className="btn-secondary">
          &larr; Back
        </button>
        <button type="submit" className="btn-primary">
          Calculate Entitlements
        </button>
      </div>
    </form>
  );
}