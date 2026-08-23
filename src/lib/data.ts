export const navItems = [
  { id: "casts", label: "TOP CASTS" },
  { id: "production", label: "PRODUCTION" },
  { id: "boxoffice", label: "BOX OFFICE" },
  { id: "imax", label: "IMAX 6" },
] as const;

export const casts = [
  { name: "RYAN REYNOLDS", role: "Wade Wilson / Deadpool", img: "/images/cast-ryan.jpg" },
  { name: "KARAN SONI", role: "Dopinder", img: "/images/cast-3.jpg" },
  { name: "EMMA CORRIN", role: "Cassandra Nova", img: "/images/cast-2.jpg" },
  { name: "HUGH JACKMAN", role: "Logan / Wolverine", img: "/images/cast-hugh.jpg" },
];

export const ticket = {
  film: "DEADPOOL III",
  cinema: "EL CAPITAN THEATRE",
  date: "MAY 29",
  time: "9:30 PM",
  map: "/images/map.jpg",
};

export const quotes = [
  {
    text: "HUGH JACKMAN SAID HE REALLY WAS DONE PLAYING THE CHARACTER OF LOGAN / WOLVERINE AFTER 2017'S 'LOGAN'.",
  },
  {
    text: "REYNOLDS CALLED THE FILM A LOVE LETTER TO THE FANS WHO NEVER STOPPED ASKING FOR ONE MORE RIDE.",
  },
];

export const stories = {
  partA:
    'Wolverine joins the "merc with a mouth" in the third installment of the Deadpool film franchise.',
  partB:
    "Deadpool 3 is scheduled to be released in the United States on May 3, 2024. It was previously scheduled for September 6 of that year, and then November 8. It will be part of Phase Five of the MCU.",
  partC:
    "Deadpool, AKA Wade Wilson, AKA the Merc with a Mouth, first made his debut in the much-maligned X-Men Origins: Wolverine.",
  partD:
    "The film was initially announced for September 6, 2024, but it later changed, being pushed back to November 8, 2024 — then locked for May 3.",
};

export const showtimes = [
  { cinema: "El Capitan Theatre", city: "Los Angeles", times: ["1:15 PM", "4:20 PM", "7:40 PM", "10:35 PM"] },
  { cinema: "AMC Lincoln Square IMAX", city: "New York", times: ["12:50 PM", "4:05 PM", "7:20 PM", "10:45 PM"] },
  { cinema: "Odeon Leicester Square", city: "London", times: ["1:00 PM", "3:50 PM", "6:40 PM", "9:30 PM"] },
  { cinema: "Cinépolis IMAX", city: "Mexico City", times: ["2:10 PM", "5:25 PM", "8:40 PM"] },
];

export const boxOffice = [
  { label: "Opening Weekend", value: "$211M", note: "Domestic" },
  { label: "Global Total", value: "$1.33B", note: "Worldwide" },
  { label: "Budget", value: "$200M", note: "Reported" },
  { label: "IMAX Share", value: "18%", note: "Opening" },
];