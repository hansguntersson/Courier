/**
 * Courier – game data (config, content, events).
 * Load before main game script. Exposes window.CourierData.
 */
(function () {
  "use strict";

  /* Job catalog: id, who, name, dist, seq, repeat, fbTopic (feedback template topic) */
  var JOB_CATALOG_RAW = [
    /* Sam Patel (20) */
    { id: "sam_01", who: "Sam Patel", name: "Hot food drop", dist: 2.0, seq: 1, repeat: true, fbTopic: "that hot drop" },
    { id: "sam_02", who: "Sam Patel", name: "Parcel run", dist: 3.5, seq: 1, repeat: true, fbTopic: "the parcel" },
    { id: "sam_03", who: "Sam Patel", name: "Groceries", dist: 4.2, seq: 1, repeat: true, fbTopic: "the groceries" },
    { id: "sam_04", who: "Sam Patel", name: "Fragile item", dist: 5.0, seq: 1, repeat: false, fbTopic: "the fragile item" },
    { id: "sam_05", who: "Sam Patel", name: "Rush SLA", dist: 6.0, seq: 2, repeat: true, fbTopic: "the rush SLA" },
    { id: "sam_06", who: "Sam Patel", name: "Late rent env", dist: 2.4, seq: 2, repeat: false, fbTopic: "the rent envelope" },
    { id: "sam_07", who: "Sam Patel", name: "Urgent drive", dist: 6.1, seq: 2, repeat: true, fbTopic: "the hard drive" },
    { id: "sam_08", who: "Sam Patel", name: "Council docs", dist: 3.7, seq: 2, repeat: true, fbTopic: "the council docs" },
    { id: "sam_09", who: "Sam Patel", name: "Legal bundle", dist: 5.4, seq: 3, repeat: true, fbTopic: "the legal bundle" },
    { id: "sam_10", who: "Sam Patel", name: "Press pass", dist: 4.4, seq: 3, repeat: false, fbTopic: "the press pass" },
    { id: "sam_11", who: "Sam Patel", name: "Lab sample", dist: 5.9, seq: 3, repeat: true, fbTopic: "the lab sample" },
    { id: "sam_12", who: "Sam Patel", name: "Film reel", dist: 6.6, seq: 3, repeat: false, fbTopic: "the film reel" },
    { id: "sam_13", who: "Sam Patel", name: "Vintage vinyl", dist: 2.5, seq: 4, repeat: true, fbTopic: "the vinyl swap" },
    { id: "sam_14", who: "Sam Patel", name: "Wristbands", dist: 4.8, seq: 4, repeat: true, fbTopic: "the wristbands" },
    { id: "sam_15", who: "Sam Patel", name: "Passport return", dist: 6.9, seq: 4, repeat: false, fbTopic: "the passport" },
    { id: "sam_16", who: "Sam Patel", name: "Theatre keys", dist: 4.0, seq: 4, repeat: true, fbTopic: "those keys" },
    { id: "sam_17", who: "Sam Patel", name: "Knife set", dist: 3.1, seq: 5, repeat: true, fbTopic: "the knife set" },
    { id: "sam_18", who: "Sam Patel", name: "Sash parts", dist: 5.8, seq: 5, repeat: false, fbTopic: "the window parts" },
    { id: "sam_19", who: "Sam Patel", name: "Phone return", dist: 3.6, seq: 5, repeat: true, fbTopic: "that phone" },
    { id: "sam_20", who: "Sam Patel", name: "Bike lock", dist: 2.2, seq: 5, repeat: true, fbTopic: "the lock rescue" },

    /* Rosa Klein (20) */
    { id: "rosa_01", who: "Rosa Klein", name: "VIP sushi", dist: 3.2, seq: 1, repeat: true, fbTopic: "the sushi" },
    { id: "rosa_02", who: "Rosa Klein", name: "Cake rescue", dist: 5.6, seq: 1, repeat: true, fbTopic: "the cake" },
    { id: "rosa_03", who: "Rosa Klein", name: "Props drop", dist: 2.7, seq: 1, repeat: true, fbTopic: "the props" },
    { id: "rosa_04", who: "Rosa Klein", name: "Do not bend", dist: 3.9, seq: 1, repeat: false, fbTopic: "the book" },
    { id: "rosa_05", who: "Rosa Klein", name: "Band merch", dist: 4.1, seq: 2, repeat: true, fbTopic: "the merch" },
    { id: "rosa_06", who: "Rosa Klein", name: "Tattoo stencil", dist: 2.1, seq: 2, repeat: true, fbTopic: "the stencil" },
    { id: "rosa_07", who: "Rosa Klein", name: "Cake topper", dist: 3.4, seq: 2, repeat: true, fbTopic: "the topper" },
    { id: "rosa_08", who: "Rosa Klein", name: "Charity box", dist: 4.7, seq: 2, repeat: false, fbTopic: "the raffle box" },
    { id: "rosa_09", who: "Rosa Klein", name: "Poster tubes", dist: 4.9, seq: 3, repeat: true, fbTopic: "the posters" },
    { id: "rosa_10", who: "Rosa Klein", name: "Lens rental", dist: 5.5, seq: 3, repeat: true, fbTopic: "the lens" },
    { id: "rosa_11", who: "Rosa Klein", name: "Studio keys", dist: 3.1, seq: 3, repeat: false, fbTopic: "studio keys" },
    { id: "rosa_12", who: "Rosa Klein", name: "Afterparty bands", dist: 4.2, seq: 3, repeat: true, fbTopic: "the bands" },
    { id: "rosa_13", who: "Rosa Klein", name: "Set list", dist: 2.0, seq: 4, repeat: true, fbTopic: "the set list" },
    { id: "rosa_14", who: "Rosa Klein", name: "Wardrobe pins", dist: 2.8, seq: 4, repeat: true, fbTopic: "wardrobe pins" },
    { id: "rosa_15", who: "Rosa Klein", name: "Makeup kit", dist: 3.6, seq: 4, repeat: false, fbTopic: "the makeup kit" },
    { id: "rosa_16", who: "Rosa Klein", name: "USB master", dist: 5.7, seq: 4, repeat: true, fbTopic: "the USB master" },
    { id: "rosa_17", who: "Rosa Klein", name: "Signed vinyl", dist: 3.8, seq: 5, repeat: false, fbTopic: "the signed vinyl" },
    { id: "rosa_18", who: "Rosa Klein", name: "Green room", dist: 2.6, seq: 5, repeat: true, fbTopic: "green room snacks" },
    { id: "rosa_19", who: "Rosa Klein", name: "Ticket stubs", dist: 3.0, seq: 5, repeat: true, fbTopic: "ticket stubs" },
    { id: "rosa_20", who: "Rosa Klein", name: "Stage pass", dist: 4.4, seq: 5, repeat: true, fbTopic: "the stage pass" },

    /* Aisha Rahman (20) */
    { id: "aisha_01", who: "Aisha Rahman", name: "Pharmacy pickup", dist: 2.8, seq: 1, repeat: true, fbTopic: "the pickup" },
    { id: "aisha_02", who: "Aisha Rahman", name: "Iguana meds", dist: 6.4, seq: 1, repeat: true, fbTopic: "the meds" },
    { id: "aisha_03", who: "Aisha Rahman", name: "Clinic forms", dist: 3.2, seq: 1, repeat: true, fbTopic: "those forms" },
    { id: "aisha_04", who: "Aisha Rahman", name: "Blood kit", dist: 4.1, seq: 1, repeat: false, fbTopic: "the kit" },
    { id: "aisha_05", who: "Aisha Rahman", name: "Lab rush", dist: 5.9, seq: 2, repeat: true, fbTopic: "the rush sample" },
    { id: "aisha_06", who: "Aisha Rahman", name: "X-ray disc", dist: 4.6, seq: 2, repeat: false, fbTopic: "the disc" },
    { id: "aisha_07", who: "Aisha Rahman", name: "Care package", dist: 3.9, seq: 2, repeat: true, fbTopic: "the package" },
    { id: "aisha_08", who: "Aisha Rahman", name: "Vaccine docs", dist: 3.4, seq: 2, repeat: true, fbTopic: "the docs" },
    { id: "aisha_09", who: "Aisha Rahman", name: "Specimen box", dist: 5.2, seq: 3, repeat: true, fbTopic: "the specimen" },
    { id: "aisha_10", who: "Aisha Rahman", name: "Allergy results", dist: 3.7, seq: 3, repeat: true, fbTopic: "the results" },
    { id: "aisha_11", who: "Aisha Rahman", name: "Dental mould", dist: 4.8, seq: 3, repeat: false, fbTopic: "the mould" },
    { id: "aisha_12", who: "Aisha Rahman", name: "Stitch kit", dist: 2.9, seq: 3, repeat: true, fbTopic: "the kit" },
    { id: "aisha_13", who: "Aisha Rahman", name: "Cold chain", dist: 6.6, seq: 4, repeat: true, fbTopic: "cold chain" },
    { id: "aisha_14", who: "Aisha Rahman", name: "Urgent referral", dist: 6.0, seq: 4, repeat: false, fbTopic: "the referral" },
    { id: "aisha_15", who: "Aisha Rahman", name: "Ward swap", dist: 4.0, seq: 4, repeat: true, fbTopic: "the ward swap" },
    { id: "aisha_16", who: "Aisha Rahman", name: "Therapy notes", dist: 3.1, seq: 4, repeat: true, fbTopic: "the notes" },
    { id: "aisha_17", who: "Aisha Rahman", name: "Consent forms", dist: 3.6, seq: 5, repeat: true, fbTopic: "consent forms" },
    { id: "aisha_18", who: "Aisha Rahman", name: "Path slides", dist: 5.8, seq: 5, repeat: false, fbTopic: "the slides" },
    { id: "aisha_19", who: "Aisha Rahman", name: "IV supplies", dist: 4.4, seq: 5, repeat: true, fbTopic: "IV supplies" },
    { id: "aisha_20", who: "Aisha Rahman", name: "Hosp keys", dist: 3.3, seq: 5, repeat: false, fbTopic: "those keys" },

    /* Tom Weaver (20) */
    { id: "tom_01", who: "Tom Weaver", name: "Office keys", dist: 2.2, seq: 1, repeat: true, fbTopic: "the keys" },
    { id: "tom_02", who: "Tom Weaver", name: "Laptop charger", dist: 3.0, seq: 1, repeat: true, fbTopic: "the charger" },
    { id: "tom_03", who: "Tom Weaver", name: "Contract copies", dist: 4.1, seq: 1, repeat: true, fbTopic: "the contracts" },
    { id: "tom_04", who: "Tom Weaver", name: "Signed NDA", dist: 3.6, seq: 1, repeat: false, fbTopic: "the NDA" },
    { id: "tom_05", who: "Tom Weaver", name: "Meeting pack", dist: 4.8, seq: 2, repeat: true, fbTopic: "the pack" },
    { id: "tom_06", who: "Tom Weaver", name: "Printer toner", dist: 2.7, seq: 2, repeat: true, fbTopic: "the toner" },
    { id: "tom_07", who: "Tom Weaver", name: "Client gift", dist: 5.0, seq: 2, repeat: false, fbTopic: "the gift" },
    { id: "tom_08", who: "Tom Weaver", name: "Board papers", dist: 5.6, seq: 2, repeat: true, fbTopic: "the board papers" },
    { id: "tom_09", who: "Tom Weaver", name: "Proto demo", dist: 6.2, seq: 3, repeat: true, fbTopic: "the demo" },
    { id: "tom_10", who: "Tom Weaver", name: "Finance pack", dist: 4.9, seq: 3, repeat: true, fbTopic: "the finance pack" },
    { id: "tom_11", who: "Tom Weaver", name: "Share cert", dist: 3.4, seq: 3, repeat: false, fbTopic: "the certificate" },
    { id: "tom_12", who: "Tom Weaver", name: "Courier samples", dist: 5.3, seq: 3, repeat: true, fbTopic: "the samples" },
    { id: "tom_13", who: "Tom Weaver", name: "Spare badge", dist: 2.6, seq: 4, repeat: true, fbTopic: "the badge" },
    { id: "tom_14", who: "Tom Weaver", name: "Server dongle", dist: 6.1, seq: 4, repeat: false, fbTopic: "the dongle" },
    { id: "tom_15", who: "Tom Weaver", name: "Audit files", dist: 5.8, seq: 4, repeat: true, fbTopic: "the audit files" },
    { id: "tom_16", who: "Tom Weaver", name: "Client minutes", dist: 3.9, seq: 4, repeat: true, fbTopic: "those minutes" },
    { id: "tom_17", who: "Tom Weaver", name: "Pitch deck", dist: 4.6, seq: 5, repeat: true, fbTopic: "the deck" },
    { id: "tom_18", who: "Tom Weaver", name: "Signed contract", dist: 5.2, seq: 5, repeat: false, fbTopic: "the contract" },
    { id: "tom_19", who: "Tom Weaver", name: "Data stick", dist: 3.3, seq: 5, repeat: true, fbTopic: "the data stick" },
    { id: "tom_20", who: "Tom Weaver", name: "Late invoice", dist: 3.8, seq: 5, repeat: true, fbTopic: "the invoice" }
  ];

  var EVENT_POOL = {
    normal: [
      { t: "Red light gamble", d: "You gun it through a late amber. Lose 6% energy.", energy: -6, mins: 0, mood: "bad" },
      { t: "Stairwell detour", d: "Lift is out. Lose 4 minutes.", energy: 0, mins: 4, mood: "bad" },
      { t: "Tailwind stretch", d: "Clear road. Gain 2 minutes.", energy: 0, mins: -2, mood: "good" },
      { t: "Loose strap", d: "Bag strap slips. Lose 3% energy and 2 minutes.", energy: -3, mins: 2, mood: "bad" },
      { t: "Quiet cut-through", d: "A calm side street. Gain 1 minute.", energy: 0, mins: -1, mood: "good" },
      { t: "Coffee queue", d: "You get stuck behind a crowd. Lose 3 minutes.", energy: 0, mins: 3, mood: "bad" },
      { t: "Helpful doorman", d: "Someone holds the door. Gain 1 minute.", energy: 0, mins: -1, mood: "good" },
      { t: "Wrong buzzer", d: "You buzz the wrong flat. Lose 2 minutes.", energy: 0, mins: 2, mood: "bad" },
      { t: "Cobbles", d: "Rattly cobbles drain you. Lose 2% energy.", energy: -2, mins: 0, mood: "bad" },
      { t: "Green wave", d: "Every light goes green. Gain 3 minutes.", energy: 0, mins: -3, mood: "good" },
      { t: "Roadworks shuffle", d: "Cones everywhere. Lose 5 minutes.", energy: 0, mins: 5, mood: "bad" },
      { t: "Unexpected shortcut", d: "A signed cut-through. Gain 2 minutes.", energy: 0, mins: -2, mood: "good" },
      { t: "Bag re-pack", d: "You re-pack on the move. Lose 1 minute, save 1% energy.", energy: 1, mins: 1, mood: "neutral" },
      { t: "Steep ramp", d: "A long ramp saps you. Lose 4% energy.", energy: -4, mins: 0, mood: "bad" }
    ],
    accident: [
      { t: "Near miss", d: "Hard brake. You wobble it out. Lose 8% energy and 3 minutes.", energy: -8, mins: 3, mood: "bad" },
      { t: "Minor spill", d: "You clip a curb. Lose 12% energy and 6 minutes.", energy: -12, mins: 6, mood: "bad" },
      { t: "Impact scare", d: "Close call with a car door. Lose 10% energy and 4 minutes.", energy: -10, mins: 4, mood: "bad" },
      { t: "Chain slip", d: "Chain slips under load. Lose 6% energy and 3 minutes.", energy: -6, mins: 3, mood: "bad" },
      { t: "Skid", d: "Painted lines in drizzle. Lose 9% energy and 2 minutes.", energy: -9, mins: 2, mood: "bad" },
      { t: "Kerb strike", d: "Wheel bangs a kerb. Lose 7% energy and 5 minutes.", energy: -7, mins: 5, mood: "bad" },
      { t: "Handlebar clip", d: "You clip a bollard. Lose 11% energy and 4 minutes.", energy: -11, mins: 4, mood: "bad" },
      { t: "Foot slip", d: "Foot slips off pedal. Lose 5% energy and 2 minutes.", energy: -5, mins: 2, mood: "bad" },
      { t: "Bag spill", d: "Something shifts. Lose 8% energy and 6 minutes.", energy: -8, mins: 6, mood: "bad" }
    ]
  };

  var PROMPT_EVENTS = [
    { t: "Shortcut sign", d: "A gated cut-through is ajar. Could save time.", energy: 0, mins: -2 },
    { t: "Dodgy alley", d: "You cut through anyway. Bad vibe. Lose time.", energy: 0, mins: 3 },
    { t: "Perfect slipstream", d: "You tuck in behind a smooth rider. Gain time.", energy: 0, mins: -2 },
    { t: "Puddle blast", d: "You hit a deep puddle. Lose energy and time.", energy: -5, mins: 2 }
  ];

  window.CourierData = {
    VERSION: "1.0.44",
    WEEKLY_TARGET: 1000,
    PRICES: { drink: 12, snack: 6 },
    COSTS: { bills: 35, food: 15 },
    WEEKLY_RENT: 1000,
    SPEEDS: {
      1: { name: "very slow", mult: 0.55 },
      2: { name: "slow", mult: 0.8 },
      3: { name: "average", mult: 1 },
      4: { name: "fast", mult: 1.25 },
      5: { name: "very fast", mult: 1.55 }
    },
    ROUTES: ["Easy", "Mid", "Tricky", "Hellish"],
    QUOTES: [
      "We've had two riders drop this already. Needs doing before the deadline.",
      "Client is calling every 2 minutes. Keep it moving.",
      "Estate drop. Stairs. No lift. Don't be late."
    ],
    REQUESTORS: ["Sam Patel", "Rosa Klein", "Aisha Rahman", "Tom Weaver"],
    REPUTATION: { "Sam Patel": 7, "Rosa Klein": 8, "Aisha Rahman": 9, "Tom Weaver": 6 },
    JOB_CATALOG_RAW: JOB_CATALOG_RAW,
    EVENT_POOL: EVENT_POOL,
    PROMPT_EVENTS: PROMPT_EVENTS,
    SAVE_KEY: "courier_save",
    SAVE_SCHEMA: 4
  };
})();
