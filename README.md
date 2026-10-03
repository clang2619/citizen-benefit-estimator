# Citizen Entitlement Estimator

An accessible, multi-step web application built with React to provide indicative entitlement estimates for devolved Scottish social security support.

The project demonstrates modular component architecture, accessible form patterns, and clean separation between business logic and UI state.

---

## Features

- **Progressive Multi-Step Flow**: Guides users through household and caregiving criteria with clear, accessible inputs.
- **Isolated Business Logic**: Benefit rules engines are decoupled from React components into pure, deterministic functions for testability.
- **Accessible UI Patterns**: High-contrast, keyboard-navigable form controls designed around public sector digital usability guidelines.
- **Defensive State Handling**: Client-side boundary validation to prevent malformed numeric inputs and edge-case calculation errors.

---

## Architecture

```text
src/
├── components/
│   ├── StepHousehold.jsx    # Household criteria and child count inputs
│   ├── StepCare.jsx         # Care hour inputs and validation flow
│   └── SummaryResult.jsx    # Dynamic entitlement breakdown and summary
├── utils/
│   └── calculationLogic.js  # Pure business logic functions for benefit calculations
├── App.jsx                  # Main view orchestration and lifted state
├── index.css                # Clean, accessible public service styling
└── main.jsx                 # Application root entry point

### 🤖 AI Collaboration Disclaimer
This project was developed as a hands-on learning lab exploring front-end web architecture and vanilla development. Code snippets, boilerplate scaffolding, and architectural patterns were generated in collaboration with Gemini (Google AI) acting as an interactive technical mentor. All implementations, file structures, debugging, and styling integrations were manually reviewed, tested, and assembled by me to master underlying web fundamentals.
