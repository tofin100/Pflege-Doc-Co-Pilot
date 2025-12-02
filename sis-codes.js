// sis-codes.js
// Strukturierte Informationssammlung (SIS) – Referenzdaten
// Version 1.0 – Pflege Co-Pilot

const SIS_CODES = {
  themenfelder: [
    {
      id: "tf1",
      label: "TF 1 – Kognition & Kommunikation",
      keywords: [
        "orientiert", "verwirrt", "gedächtnis", "erinnerung", "kommunikation",
        "sprache", "verstehen", "anweisungen", "demenz", "geistige fähigkeiten"
      ],
      beispiele: [
        "Patient ist zeitlich voll orientiert.",
        "Sprache verständlich, jedoch verlangsamte Verarbeitung.",
        "Benötigt Wiederholungen zur Instruktion."
      ]
    },
    {
      id: "tf2",
      label: "TF 2 – Mobilität & Beweglichkeit",
      keywords: [
        "gehen", "stehen", "aufstehen", "bett", "transfer", "rollator",
        "gleichgewicht", "kraft", "bewegung", "sturz"
      ],
      beispiele: [
        "Geht sicher mit Rollator.",
        "Benötigt Hilfe beim Aufstehen aus dem Bett.",
        "Gangbild unsicher, Sturzrisiko erhöht."
      ]
    },
    {
      id: "tf3",
      label: "TF 3 – Krankheitsbezogene Anforderungen & Belastungen",
      keywords: [
        "erkrankung", "diagnose", "chronisch", "pflegeanleitung", "medikation",
        "insulin", "inhalation", "wunde", "schmerz", "dokumentation",
        "arzt", "therapie", "behandlungspflege"
      ],
      beispiele: [
        "Erhöhte Anforderungen durch insulinpflichtigen Diabetes.",
        "Regelmäßige Schmerzmedikation notwendig.",
        "Tägliche Wundversorgung am Unterschenkel."
      ]
    },
    {
      id: "tf4",
      label: "TF 4 – Selbstversorgung",
      keywords: [
        "waschen", "duschen", "anziehen", "essen", "trinken", "toilette",
        "kontinenz", "körperpflege", "hygiene"
      ],
      beispiele: [
        "Körperpflege teilweise selbstständig.",
        "Benötigt vollständige Übernahme beim Duschen.",
        "Kann selbstständig essen und trinken."
      ]
    },
    {
      id: "tf5",
      label: "TF 5 – Leben in sozialen Beziehungen",
      keywords: [
        "kontakt", "familie", "angehörige", "soziales umfeld", "besucher",
        "kommunikation", "einsamkeit", "psychisch"
      ],
      beispiele: [
        "Regelmäßiger Kontakt zu Tochter.",
        "Wünscht tägliche kurze Gespräche.",
        "Wirkt zurückgezogen, wenige soziale Kontakte."
      ]
    },
    {
      id: "tf6",
      label: "TF 6 – Haushaltsführung",
      keywords: [
        "einkaufen", "haushalt", "kochen", "wäsche", "aufräumen", "putzen",
        "organisation", "haushaltsnahe diensten"
      ],
      beispiele: [
        "Haushalt wird vollständig durch Pflegedienst übernommen.",
        "Kann leichte Tätigkeiten selbst übernehmen."
      ]
    }
  ],

  risiken: [
    { id: "sturz", label: "Sturzrisiko erhöht" },
    { id: "dekubitus", label: "Dekubitusrisiko" },
    { id: "malnutrition", label: "Mangelernährung / Ernährungsrisiko" },
    { id: "dehydratation", label: "Risiko Flüssigkeitsmangel" },
    { id: "infektion", label: "Erhöhtes Infektionsrisiko" },
    { id: "psychisch", label: "Psychische Belastung / Angst" }
  ],

  maßnahmen: [
    { id: "grundpflege", label: "Grundpflege nach Bedarf" },
    { id: "behandlungspflege", label: "Behandlungspflege gemäß Verordnung" },
    { id: "mobilisierung", label: "Mobilisation & Bewegung" },
    { id: "hautpflege", label: "Hautpflege / Prophylaxen" },
    { id: "beratung", label: "Beratung zu Pflege & Gesundheit" },
    { id: "beobachtung", label: "Beobachtung des Allgemeinzustands" }
  ],

  textbausteine: {
    einleitung: "Pflegebedürftige Person wurde umfassend im Rahmen der SIS eingeschätzt.",
    ziel: "Ziel der Pflege ist die Förderung von Selbstständigkeit, Wohlbefinden und Sicherheit.",
    notfall: "Bei akuten Veränderungen wird unverzüglich ärztliche Rücksprache gehalten."
  }
};
