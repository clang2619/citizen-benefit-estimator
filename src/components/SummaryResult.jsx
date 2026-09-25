import React from 'react';

export default function SummaryResult({ results, onReset }) {
  return (
    <div className="step-card">
      <h2>Your Estimated Entitlements</h2>
      <p className="hint-text">
        Based on the answers provided, here is an initial estimate of Scottish devolved support:
      </p>

      {results.length === 0 ? (
        <div className="notice-box">
          <h3>No immediate matches identified</h3>
          <p>
            Based on the information entered, you may not qualify for the Scottish Child Payment or Carer Support Payment. 
            However, other local council grants and discretionary funds might be available.
          </p>
        </div>
      ) : (
        <div className="results-list">
          {results.map((item) => (
            <div key={item.id} className="result-card">
              <div className="result-header">
                <h3>{item.title}</h3>
                <span className="badge">{item.amount}</span>
              </div>
              <p className="result-meta"><strong>Frequency:</strong> {item.frequency}</p>
              <p>{item.summary}</p>
            </div>
          ))}
        </div>
      )}

      <button onClick={onReset} className="btn-secondary" style={{ marginTop: '24px' }}>
        Start a New Check
      </button>
    </div>
  );
}