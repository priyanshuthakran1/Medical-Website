import React, { useState } from "react";
import "./Medic.css"; // Import CSS

const medicineData = {
  fever: [
    { name: "Paracetamol", sideEffect: "Liver damage (if overdosed)", usage: "Take with water after food" },
    { name: "Ibuprofen", sideEffect: "Stomach irritation", usage: "Take after meals with water" },
    { name: "Aspirin", sideEffect: "Gastric bleeding (long-term use)", usage: "Take with food to reduce irritation" },
  ],
  cold: [
    { name: "Cetirizine", sideEffect: "Drowsiness", usage: "Take once before bedtime" },
    { name: "Dextromethorphan", sideEffect: "Dizziness", usage: "Take every 6 hours as needed" },
    { name: "Phenylephrine", sideEffect: "Increased blood pressure", usage: "Avoid if you have hypertension" },
  ],
  headache: [
    { name: "Acetaminophen", sideEffect: "Liver damage (high doses)", usage: "Take 500mg every 6 hours" },
    { name: "Naproxen", sideEffect: "Stomach ulcer (long-term use)", usage: "Take with food" },
    { name: "Ibuprofen", sideEffect: "Kidney problems (excess use)", usage: "Take after meals" },
  ],
  diabetes: [
    { name: "Metformin", sideEffect: "Nausea, diarrhea", usage: "Take with meals" },
    { name: "Insulin", sideEffect: "Low blood sugar", usage: "Inject before meals" },
    { name: "Glipizide", sideEffect: "Weight gain", usage: "Take 30 minutes before breakfast" },
  ],
  hypertension: [
    { name: "Amlodipine", sideEffect: "Swelling in feet", usage: "Take once daily" },
    { name: "Lisinopril", sideEffect: "Dry cough", usage: "Take on an empty stomach" },
    { name: "Losartan", sideEffect: "Dizziness", usage: "Take at the same time daily" },
  ],
  asthma: [
    { name: "Salbutamol", sideEffect: "Increased heart rate", usage: "Inhale as needed" },
    { name: "Budesonide", sideEffect: "Throat irritation", usage: "Use inhaler with a spacer" },
    { name: "Montelukast", sideEffect: "Mood changes", usage: "Take at bedtime" },
  ],
  anxiety: [
    { name: "Diazepam", sideEffect: "Drowsiness, addiction risk", usage: "Take as prescribed" },
    { name: "Fluoxetine", sideEffect: "Insomnia, nausea", usage: "Take in the morning" },
    { name: "Sertraline", sideEffect: "Dizziness", usage: "Take with food" },
  ],
};

const Medic = () => {
  const [disease, setDisease] = useState("");
  const [medicines, setMedicines] = useState([]);

  const handleRecommend = () => {
    const recommendations = medicineData[disease.toLowerCase()];
    setMedicines(recommendations || [{ name: "No recommendation found.", sideEffect: "", usage: "" }]);
  };

  return (
    <div className="medic-container">
      <h2>Medicine Recommender</h2>
      <input
        type="text"
        placeholder="Enter Disease Name"
        value={disease}
        onChange={(e) => setDisease(e.target.value)}
        className="medic-input"
      />
      <button onClick={handleRecommend} className="medic-btn">
        Get Recommendation
      </button>

      {medicines.length > 0 && (
        <div className="recommendations">
          <h3>Recommended Medicines:</h3>
          <ul>
            {medicines.map((medicine, index) => (
              <li key={index}>
                <strong>{medicine.name}</strong> <br />
                <em>Side Effect:</em> {medicine.sideEffect} <br />
                <em>How to Consume:</em> {medicine.usage}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Medic;
