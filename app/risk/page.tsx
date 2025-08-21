"use client";
import React, { useState } from "react";

// Expanded local JSON DB for activities (bilingual, placeholders)
const expandedActivities = [
  "Abseiling",
  "Aerial Runways (Flying Fox)",
  "Archery",
  "Assault Course",
  "Ballooning",
  "Bouldering",
  "Bridge Swinging",
  "Bungee Jumping",
  "Bungee Running",
  "Bushwalking - Day Excursion",
  "Bushwalking - Overnight",
  "Bushwalking - Several Days",
  "Campcraft (Pionierka)",
  "Campfire Cooking",
  "Canoeing / Kayaking - Flatwater",
  "Canoeing / Kayaking - Sea",
  "Canoeing / Kayaking - Whitewater",
  "Canyoning",
  "Caving",
  "Christmas Carolling",
  "Climbing - Indoor",
  "Climbing - Outdoor (Leading)",
  "Climbing - Outdoor (Top Roping)",
  "Cooking",
  "Cycling - MTB",
  "Cycling - Road",
  "Cycling - Touring",
  "Dinghy Sailing",
  "Excursions",
  "Fencing",
  "Fishing - Bank",
  "Fishing - Rock",
  "Fishing - Inland Boat",
  "Fishing - Offshore",
  "Flying",
  "Free Time",
  "Gliding",
  "Hang Gliding",
  "Hill Walking",
  "Hitch-Hiking",
  "Horse Riding",
  "Ice Climbing",
  "Ice Skating",
  "Initiative Activities and Games",
  "Jet Skiing",
  "Karting",
  "Land Yachts",
  "Laser Guns",
  "Martial Arts",
  "Motor Sports",
  "Mountaineering",
  "Night Games",
  "Offshore Sailing",
  "Ogniska (Campfires)",
  "Orienteering / Rogaining",
  "Paint Ball",
  "Parachuting",
  "Paragliding",
  "Pot Holing (Cave Diving)",
  "Power Boating",
  "Private Mobile Radios",
  "Raft Building",
  "Rafting - Whitewater",
  "Roller Skating/Blading",
  "Rowing",
  "Sailing",
  "Scuba Diving",
  "Sentry Duty (Warta)",
  "Shooting - Target",
  "Skiing/Snowboarding - Alpine",
  "Skiing/Snowboarding - Touring",
  "Snorkelling",
  "Surfing",
  "Swimming",
  "Theatrical Performance",
  "Water Skiing",
  "Wind Surfing"
];

const meritBadgeDB = {
  ...expandedActivities.reduce((acc, name) => {
    acc[name] = [
      {
        hazard: {
          pl: "(do uzupełnienia)",
          en: "(to be completed)"
        },
        mitigations: {
          pl: "(do uzupełnienia)",
          en: "(to be completed)"
        },
        equipment: {
          pl: "(do uzupełnienia)",
          en: "(to be completed)"
        }
      }
    ];
    return acc;
  }, {}),
  "Trzy Pióra": [
    {
      hazard: {
        pl: "Nocne wędrówki, ognisko, woda, platforma",
        en: "Night hiking, campfire, water, platform"
      },
      mitigations: {
        pl: "Zawsze w grupie, asekuracja, nie rozpalaj ognia w pobliżu łatwopalnych materiałów, sprawdź stabilność platformy, nie wchodź do wody po zmroku bez asekuracji.",
        en: "Always in a group, use safety lines, don't light fires near flammable materials, check platform stability, don't enter water after dark without supervision."
      },
      equipment: {
        pl: "Latarka, apteczka, kamizelka ratunkowa, gaśnica, lina asekuracyjna",
        en: "Torch, first aid kit, life jacket, fire extinguisher, safety rope"
      }
    }
  ],
  "Mistrz Ognisk": [
    {
      hazard: {
        pl: "Ogień, dym, poparzenia, rozpalanie ogniska w złych warunkach",
        en: "Fire, smoke, burns, lighting a fire in poor conditions"
      },
      mitigations: {
        pl: "Rozpalaj ognisko tylko w wyznaczonych miejscach, miej wodę lub piasek do gaszenia, nie zostawiaj ognia bez nadzoru.",
        en: "Light fires only in designated places, have water or sand for extinguishing, never leave fire unattended."
      },
      equipment: {
        pl: "Wiadro z wodą/piaskiem, apteczka, rękawice ochronne",
        en: "Bucket of water/sand, first aid kit, protective gloves"
      }
    }
  ]
};

// Simple keyword-to-risk mapping (bilingual)
const keywordRisks = [
  {
    keyword: "fire",
    hazard: {
      pl: "Ogień, poparzenia, pożar",
      en: "Fire, burns, bushfire"
    },
    mitigations: {
      pl: "Rozpalaj tylko w bezpiecznym miejscu, miej wodę/piasek do gaszenia, nie zostawiaj ognia bez nadzoru.",
      en: "Light fires only in safe places, have water/sand for extinguishing, never leave fire unattended."
    },
    equipment: {
      pl: "Wiadro z wodą/piaskiem, apteczka, rękawice ochronne",
      en: "Bucket of water/sand, first aid kit, protective gloves"
    }
  },
  {
    keyword: "woda|water",
    hazard: {
      pl: "Utonięcie, poślizgnięcie, hipotermia",
      en: "Drowning, slipping, hypothermia"
    },
    mitigations: {
      pl: "Nie wchodź do wody sam, używaj asekuracji, miej ratownika.",
      en: "Don't enter water alone, use safety lines, have a lifeguard."
    },
    equipment: {
      pl: "Kamizelka ratunkowa, lina, apteczka",
      en: "Life jacket, rope, first aid kit"
    }
  },
  {
    keyword: "night|noc",
    hazard: {
      pl: "Słaba widoczność, zgubienie się, upadek",
      en: "Low visibility, getting lost, falling"
    },
    mitigations: {
      pl: "Latarka, idź w grupie, oznacz trasę, miej telefon.",
      en: "Use a torch, go in a group, mark the route, have a phone."
    },
    equipment: {
      pl: "Latarka, odblaski, telefon, mapa",
      en: "Torch, hi-vis, phone, map"
    }
  },
  {
    keyword: "platform|platforma",
    hazard: {
      pl: "Upadek, niestabilność, zatonięcie",
      en: "Falling, instability, sinking"
    },
    mitigations: {
      pl: "Sprawdź stabilność, nie przeciążaj, używaj asekuracji.",
      en: "Check stability, don't overload, use safety lines."
    },
    equipment: {
      pl: "Lina, kamizelka ratunkowa",
      en: "Rope, life jacket"
    }
  }
];

const UI = {
  pl: {
    title: "Szybka analiza ryzyka",
    inputLabel: "Wpisz opis aktywności lub nazwę sprawności harcerskiej:",
    placeholder: "np. rozpalanie ogniska na platformie w rzece w nocy",
    analyze: "Analizuj",
    warning: "⚠️ Wiele zagrożeń wykryto dla tej aktywności! Zachowaj szczególną ostrożność.",
    table: {
      hazard: "Zagrożenie",
      mitigations: "Możliwe działania ochronne",
      equipment: "Zalecany sprzęt"
    },
    noRisks: "Brak zidentyfikowanych zagrożeń dla tej aktywności.",
    language: "Polski",
    switch: "Switch to English"
  },
  en: {
    title: "Quick Risk Analysis",
    inputLabel: "Enter an activity description or merit badge name:",
    placeholder: "e.g. lighting a fire on a platform in a river at night",
    analyze: "Analyze",
    warning: "⚠️ Multiple hazards detected for this activity! Take extra care.",
    table: {
      hazard: "Hazard",
      mitigations: "Possible Mitigations",
      equipment: "Recommended Equipment"
    },
    noRisks: "No hazards identified for this activity.",
    language: "English",
    switch: "Przełącz na polski"
  }
};

const likelihoodOptions = [
  { value: "almost_certain", pl: "Prawie pewne", en: "Almost Certain" },
  { value: "likely", pl: "Prawdopodobne", en: "Likely" },
  { value: "possible", pl: "Możliwe", en: "Possible" },
  { value: "unlikely", pl: "Mało prawdopodobne", en: "Unlikely" },
  { value: "rare", pl: "Rzadkie", en: "Rare" },
];
const consequenceOptions = [
  { value: "insignificant", pl: "Znikome", en: "Insignificant" },
  { value: "minor", pl: "Drobne", en: "Minor" },
  { value: "moderate", pl: "Umiarkowane", en: "Moderate" },
  { value: "major", pl: "Poważne", en: "Major" },
  { value: "severe", pl: "Ciężkie", en: "Severe" },
];

// Matrix for risk rating
const riskMatrix = {
  almost_certain:    ["medium", "high", "extreme", "extreme", "extreme"],
  likely:            ["medium", "medium", "high", "extreme", "extreme"],
  possible:          ["low", "medium", "medium", "high", "extreme"],
  unlikely:          ["low", "low", "medium", "medium", "high"],
  rare:              ["low", "low", "low", "medium", "medium"],
};
const riskColors = {
  extreme: "#e53935", // red
  high:    "#ff9800", // orange
  medium:  "#fff176", // yellow
  low:     "#64b5f6", // blue
};
const riskLabels = {
  pl: { extreme: "Ekstremalne", high: "Wysokie", medium: "Średnie", low: "Niskie" },
  en: { extreme: "Extreme", high: "High", medium: "Medium", low: "Low" },
};

function getRiskRating(likelihood, consequence) {
  const lIdx = likelihoodOptions.findIndex(l => l.value === likelihood);
  const cIdx = consequenceOptions.findIndex(c => c.value === consequence);
  if (lIdx === -1 || cIdx === -1) return "medium";
  const lKey = likelihoodOptions[lIdx].value;
  return riskMatrix[lKey][cIdx];
}

function extractRisks(input) {
  const found = [];
  for (const risk of keywordRisks) {
    const regex = new RegExp(risk.keyword, "i");
    if (regex.test(input)) {
      found.push(risk);
    }
  }
  return found;
}

export default function RiskPage() {
  const [input, setInput] = useState("");
  const [risks, setRisks] = useState([]);
  const [badgeRisks, setBadgeRisks] = useState([]);
  const [warning, setWarning] = useState("");
  const [lang, setLang] = useState("pl");
  const [likelihoods, setLikelihoods] = useState({});
  const [consequences, setConsequences] = useState({});

  function handleAnalyze() {
    // Check for merit badge match
    const badge = Object.keys(meritBadgeDB).find(b => input.toLowerCase().includes(b.toLowerCase()));
    if (badge) {
      setBadgeRisks(meritBadgeDB[badge]);
      setRisks([]);
      setWarning("");
      return;
    }
    // Otherwise, extract risks from keywords
    const found = extractRisks(input);
    setBadgeRisks([]);
    setRisks(found);
    setWarning(found.length > 1 ? UI[lang].warning : "");
  }

  function handleLikelihoodChange(key, value) {
    setLikelihoods(l => ({ ...l, [key]: value }));
  }
  function handleConsequenceChange(key, value) {
    setConsequences(c => ({ ...c, [key]: value }));
  }

  return (
    <div className="container" style={{ maxWidth: 600, margin: "2rem auto" }}>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 8 }}>
        <button className="button is-small" onClick={() => setLang(lang === "pl" ? "en" : "pl")}>{UI[lang].switch}</button>
      </div>
      <h2 className="title is-4">{UI[lang].title}</h2>
      <p>{UI[lang].inputLabel}</p>
      <div style={{ display: "flex", gap: 8, margin: "1rem 0" }}>
        <input
          className="input"
          style={{ flex: 1 }}
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={UI[lang].placeholder}
        />
        <button className="button is-primary" onClick={handleAnalyze}>{UI[lang].analyze}</button>
      </div>
      {warning && <div style={{ color: "#b71c1c", fontWeight: 600, marginBottom: 12 }}>{warning}</div>}
      {(badgeRisks.length > 0 || risks.length > 0) && (
        <table className="table is-bordered is-striped" style={{ marginTop: 16 }}>
          <thead>
            <tr>
              <th>{UI[lang].table.hazard}</th>
              <th>{UI[lang].table.mitigations}</th>
              <th>{UI[lang].table.equipment}</th>
              <th>{lang === "pl" ? "Prawdopodobieństwo" : "Likelihood"}</th>
              <th>{lang === "pl" ? "Konsekwencja" : "Consequence"}</th>
              <th>{lang === "pl" ? "Poziom ryzyka" : "Risk Level"}</th>
            </tr>
          </thead>
          <tbody>
            {[...badgeRisks, ...risks].map((r, i) => {
              const key = `risk-${i}`;
              const likelihood = likelihoods[key] || "possible";
              const consequence = consequences[key] || "moderate";
              const riskRating = getRiskRating(likelihood, consequence);
              return (
                <tr key={key} style={{ background: riskColors[riskRating] }}>
                  <td>{r.hazard[lang] || r.hazard.pl}</td>
                  <td>{r.mitigations[lang] || r.mitigations.pl}</td>
                  <td>{r.equipment[lang] || r.equipment.pl}</td>
                  <td>
                    <select
                      value={likelihood}
                      onChange={e => handleLikelihoodChange(key, e.target.value)}
                    >
                      {likelihoodOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt[lang]}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <select
                      value={consequence}
                      onChange={e => handleConsequenceChange(key, e.target.value)}
                    >
                      {consequenceOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt[lang]}</option>
                      ))}
                    </select>
                  </td>
                  <td style={{ fontWeight: 700 }}>
                    {riskLabels[lang][riskRating]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {(badgeRisks.length === 0 && risks.length === 0 && input) && (
        <div style={{ color: '#888', marginTop: 16 }}>{UI[lang].noRisks}</div>
      )}
    </div>
  );
}
