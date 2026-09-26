export const organizations = [
  {
    id: "ifrps",
    name: "International Federation of Rock Paper Scissors",
    region: "International",
    status: "Sanctioned",
    isSample: false,
  },
  {
    id: "sample-na",
    name: "Sample RPS Canada",
    region: "Canada",
    status: "Recognized",
    isSample: true,
  },
  {
    id: "sample-us",
    name: "Sample US League",
    region: "United States",
    status: "Recognized",
    isSample: true,
  },
  {
    id: "sample-jp",
    name: "Sample Japan RPS",
    region: "Japan",
    status: "Recognized",
    isSample: true,
  },
  {
    id: "sample-eu",
    name: "Sample European League",
    region: "Europe",
    status: "Recognized",
    isSample: true,
  },
] as const;