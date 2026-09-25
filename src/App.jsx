import React, { useState } from 'react';
import StepHousehold from './components/StepHousehold';
import StepCare from './components/StepCare';
import SummaryResult from './components/SummaryResult';
import { calculateEntitlements } from './utils/calculationLogic';

const initialData = {
  childrenCount: 0,
  qualifyingBenefits: '',
  careHours: 0
};

export default function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialData);
  const [results, setResults] = useState([]);

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCalculate = () => {
    const calculated = calculateEntitlements(formData);
    setResults(calculated);
    setStep(3);
  };

  const handleReset = () => {
    setFormData(initialData);
    setStep(1);
  };

  return (
    <div className="app-container">
      <header className="gov-header">
        <div className="header-inner">
          <span className="crest-tag">Public Sector Digital Prototype</span>
          <h1>Citizen Entitlement Estimator</h1>
        </div>
      </header>

      <main className="content-container">
        {step === 1 && (
          <StepHousehold
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <StepCare
            formData={formData}
            updateFormData={updateFormData}
            onBack={() => setStep(1)}
            onCalculate={handleCalculate}
          />
        )}

        {step === 3 && (
          <SummaryResult
            results={results}
            onReset={handleReset}
          />
        )}
      </main>
    </div>
  );
}