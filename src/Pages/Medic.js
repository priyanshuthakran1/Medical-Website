"use client"

import { useState, useEffect } from "react"
import "./Medic.css"

const Medic = () => {
  const [disease, setDisease] = useState("")
  const [medicines, setMedicines] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchHistory, setSearchHistory] = useState([])
  const [showHistory, setShowHistory] = useState(false)
  const [error, setError] = useState("")

  // Load search history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem("medicSearchHistory")
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory))
    }
  }, [])

  // Save search to history
  const saveToHistory = (searchTerm) => {
    const newHistory = [searchTerm, ...searchHistory.filter((item) => item !== searchTerm)].slice(0, 5)
    setSearchHistory(newHistory)
    localStorage.setItem("medicSearchHistory", JSON.stringify(newHistory))
  }

  const handleRecommend = async () => {
    if (!disease.trim()) {
      setError("Please enter a disease name")
      return
    }

    setLoading(true)
    setError("")
    setMedicines([])

    try {
      const res = await fetch(
        `https://api.fda.gov/drug/label.json?search=indications_and_usage:${encodeURIComponent(disease)}&limit=5`,
      )

      if (!res.ok) {
        throw new Error("Failed to fetch data from FDA API")
      }

      const data = await res.json()

      if (!data.results || data.results.length === 0) {
        throw new Error("No medicine found for this condition")
      }

      const formatted = data.results.map((item, index) => {
        const brand = item.openfda?.brand_name?.[0]
        const generic = item.openfda?.generic_name?.[0]
        const usage = item.indications_and_usage?.[0]
        const warning = item.warnings?.[0]
        const dosage = item.dosage_and_administration?.[0]
        const manufacturer = item.openfda?.manufacturer_name?.[0]

        return {
          id: index,
          name: brand || generic || "Name not found",
          usage: usage ? usage.split("\n")[0].substring(0, 200) + "..." : "Usage info not available",
          sideEffect: warning ? warning.split("\n")[0].substring(0, 150) + "..." : "No warning provided",
          dosage: dosage ? dosage.split("\n")[0].substring(0, 100) + "..." : "Dosage info not available",
          manufacturer: manufacturer || "Manufacturer not specified",
          type: brand ? "Brand" : "Generic",
        }
      })

      setMedicines(formatted)
      saveToHistory(disease.trim())
    } catch (error) {
      console.error("API fetch error:", error)
      setError(error.message)
      setMedicines([])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleRecommend()
    }
  }

  const selectFromHistory = (historyItem) => {
    setDisease(historyItem)
    setShowHistory(false)
  }

  const clearHistory = () => {
    setSearchHistory([])
    localStorage.removeItem("medicSearchHistory")
    setShowHistory(false)
  }

  return (
    <div className="medic-page">
      <div className="medic-container">
        <div className="medic-header">
          <div className="header-icon">💊</div>
          <h2>Medicine Recommender</h2>
          <p className="header-subtitle">Get FDA-approved medicine recommendations for your condition</p>
        </div>

        <div className="search-section">
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter disease or condition name..."
              value={disease}
              onChange={(e) => setDisease(e.target.value)}
              onKeyPress={handleKeyPress}
              className="medic-input"
              disabled={loading}
            />
            {searchHistory.length > 0 && (
              <button className="history-btn" onClick={() => setShowHistory(!showHistory)} title="Search History">
                🕒
              </button>
            )}
          </div>

          {showHistory && searchHistory.length > 0 && (
            <div className="search-history">
              <div className="history-header">
                <span>Recent Searches</span>
                <button onClick={clearHistory} className="clear-history">
                  Clear
                </button>
              </div>
              {searchHistory.map((item, index) => (
                <div key={index} className="history-item" onClick={() => selectFromHistory(item)}>
                  {item}
                </div>
              ))}
            </div>
          )}

          <button
            onClick={handleRecommend}
            className={`medic-btn ${loading ? "loading" : ""}`}
            disabled={loading || !disease.trim()}
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                Searching...
              </>
            ) : (
              <>
                <span className="search-icon">🔍</span>
                Get Recommendations
              </>
            )}
          </button>
        </div>

        {error && (
          <div className="error-message">
            <span className="error-icon">⚠️</span>
            {error}
          </div>
        )}

        {medicines.length > 0 && (
          <div className="recommendations">
            <div className="recommendations-header">
              <h3>💊 Recommended Medicines</h3>
              <span className="results-count">{medicines.length} results found</span>
            </div>

            <div className="medicines-grid">
              {medicines.map((medicine) => (
                <div key={medicine.id} className="medicine-card">
                  <div className="medicine-header">
                    <div className="medicine-name">
                      <strong>{medicine.name}</strong>
                      <span className={`medicine-type ${medicine.type.toLowerCase()}`}>{medicine.type}</span>
                    </div>
                    {medicine.manufacturer !== "Manufacturer not specified" && (
                      <div className="manufacturer">by {medicine.manufacturer}</div>
                    )}
                  </div>

                  <div className="medicine-details">
                    <div className="detail-section">
                      <div className="detail-label">
                        <span className="detail-icon">📋</span>
                        Usage & Indications
                      </div>
                      <div className="detail-content">{medicine.usage}</div>
                    </div>

                    {medicine.dosage !== "Dosage info not available" && (
                      <div className="detail-section">
                        <div className="detail-label">
                          <span className="detail-icon">💉</span>
                          Dosage Information
                        </div>
                        <div className="detail-content">{medicine.dosage}</div>
                      </div>
                    )}

                    <div className="detail-section warning">
                      <div className="detail-label">
                        <span className="detail-icon">⚠️</span>
                        Warnings & Side Effects
                      </div>
                      <div className="detail-content">{medicine.sideEffect}</div>
                    </div>
                  </div>

                  <div className="medicine-footer">
                    <div className="disclaimer">
                      ⚕️ Always consult with a healthcare professional before taking any medication
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="recommendations-footer">
              <div className="fda-notice">
                <span className="fda-icon">🏛️</span>
                Data sourced from FDA Drug Labels Database
              </div>
            </div>
          </div>
        )}

        {!loading && medicines.length === 0 && disease && !error && (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No Results Found</h3>
            <p>Try searching with different terms or check the spelling</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Medic
