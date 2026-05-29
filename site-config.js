const SITE_CONFIG = {

  /* -----------------------------
     GENERAL INFO (UNCHANGED)
  ----------------------------- */
  locationLine: 'Located at Payne Lake, minutes from Waterton Lakes National Park',
  contact: { phone: '(403) 555-0199', email: 'info@watertonview.ca' },

  /* -----------------------------
     DAILY CAMPING (NEW FLEX SYSTEM)
  ----------------------------- */
  daily: {

    totalSites: 43,

    // FULL CALENDAR RANGE (can be as wide as you want)
    displayStart: "2026-01-01",
    displayEnd: "2026-12-31",

    // DEFAULT OPEN SEASON (easy to change anytime)
    openRanges: [
      { start: "2026-05-01", end: "2026-10-05" }
    ],

    // ONLY EDIT THIS SECTION DAY-TO-DAY
    // This is your control panel
    overrides: {

      // =========================
      // MAY
      // =========================
      "2026-05-01": { status: "open", availableSites: 40 },
      "2026-05-02": { status: "open", availableSites: 35 },
      "2026-05-03": { status: "open", availableSites: 0 }, // FULL

      // =========================
      // JUNE
      // =========================
      "2026-06-15": { status: "open", availableSites: 20 },

      // =========================
      // JULY (busy time)
      // =========================
      "2026-07-10": { status: "open", availableSites: 5 },

      // =========================
      // AUGUST
      // =========================
      "2026-08-01": { status: "open", availableSites: 12 },

      // =========================
      // SEPTEMBER
      // =========================
   

      // =========================
      // FLEXIBILITY EXAMPLES
      // (use these when needed)
      // =========================

      // Open early if weather is good
      "2026-04-25": { status: "open", availableSites: 18 },

      // Stay open later into fall
      "2026-10-0": { status: "open", availableSites: 10 }
    }
  },

  /* -----------------------------
     SEASONAL SITES (UNCHANGED)
  ----------------------------- */
  seasonal: {

    sites: {
      A1:false,A2:false,A3:false,A4:false,A5:false,A6:false,A7:false,A8:false,A9:false,A10:false,A11:false,A12:false,A13:false,A14:false,A15:false,A16:false,A17:false,A18:false,
      B1:false,B2:false,B3:false,B4:false,B5:false,B6:false,B7:false,B8:false,B9:false,B10:false,B11:false,B12:false,B13:false,B14:false,B15:false,B16:false,B17:false,B18:false,B19:false,B20:false,B21:false,B22:false,B23:false,B24:false,
      C1:false,C2:false,C3:false,C4:false,C5:false,C6:false,C7:false,C8:false,C9:false,C10:false,C11:false,C12:false,C13:false,C14:false,C15:false,C16:false,C17:false,C18:false,C19:false,C20:false,
      D1:false,D2:false,D3:false,D4:false,D5:false,D6:false,
      E1:false,E2:false,E3:false,E4:false,E5:false,E6:false,E7:false,E8:false,E9:false,E10:false,E11:false,E12:false,E13:false,E14:false,E15:false,
      J1:false,J2:false,J3:false,J4:false,J5:false,J6:false,J7:false,J8:false,J9:false,J10:false,J11:false,J12:false,J13:false,J14:false,J15:false,J16:false,J17:false,J18:false,J19:false,J20:false,J21:false,J22:false,J23:false,J24:false,J25:false,J26:false,J27:false,J28:false,J29:false,J30:false,J31:false,J32:false,J33:false,J34:false,J35:false
    },

    fullyBookedMessage: "All our seasonal sites are booked for the season. If you would like to join our waiting list please fill out this form."
  },

  /* -----------------------------
     DOCUMENTS (UNCHANGED)
  ----------------------------- */
  documents: {
    longTerm: [{ name: 'Long Term Lease Rules & Regulations (PDF)', file: 'rules.pdf' }],
    shared: [
      { name: 'Bear Smart Plan (PDF)', file: 'bear-smart.pdf' },
      { name: 'Fire Smart Plan (PDF)', file: 'fire-smart.pdf' },
      { name: 'Aquatic Invasive Species Policy (PDF)', file: 'aquatic-invasive.pdf' }
    ]
  },

  /* -----------------------------
     RENTALS (DO NOT TOUCH)
     ✅ Keeps accommodations working
  ----------------------------- */
  rentals: [
    { group:'Wilderness Huts', name:'Duck Blind', url:'https://vrbo.onelink.me/ItNz/af2pcydy', img:'assets/duckblind.jpg' },
    { group:'Wilderness Huts', name:'Grizzly Basin', url:'https://vrbo.onelink.me/ItNz/pgx49ifp', img:'assets/grizzlybasin.jpg' },
    { group:'Wilderness Huts', name:'Wolf’s Lair', url:'https://vrbo.onelink.me/ItNz/nycv10mh', img:'assets/wolfslair.jpg' },
    { group:'Wilderness Huts', name:'Trout Creek', url:'https://vrbo.onelink.me/ItNz/y9t5vfky', img:'assets/troutcreek.jpg' },
    { group:'Wilderness Huts', name:'Moose Tracks', url:'https://vrbo.onelink.me/ItNz/61pfqaue', img:'assets/moosetracks.jpg' },
    { group:'RV Rentals', name:'Cozy Camper', url:'https://vrbo.onelink.me/ItNz/wo9mkjqv', img:'assets/cozycamper.jpg' },
    { group:'RV Rentals', name:'Coulee Camper', url:'https://vrbo.onelink.me/ItNz/xggi0ho7', img:'assets/couleecamper.jpg' },
    { group:'Office Units', name:'Hotel Unit', url:'https://vrbo.onelink.me/ItNz/i62ify7u', img:'assets/hotelunit.jpg' },
    { group:'Office Units', name:'Lake View', url:'https://vrbo.onelink.me/ItNz/s8cb6nws', img:'assets/lakeview.jpg' },
    { group:'Lodge', name:'Payne Lake Lodge', url:'https://vrbo.onelink.me/ItNz/njaas8z3', img:'assets/payne-lake-lodge.jpg' }
  ]
};