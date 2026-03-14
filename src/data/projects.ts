import { asset } from "@/lib/basePath";

export interface Project {
  slug: string;
  client: string;
  event: string;
  title: string;
  image: string;
  size: string;
  tags: string[];
  location: string;
  overview: string;
  challenge: string;
  solution: string;
  features: { title: string; description: string }[];
  results: string[];
  stats: { value: number; suffix?: string; label: string }[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: "microsoft-leap",
    client: "Microsoft",
    event: "LEAP",
    title: "Microsoft LEAP",
    image: asset("/assets/photos/microsoft-leap.jpg"),
    size: "700 sqm",
    tags: ["Double Decker", "Custom Build"],
    location: "Riyadh, Saudi Arabia",
    overview:
      "A 700 sqm double-decker stand that gave Microsoft a commanding two-level presence at LEAP — Saudi Arabia's largest tech event. The build housed live product demos, executive meeting suites, and a keynote theatre, turning a floor plot into a destination.",
    challenge:
      "Delivering a fully compliant two-storey structure within a 10-day venue access window, while meeting Saudi Civil Defence load and fire safety requirements for upper-deck occupancy. The upper deck needed to support meeting rooms, a hospitality lounge, and continuous foot traffic without any structural compromise. Coordinating AV, lighting, and HVAC across two levels required a power distribution plan that could handle peak demo loads without interruption.",
    solution:
      "The superstructure was pre-fabricated in our Dubai workshop and shipped flat-pack to Riyadh, cutting on-site assembly time in half. A 63A three-phase power distribution system isolated AV, lighting, and HVAC on dedicated circuits to prevent brownouts during peak demo hours. The result: a structure that performed like a permanent installation but was built, used, and dismantled in under three weeks.",
    features: [
      {
        title: "Double-Decker Superstructure",
        description:
          "Steel-framed two-storey build engineered for 350 kg/sqm upper-deck loading — strong enough for meeting rooms, a hospitality lounge, and full foot traffic.",
      },
      {
        title: "320 sqm Printed Graphics",
        description:
          "Modular tension-fabric lightboxes and direct-print panels on flame-retardant substrates, designed for rapid swap-out between event phases.",
      },
      {
        title: "63A Power Distribution",
        description:
          "Three-phase electrical system with isolated circuits for AV, lighting, and climate control — zero brownouts across four days of continuous demos.",
      },
    ],
    results: [
      "Installation completed one day ahead of schedule with a 35-person crew",
      "Zero safety incidents across build, show, and dismantle phases",
      "Over 8,000 visitor interactions logged across the 4-day event",
      "Client signed the next edition's contract before the show closed",
    ],
    stats: [
      { value: 700, suffix: " sqm", label: "Stand Footprint" },
      { value: 35, label: "Installation Crew" },
      { value: 10, suffix: " days", label: "Build Time" },
    ],
    gallery: [
      asset("/assets/photos/gallery/microsoft-IMG_3408.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3410.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3412.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3413.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3414.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3415.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3416.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3419.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3422.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3424.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3425.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3427.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3430.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3433.jpg"),
      asset("/assets/photos/gallery/microsoft-AAA00001.jpg"),
      asset("/assets/photos/gallery/microsoft-AAA00052.jpg"),
      asset("/assets/photos/gallery/microsoft-floorplan-1.jpg"),
    ],
  },
  {
    slug: "nespresso-creatista",
    client: "Nespresso",
    event: "CreatistaPlus Launch",
    title: "Nespresso CreatistaPlus Launch",
    image: asset("/assets/photos/gallery/nespresso-NES-1239.jpg"),
    size: "1200 sqm",
    tags: ["Event Production", "Premium Launch", "Brand Experience"],
    location: "Dubai, UAE",
    overview:
      "A 1200 sqm product launch experience for Nespresso's CreatistaPlus, staged at Al Serkal Avenue in Dubai. Five distinct zones — from cocktail bar to keynote theatre — guided 200+ VIP guests, media, and influencers through the brand story without a single wall between them.",
    challenge:
      "Turning a raw warehouse venue into a luxury brand world with five seamless zones across 1200 sqm. The space needed to feel exclusive and polished while allowing natural guest flow — no bottlenecks, no dead zones.",
    solution:
      "Illuminated steel archways replaced traditional walls, defining each zone through light and form while keeping full sightlines across the venue. A brushed-copper cocktail bar and 4-metre floral photo wall served as anchor points that drew guests forward. All lighting ran on a pre-programmed DMX timeline synced to the event runsheet, so every phase — welcome, reveal, tasting, networking — hit its mark without manual intervention.",
    features: [
      {
        title: "Freestanding Architectural Framework",
        description:
          "Black steel archways with integrated LED channels that defined zones through light instead of walls — keeping the space open while giving each area its own identity.",
      },
      {
        title: "Copper-Finish Cocktail Bar",
        description:
          "Custom-fabricated bar with brushed copper finish, built-in refrigeration, and backlit branding — the centrepiece for live barista demonstrations.",
      },
      {
        title: "4-Metre Floral Photo Wall",
        description:
          "Premium floral installation with concealed uplighting, purpose-built to generate shareable social content from every guest.",
      },
      {
        title: "DMX-Synced Event Lighting",
        description:
          "Pre-programmed lighting rig that transitioned automatically between event phases, eliminating manual cues and keeping the show on schedule.",
      },
      {
        title: "CNC Steel Framework",
        description:
          "Precision-cut structural elements supporting large-format installations and suspended features across the full 1200 sqm venue footprint.",
      },
    ],
    results: [
      "200+ VIP guests hosted, including top-tier media and influencers",
      "50+ earned media placements within 48 hours of the event",
      "Photo zone content shared over 2,000 times on social media",
      "Nespresso rebooked the production team for their next regional launch",
    ],
    stats: [
      { value: 1200, suffix: " sqm", label: "Event Footprint" },
      { value: 200, suffix: "+", label: "VIP Guests" },
      { value: 2000, suffix: "+", label: "Social Shares" },
      { value: 50, suffix: "+", label: "Media Placements" },
    ],
    gallery: [
      asset("/assets/photos/gallery/nespresso-NES-963.jpg"),
      asset("/assets/photos/gallery/nespresso-NES-1196.jpg"),
      asset("/assets/photos/gallery/nespresso-NES-1207.jpg"),
      asset("/assets/photos/gallery/nespresso-NES-1239.jpg"),
    ],
  },
  {
    slug: "vanderlande-airport",
    client: "Vanderlande",
    event: "Airport Show",
    title: "Vanderlande Airport Show",
    image: asset("/assets/photos/vanderlande-airport.jpg"),
    size: "60 sqm",
    tags: ["Open Concept", "Product Demo", "Architectural"],
    location: "Dubai, UAE",
    overview:
      "A 60 sqm open-concept stand for Vanderlande at the Dubai Airport Show, built around a working conveyor demonstration that let airport procurement teams see the product in action. Clean architectural lines and open sightlines from all four aisles did the rest.",
    challenge:
      "Fitting a live demonstration system into a compact 60 sqm open-plan stand without sacrificing premium aesthetics. The stand needed to feel inviting from every aisle while accommodating private meeting areas for airline procurement discussions. All structural and electrical work had to comply with Dubai venue regulations within a tight 3-day build window.",
    solution:
      "A raised platform with clean architectural lines anchored the stand and drew attention from multiple aisles. The conveyor demo was integrated at floor level with concealed power connections, running continuously throughout the show. Lightweight partition walls created semi-private meeting areas for procurement conversations without closing off the stand.",
    features: [
      {
        title: "Open-Plan Layout",
        description:
          "Four-sided open design with no visual barriers — visitors could see the product demo from any approach, maximizing walk-up engagement.",
      },
      {
        title: "Integrated Product Display",
        description:
          "Live conveyor demonstration with concealed power and data connections, running uninterrupted across all three show days.",
      },
      {
        title: "Architectural Lighting Design",
        description:
          "Layered lighting combining recessed fixtures, accent spots, and perimeter LEDs to create depth and draw the eye toward demo and meeting zones.",
      },
      {
        title: "Modular Meeting Areas",
        description:
          "Semi-private conversation zones built from lightweight partitions — private enough for procurement discussions, open enough to keep the stand inviting.",
      },
    ],
    results: [
      "Consistent visitor flow maintained across all three show days",
      "Live demo drove the highest engagement rate on the exhibition floor",
      "24 scheduled meetings hosted with airline procurement teams",
      "Client renewed the contract for the following year's Airport Show",
    ],
    stats: [
      { value: 60, suffix: " sqm", label: "Stand Footprint" },
      { value: 24, label: "Meetings Hosted" },
      { value: 3, suffix: " days", label: "Build Time" },
    ],
    gallery: [
      asset("/assets/photos/gallery/vanderlande-1.jpg"),
      asset("/assets/photos/gallery/vanderlande-2.jpg"),
    ],
  },
  {
    slug: "spark-breakbulk",
    client: "Spark Logistics",
    event: "Breakbulk Middle East",
    title: "Spark Logistics Breakbulk ME",
    image: asset("/assets/photos/spark-breakbulk.jpg"),
    size: "60 sqm",
    tags: ["Custom Build", "Industrial Design", "Container Concept"],
    location: "Dubai, UAE",
    overview:
      "A 60 sqm stand for Spark Logistics at Breakbulk Middle East that turned shipping container architecture into a competitive advantage. The industrial design instantly communicated the client's freight forwarding identity while housing three dedicated meeting zones for deal-making.",
    challenge:
      "Making a container-inspired concept feel authentic without becoming dark, cramped, or gimmicky. The design had to balance raw industrial character with a professional meeting environment across a compact 60 sqm footprint.",
    solution:
      "Corrugated steel panels over lightweight substrates delivered the industrial look at manageable weight. Strategic cutaways and floor-to-ceiling glazed sections broke up the container forms and flooded the interior with natural light. Three meeting zones arranged around a central reception hub gave the sales team dedicated spaces for every conversation on their calendar.",
    features: [
      {
        title: "Corrugated Steel Cladding",
        description:
          "Authentic industrial container look using real corrugated steel on lightweight substrates — striking on the show floor, practical to build and dismantle.",
      },
      {
        title: "Tri-Zone Meeting Layout",
        description:
          "Three acoustically separated meeting areas with power, data, and display screens — purpose-built for back-to-back client conversations.",
      },
      {
        title: "Industrial Material Palette",
        description:
          "Corrugated metal, perforated steel mesh, exposed cable trays, and polished concrete-effect flooring — every surface reinforced the brand's logistics identity.",
      },
      {
        title: "Open-Plan Reception",
        description:
          "Full-width blackened steel reception counter with backlit branding, serving as the first touchpoint for every visitor walking up from the main aisle.",
      },
    ],
    results: [
      "Named a top-5 stand design at Breakbulk ME by event organizers",
      "Visitor footfall exceeded client projections by 40%",
      "All three meeting rooms fully booked across both show days",
      "Design concept reused for four subsequent editions — proving long-term ROI",
    ],
    stats: [
      { value: 60, suffix: " sqm", label: "Stand Footprint" },
      { value: 3, label: "Meeting Zones" },
      { value: 40, suffix: "%", label: "Above Footfall Target" },
      { value: 4, label: "Editions Built" },
    ],
    gallery: [
      asset("/assets/photos/gallery/spark-build-1.jpg"),
      asset("/assets/photos/gallery/spark-build-2.jpg"),
      asset("/assets/photos/gallery/spark-render-1.jpg"),
      asset("/assets/photos/gallery/spark-render-2.jpg"),
    ],
  },
  {
    slug: "hoosh-world-of-vape",
    client: "HOOSH",
    event: "World of Vape",
    title: "HOOSH World of Vape",
    image: asset("/assets/photos/gallery/hoosh-7.jpg"),
    size: "36 sqm",
    tags: ["Retail Design", "LED Signage", "Product Wall"],
    location: "Dubai, UAE",
    overview:
      "A 36 sqm stand for HOOSH at World of Vape that broke every convention in the hall. While competitors defaulted to black-and-neon, we built a clean retail boutique that showcased 60+ products and kept visitors browsing three times longer than the hall average.",
    challenge:
      "Every competitor in the vape hall looked the same — dark, loud, generic. HOOSH needed a stand that signalled quality and trust while displaying 60+ SKUs in a way that invited browsing, not overwhelm.",
    solution:
      "We deliberately went the opposite direction: matte white surfaces, brushed brass accents, and warm lighting that made the stand feel like a premium boutique dropped into a trade show. Individually backlit product bays turned the full-width wall into a browsable retail display. A curved tasting counter with built-in USB charging gave visitors a reason to stay — and the longer they stayed, the more deals closed.",
    features: [
      {
        title: "Retail-Style Product Wall",
        description:
          "Full-width modular shelving with individual LED backlighting per bay — 60+ SKUs displayed in a format designed to drive browsing and conversation.",
      },
      {
        title: "LED Lightbox Signage",
        description:
          "Frameless overhead lightbox visible from 25+ metres across the show floor, pulling traffic from competing aisles.",
      },
      {
        title: "Curved Tasting Counter",
        description:
          "Brushed brass counter with USB charging and product testers — built to extend dwell time and convert browsers into buyers.",
      },
      {
        title: "Warm Retail Palette",
        description:
          "Matte white and brushed brass with warm 3000K lighting — a deliberate contrast that made HOOSH the most distinctive stand in the hall.",
      },
    ],
    results: [
      "Highest footfall of any stand in the vape hall across both show days",
      "6-minute average dwell time — triple the hall average",
      "12 new distribution deals signed directly from on-stand meetings",
      "Stand design reused for three subsequent trade shows",
    ],
    stats: [
      { value: 36, suffix: " sqm", label: "Stand Footprint" },
      { value: 60, suffix: "+", label: "Products Displayed" },
      { value: 12, label: "Deals Signed" },
      { value: 6, suffix: " min", label: "Avg Dwell Time" },
    ],
    gallery: [
      // Matched photo comes first — paired with render by index
      asset("/assets/photos/gallery/hoosh-9.jpg"),   // pairs with render-3 (product wall from left)
      // Remaining photos (not paired)
      asset("/assets/photos/gallery/hoosh-2.jpg"),
      asset("/assets/photos/gallery/hoosh-3.jpg"),
      asset("/assets/photos/gallery/hoosh-5.jpg"),
      asset("/assets/photos/gallery/hoosh-7.jpg"),
      asset("/assets/photos/gallery/hoosh-8.jpg"),
      asset("/assets/photos/gallery/hoosh-10.jpg"),
      // Only renders with a matching photo
      asset("/assets/photos/gallery/hoosh-render-3.jpg"),
      asset("/assets/photos/gallery/hoosh-floorplan-1.jpg"),
    ],
  },
  {
    slug: "sipchem-adipec",
    client: "Sipchem",
    event: "Middle East Coatings Show",
    title: "Sipchem Middle East Coatings Show",
    image: asset("/assets/photos/gallery/sipchem-1.jpg"),
    size: "100 sqm",
    tags: ["Double Decker", "LED Video Wall", "Premium Finish"],
    location: "Dubai, UAE",
    overview:
      "A 100 sqm double-decker stand that positioned Sipchem as the dominant presence at the Middle East Coatings Show. The cantilevered upper deck projected corporate scale, while VIP meeting rooms above and an open reception below gave the sales team the right environment for every conversation.",
    challenge:
      "Projecting the authority of a major specialty chemicals company from a 100 sqm plot surrounded by competitors with significantly larger footprints. The double-decker structure also had to clear both DWTC venue regulations and Dubai Civil Defence requirements.",
    solution:
      "A cantilevered upper deck extending beyond the ground-floor footprint created an imposing silhouette visible from two aisles and added sheltered meeting space below. A 12 sqm LED video wall served as the visual anchor, running facility and product content that drew visitors in from the main thoroughfare. Premium finishes — stone-effect flooring, acoustic panels, brushed stainless steel — closed the gap between the stand and the corporate brand it represented.",
    features: [
      {
        title: "Cantilevered Upper Deck",
        description:
          "Upper level extending 1.5m beyond the ground-floor perimeter — creating a dramatic silhouette and additional covered space below for walk-up meetings.",
      },
      {
        title: "12 sqm LED Video Wall",
        description:
          "High-resolution display running custom content on Sipchem's facilities and product range — the visual anchor that pulled traffic from the main thoroughfare.",
      },
      {
        title: "VIP Meeting Suite",
        description:
          "Upper-level room with acoustic glazing, integrated AV, and seating for 10 — purpose-built for executive-level discussions away from show floor noise.",
      },
      {
        title: "Premium Material Palette",
        description:
          "Stone-effect flooring, fabric-wrapped acoustic panels, brushed stainless steel columns, and white Corian reception desk — every surface matched the corporate positioning.",
      },
    ],
    results: [
      "One of the most photographed stands in the specialty chemicals hall",
      "28 scheduled VIP meetings hosted in the upper-deck suite over four days",
      "Video wall content repurposed by the client for post-show marketing campaigns",
      "Contract renewed for the following year within one month of show close",
    ],
    stats: [
      { value: 100, suffix: " sqm", label: "Stand Footprint" },
      { value: 12, suffix: " sqm", label: "LED Wall" },
      { value: 28, label: "VIP Meetings" },
      { value: 4, suffix: " days", label: "Show Duration" },
    ],
    gallery: [
      asset("/assets/photos/gallery/sipchem-2.jpg"),
    ],
  },
  {
    slug: "interfood-gulfood",
    client: "Interfood",
    event: "Gulfood Manufacturing",
    title: "Interfood Gulfood Manufacturing",
    image: asset("/assets/photos/gallery/interfood-1.jpg"),
    size: "54 sqm",
    tags: ["Custom Build", "Hanging Signage", "Interactive Display"],
    location: "Dubai, UAE",
    overview:
      "A 54 sqm stand for Interfood at Gulfood Manufacturing that punched well above its weight class. A suspended hanging sign gave hall-wide visibility, while interactive kiosks and acoustic meeting pods turned visitor traffic into 340 qualified leads.",
    challenge:
      "Competing for attention in a dense hall where neighbouring stands were two to three times larger. The client also needed quiet spaces for technical product conversations — difficult to achieve on a noisy show floor.",
    solution:
      "A double-height hanging sign suspended from the venue rigging grid made the stand visible from every hall entrance, solving the size disadvantage at ceiling level. At ground level, two acoustically treated meeting pods gave the technical team quiet spaces for detailed conversations. Interactive touchscreen kiosks handled the rest — visitors browsed the product catalogue, requested samples, and left their contact details without a single printed brochure.",
    features: [
      {
        title: "Suspended Hanging Signage",
        description:
          "4-metre-wide illuminated sign suspended from the rigging grid — visible from every entrance, giving a 54 sqm stand the presence of one three times its size.",
      },
      {
        title: "Interactive Product Kiosks",
        description:
          "Touchscreen displays with a custom catalogue app, sample request functionality, and built-in lead capture — replacing brochures with qualified data.",
      },
      {
        title: "Semi-Enclosed Meeting Pods",
        description:
          "Two acoustic meeting pods seating 4 guests each, with integrated power and screens — quiet enough for technical product discussions on a loud show floor.",
      },
      {
        title: "Green Brand Integration",
        description:
          "Full stand wrapped in Interfood's signature green using tension-fabric panels — bold, lightweight, and instantly recognizable from any angle.",
      },
    ],
    results: [
      "Stand visible from every entrance to the hall via suspended signage",
      "340 qualified leads captured through interactive kiosks across three days",
      "Both meeting pods fully booked with back-to-back appointments throughout the show",
      "Client reported their most productive Gulfood Manufacturing participation to date",
    ],
    stats: [
      { value: 54, suffix: " sqm", label: "Stand Footprint" },
      { value: 340, label: "Leads Captured" },
      { value: 4, suffix: "m", label: "Hanging Sign Width" },
      { value: 3, suffix: " days", label: "Build Time" },
    ],
    gallery: [
      asset("/assets/photos/gallery/interfood-2.jpg"),
      asset("/assets/photos/gallery/interfood-3.jpg"),
      asset("/assets/photos/gallery/interfood-render-1.jpg"),
      asset("/assets/photos/gallery/interfood-render-2.jpg"),
    ],
  },
  {
    slug: "altronix-intersec",
    client: "Altronix",
    event: "Intersec",
    title: "Altronix Intersec",
    image: asset("/assets/photos/altronix-intersec.jpg"),
    size: "25 sqm",
    tags: ["Compact Design", "Security", "Long-Term Client"],
    location: "Dubai, UAE",
    overview:
      "A 25 sqm stand for Altronix at Intersec that proved you don't need a big footprint to dominate a show floor. Dramatic LED integration turned a compact island plot into a glowing beacon — and delivered a 60% increase in qualified leads over the previous year. This was our sixth consecutive build for Altronix.",
    challenge:
      "Competing against neighbours with triple the space and budget. The product range — power supplies and surge protection for CCTV — is essential but not visually exciting, so the design had to do the heavy lifting.",
    solution:
      "A continuous LED light channel wrapped the full perimeter at fascia height, creating a beacon effect visible from 30+ metres. Edge-lit acrylic panels turned individual products into illuminated display pieces. The entire structure sat on a raised platform with concealed uplighting, giving it a floating appearance that stopped foot traffic. All cabling ran through hollow aluminium extrusions — not a single wire visible anywhere.",
    features: [
      {
        title: "360-Degree LED Light Channel",
        description:
          "Full-perimeter illuminated fascia visible from 30+ metres — turning 25 sqm into the most noticeable stand in the aisle.",
      },
      {
        title: "Edge-Lit Product Displays",
        description:
          "Laser-cut acrylic panels with individual LED backlighting, making each product unit a visual feature rather than a shelf item.",
      },
      {
        title: "Floating Platform Base",
        description:
          "Raised platform with concealed perimeter uplighting — a hovering effect that drew walk-up traffic without requiring overhead signage.",
      },
      {
        title: "Clean Cable Management",
        description:
          "All power and data routed through hollow aluminium extrusions — completely wire-free surfaces that reinforced the brand's precision positioning.",
      },
    ],
    results: [
      "60% increase in qualified lead scans compared to the previous Intersec edition",
      "3x more social media photo shares than the prior year's build",
      "Average visitor dwell time of 4.5 minutes — double the show floor average",
      "Featured in Intersec's official post-show highlights reel",
    ],
    stats: [
      { value: 25, suffix: " sqm", label: "Stand Footprint" },
      { value: 60, suffix: "%", label: "Lead Increase" },
      { value: 3, suffix: "x", label: "Social Shares vs Prior Year" },
      { value: 2, suffix: " days", label: "Build Time" },
    ],
    gallery: [
      asset("/assets/photos/gallery/altronix-1.jpg"),
      asset("/assets/photos/gallery/altronix-2.jpg"),
      asset("/assets/photos/gallery/altronix-3.jpg"),
      asset("/assets/photos/gallery/altronix-render-1.jpg"),
      asset("/assets/photos/gallery/altronix-render-2.jpg"),
      asset("/assets/photos/gallery/altronix-render-3.jpg"),
      asset("/assets/photos/gallery/altronix-render-4.jpg"),
    ],
  },
];
