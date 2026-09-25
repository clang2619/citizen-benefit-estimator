# Citizen Entitlement Estimator (React Prototype)

A modular, accessible multi-step web application built with modern React. Designed as a prototype public sector digital service to calculate indicative entitlement for Scottish devolved social security benefits.

---

## Overview & Alignment with GDD Standards

This project demonstrates core competencies aligned with the **Government Digital and Data (GDD) Profession Framework** for an **Associate Software Engineer / Junior Developer**:

* **Software Design & Engineering:** Modular architecture separating UI presentation, stateful form orchestration, and pure business logic.
* **Modern JavaScript Frameworks:** Built using React 18+ functional components, standard React Hooks (`useState`), and ES6+ modules.
* **User-Centred Design & Accessibility (a11y):** Styled with high-contrast, clean public-sector visual patterns, explicit form labelling, keyboard navigation support, and progressive disclosure.
* **Testability & Separation of Concerns:** Pure calculation algorithms isolated from UI rendering for straightforward unit testing.
* **Security & Defensive Practices:** Client-side sanitization, strict input constraints (minimum/maximum bounds), and defensive state defaults to prevent edge-case injection or runtime crashes.

---

## Architecture & Code Structure

```text
src/
├── components/
│   ├── StepHousehold.jsx    # User input collection for household & qualifying criteria
│   ├── StepCare.jsx         # Care hour input & conditional flow
│   └── SummaryResult.jsx    # Dynamic result presentation & breakdown
├── utils/
│   └── calculationLogic.js  # Pure business logic functions for benefit entitlement
├── App.jsx                  # State orchestration & step routing
├── index.css                # Accessible, high-contrast Gov-style design system
└── main.jsx                 # Application entry point