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
}

export const projects: Project[] = [
  {
    slug: "microsoft-leap",
    client: "Microsoft",
    event: "LEAP",
    title: "Microsoft LEAP",
    image: asset("/assets/photos/microsoft-leap.jpg"),
    size: "700 sqm",
    tags: ["Double Decker", "LED Integration", "Custom Build"],
    location: "Riyadh, Saudi Arabia",
    overview:
      "A 700 sqm double-decker pavilion for Microsoft at LEAP, Saudi Arabia's flagship technology conference. The structure served as a fully immersive brand environment featuring live demos, executive meeting suites, a keynote theatre, and a 360-degree LED experience zone spanning both levels.",
    challenge:
      "Designing and engineering a two-storey structure within a tight 10-day venue access window, while meeting Saudi Civil Defence load and fire safety requirements. The upper deck needed to support 350 kg/sqm live loading for meeting rooms and a hospitality lounge, and the entire LED content pipeline had to sync across 42 individual panels driven by a single Barco media server.",
    solution:
      "We engineered the superstructure around 200x200mm steel I-beams with IPE 240 cross-members, pre-fabricated in our Dubai workshop and shipped flat-pack to Riyadh. The LED wall used 2.6mm pitch panels totalling 68 sqm of seamless display area, calibrated on-site over two overnight sessions. A 400A three-phase power distribution system fed all AV, lighting, and HVAC independently to prevent brownouts during peak demo hours.",
    features: [
      {
        title: "Double-Decker Superstructure",
        description:
          "200x200mm steel I-beams with IPE 240 cross-members, engineered for 350 kg/sqm upper-deck loading with integrated cable management channels.",
      },
      {
        title: "68 sqm LED Experience Wall",
        description:
          "2.6mm pixel-pitch LED panels driven by a Barco E2 media server, delivering synchronized content across 42 individually mapped display zones.",
      },
      {
        title: "320 sqm Printed Graphics",
        description:
          "Tension-fabric lightboxes and direct-print wall panels using UV-cured inks on flame-retardant substrates, installed in modular cassettes for rapid swap-out.",
      },
      {
        title: "400A Power Distribution",
        description:
          "Three-phase 400A main feed split across six sub-distribution boards, each with independent RCD protection for AV, lighting, HVAC, and catering circuits.",
      },
    ],
    results: [
      "Completed full installation in 5 days with a 35-person crew, one day ahead of schedule",
      "Zero safety incidents across build, show, and dismantle phases",
      "Hosted over 8,000 visitor interactions across the 4-day event",
      "Client re-booked for the following year within two weeks of show close",
    ],
    stats: [
      { value: 700, suffix: " sqm", label: "Stand Footprint" },
      { value: 35, label: "Installation Crew" },
      { value: 68, suffix: " sqm", label: "LED Display Area" },
      { value: 5, suffix: " days", label: "Build Time" },
    ],
  },
  {
    slug: "vanderlande-airport",
    client: "Vanderlande",
    event: "Airport Show",
    title: "Vanderlande Airport Show",
    image: asset("/assets/photos/vanderlande-airport.jpg"),
    size: "60 sqm",
    tags: ["Double Decker", "Product Demo", "Architectural"],
    location: "Dubai, UAE",
    overview:
      "A 60 sqm double-decker stand for Vanderlande at the Dubai Airport Show, designed to showcase their baggage handling and logistics automation systems. The stand featured a working conveyor demo on the ground floor and a private meeting area on the upper level, connected by an architectural floating staircase.",
    challenge:
      "Integrating a live baggage handling conveyor system into a compact 60 sqm footprint while maintaining a premium architectural aesthetic. The upper meeting deck needed acoustic separation from the noisy demo area below, and the freestanding staircase had to meet DCD evacuation width requirements without eating into valuable display space.",
    solution:
      "We built the frame on 150x150mm steel columns with a composite timber-over-steel upper deck, achieving the required 250 kg/sqm loading in a slim 180mm floor build-up. The staircase was fabricated as a self-supporting steel mono-stringer with glass balustrades, pre-assembled and craned into position in a single lift. Acoustic panels lined the upper meeting room ceiling, reducing ground-floor demo noise by 18 dB.",
    features: [
      {
        title: "Architectural Floating Staircase",
        description:
          "Self-supporting steel mono-stringer with 12mm tempered glass balustrades and integrated LED strip lighting under each tread.",
      },
      {
        title: "Live Conveyor Demo Integration",
        description:
          "Working baggage handling conveyor system embedded into the stand floor with concealed power and data connections, running continuously throughout the show.",
      },
      {
        title: "Upper Meeting Suite",
        description:
          "Acoustically treated private meeting area on the upper deck with built-in AV presentation system and lounge seating for 8 guests.",
      },
      {
        title: "Slim-Profile Double Deck",
        description:
          "Composite timber-over-steel deck achieving 250 kg/sqm loading within a 180mm floor build-up, maximizing headroom on both levels.",
      },
    ],
    results: [
      "Stand attracted consistent visitor flow across all three show days",
      "Live demo generated the highest engagement rate on the exhibition floor",
      "Upper meeting suite hosted 24 scheduled meetings with airline procurement teams",
      "Client rated the project 10/10 in post-show feedback survey",
    ],
    stats: [
      { value: 60, suffix: " sqm", label: "Stand Footprint" },
      { value: 2, label: "Levels" },
      { value: 24, label: "Meetings Hosted" },
      { value: 3, suffix: " days", label: "Build Time" },
    ],
  },
  {
    slug: "spark-breakbulk",
    client: "Spark",
    event: "Breakbulk Middle East",
    title: "Spark Breakbulk ME",
    image: asset("/assets/photos/spark-breakbulk.jpg"),
    size: "60 sqm",
    tags: ["Custom Build", "Industrial Design", "Container Concept"],
    location: "Dubai, UAE",
    overview:
      "A 60 sqm custom-build stand for Spark at Breakbulk Middle East, inspired by shipping container architecture to reflect the client's logistics and freight forwarding identity. The design combined raw industrial materials with polished meeting spaces, creating a memorable visual contrast on the show floor.",
    challenge:
      "Translating a shipping container aesthetic into a functional exhibition environment without the stand feeling dark, cramped, or gimmicky. The client needed three separate meeting zones, a reception counter, and a product showcase area — all within 60 sqm — while maintaining clear sightlines from the main aisle.",
    solution:
      "We fabricated Corten-effect steel panels using weathering-finish laminates over lightweight MDF substrates, achieving the rusted container look at a fraction of the weight. Strategic cutaways and floor-to-ceiling glazed sections broke up the container forms and flooded the interior with light. Corrugated metal cladding on accent walls was sourced from actual industrial sheet stock, CNC-cut and powder-coated on-site.",
    features: [
      {
        title: "Corten-Effect Panel System",
        description:
          "Weathering-finish laminates bonded to 18mm MDF, CNC-routed to replicate corrugation patterns, delivering authentic industrial aesthetics at under 12 kg/sqm.",
      },
      {
        title: "Tri-Zone Meeting Layout",
        description:
          "Three acoustically separated meeting areas arranged around a central hub, each with power, data, and integrated display screens.",
      },
      {
        title: "Industrial Material Palette",
        description:
          "Mix of corrugated metal cladding, perforated steel mesh, exposed cable trays, and polished concrete-effect flooring for an authentic warehouse feel.",
      },
      {
        title: "Open-Plan Reception",
        description:
          "Full-width reception counter in blackened steel with backlit Spark branding and integrated product display shelving.",
      },
    ],
    results: [
      "Named one of the top 5 stand designs at Breakbulk ME by event organizers",
      "Stand footfall exceeded client projections by 40%",
      "All three meeting rooms were fully booked across both show days",
      "Design concept reused for two subsequent regional exhibitions",
    ],
    stats: [
      { value: 60, suffix: " sqm", label: "Stand Footprint" },
      { value: 3, label: "Meeting Zones" },
      { value: 40, suffix: "%", label: "Above Footfall Target" },
      { value: 2, suffix: " days", label: "Build Time" },
    ],
  },
  {
    slug: "altronix-intersec",
    client: "Altronix",
    event: "Intersec",
    title: "Altronix Intersec",
    image: asset("/assets/photos/altronix-intersec.jpg"),
    size: "25 sqm",
    tags: ["LED Integration", "Compact Design", "Security"],
    location: "Dubai, UAE",
    overview:
      "A 25 sqm compact stand for Altronix at Intersec, Dubai's leading security, safety, and fire protection trade fair. The design centered on dramatic blue LED integration that turned a small footprint into one of the most visually striking presences on the show floor, reflecting Altronix's position in power and surveillance infrastructure.",
    challenge:
      "Making a 25 sqm island stand compete visually against neighbours with triple the floor space and budget. The client's product range — power supplies and surge protection for CCTV systems — is technically dense but visually undramatic, requiring a design language that communicated innovation and reliability without relying on the products themselves as visual anchors.",
    solution:
      "We wrapped the stand in a continuous LED light channel running at fascia height, programmable in colour and intensity to create a glowing beacon effect visible from 30+ metres. Product displays were backlit in matching blue tones using edge-lit acrylic panels. The entire structure was built on a raised platform with concealed perimeter lighting, giving the stand a floating appearance. All wiring ran through hollow aluminium extrusions, keeping the surfaces completely clean.",
    features: [
      {
        title: "360-Degree LED Light Channel",
        description:
          "Continuous RGBW LED strip in custom aluminium extrusion running the full perimeter at fascia height, programmable for colour cycling and intensity control.",
      },
      {
        title: "Edge-Lit Product Displays",
        description:
          "12mm laser-cut acrylic panels with edge-lit LED illumination, each housing individual Altronix power supply units with spec callouts etched into the surface.",
      },
      {
        title: "Floating Platform Base",
        description:
          "Raised platform with concealed perimeter LED uplighting, creating a hovering effect that drew attention from the main aisle without any overhead signage.",
      },
      {
        title: "Clean Cable Management",
        description:
          "All power and data cabling routed through hollow 40x40mm aluminium extrusions integrated into the wall structure, achieving a completely wire-free visible surface.",
      },
    ],
    results: [
      "Stand generated 3x more photo shares on social media than the previous year's build",
      "Visitor dwell time averaged 4.5 minutes — double the show floor average",
      "Client reported a 60% increase in qualified lead scans compared to prior Intersec",
      "Design featured in Intersec's official post-show highlights reel",
    ],
    stats: [
      { value: 25, suffix: " sqm", label: "Stand Footprint" },
      { value: 60, suffix: "%", label: "Lead Increase" },
      { value: 3, suffix: "x", label: "Social Shares vs Prior Year" },
      { value: 2, suffix: " days", label: "Build Time" },
    ],
  },
  {
    slug: "absolut-skandic",
    client: "Absolut Skandic",
    event: "Light + Building ME",
    title: "Absolut Skandic L+B ME",
    image: asset("/assets/photos/absolut-skandic.jpg"),
    size: "30 sqm",
    tags: ["Lighting Design", "Interactive", "Product Showcase"],
    location: "Dubai, UAE",
    overview:
      "A 30 sqm lighting showcase for Absolut Skandic at Light + Building Middle East, designed as a walk-through experience where visitors could interact with the client's full range of architectural and decorative luminaires in realistic room settings. The stand doubled as both a product showroom and an immersive demonstration of what their lighting could achieve.",
    challenge:
      "Displaying over 40 lighting products in a 30 sqm space without creating a cluttered showroom feel. Each product needed to be experienced in its intended context — accent lighting in a living room vignette, task lighting in a kitchen scene, decorative pendants in a hospitality setting — while allowing visitors to control dimming, colour temperature, and beam angles in real time.",
    solution:
      "We divided the stand into four themed zones, each built as a partial room set with realistic finishes — oak-effect flooring, plaster-texture walls, marble-look countertops. A custom DALI lighting control system linked all products to four iPad stations, letting visitors adjust any fixture in the zone with a tap. Track-mounted power rails above each zone allowed products to be hot-swapped between show days without any re-wiring.",
    features: [
      {
        title: "Four Themed Experience Zones",
        description:
          "Residential, hospitality, office, and retail vignettes with realistic material finishes, each showcasing 10+ luminaires in their intended application context.",
      },
      {
        title: "Interactive DALI Control System",
        description:
          "Custom DALI-2 lighting control linked to four iPad stations, allowing visitors to adjust dimming, CCT (2700K-6500K), and beam angles for every fixture in real time.",
      },
      {
        title: "Hot-Swap Track Power Rails",
        description:
          "Ceiling-mounted electrified tracks allowing products to be repositioned or swapped between show days without tools or re-wiring.",
      },
      {
        title: "Ambient Blackout Design",
        description:
          "Perimeter walls lined with matte black acoustic fabric to eliminate ambient light spill, ensuring each zone's lighting told its own story without interference.",
      },
    ],
    results: [
      "Visitors spent an average of 7 minutes on-stand — the highest dwell time in the lighting hall",
      "Interactive controls were used over 1,200 times across the 3-day show",
      "Client signed 6 new distribution agreements directly attributed to on-stand meetings",
      "Stand design was featured in regional lighting industry press coverage",
    ],
    stats: [
      { value: 30, suffix: " sqm", label: "Stand Footprint" },
      { value: 40, suffix: "+", label: "Products Displayed" },
      { value: 1200, suffix: "+", label: "Interactive Sessions" },
      { value: 6, label: "Deals Signed On-Stand" },
    ],
  },
  {
    slug: "ikgroup-adipec",
    client: "IK Group",
    event: "ADIPEC",
    title: "IK Group ADIPEC",
    image: asset("/assets/photos/ikgroup-adipec.jpg"),
    size: "45 sqm",
    tags: ["Oil & Gas", "Technical Display", "Custom Build"],
    location: "Abu Dhabi, UAE",
    overview:
      "A 45 sqm custom-build stand for IK Group at ADIPEC, the world's largest oil and gas exhibition. The design balanced technical credibility with approachable aesthetics, featuring physical product displays of valves, fittings, and pipeline components alongside digital presentations of the company's project portfolio across the GCC region.",
    challenge:
      "IK Group's products — industrial valves, flanges, and pipe fittings — are heavy, utilitarian items that don't naturally lend themselves to attractive exhibition display. The stand needed to present these products as precision-engineered components rather than commodity hardware, while also accommodating a secure storage area for high-value sample inventory and a private meeting room for sensitive procurement discussions.",
    solution:
      "We designed a museum-style product display system using individual illuminated plinths with tempered glass covers, each housing a single hero product with technical spec cards printed on brushed aluminium panels. The stand's material language — brushed stainless steel trims, anthracite-tinted glass partitions, and charcoal stone-effect flooring — reinforced the industrial premium positioning. A secure back-of-house area with lockable roller shutters stored reserve inventory, while a fully enclosed meeting room with acoustic glazing provided privacy for procurement negotiations.",
    features: [
      {
        title: "Museum-Style Product Display",
        description:
          "Individual illuminated plinths with tempered glass covers and brushed aluminium spec panels, elevating industrial hardware into a premium presentation format.",
      },
      {
        title: "Secure Back-of-House Storage",
        description:
          "Lockable storage area with roller shutter access, climate-controlled to protect high-value valve and fitting samples from exhibition hall temperature swings.",
      },
      {
        title: "Acoustic Private Meeting Room",
        description:
          "Fully enclosed meeting room with 10mm acoustic-laminated glass partitions, integrated AV system, and seating for 6 around a built-in presentation table.",
      },
      {
        title: "Industrial Premium Material Palette",
        description:
          "Brushed stainless steel trims, anthracite-tinted glass, charcoal stone-effect raised flooring, and gunmetal fabric wall panels throughout.",
      },
    ],
    results: [
      "Stand received consistent traffic from major NOC and EPC procurement teams",
      "Private meeting room hosted 18 scheduled meetings over the 4-day show",
      "Product display format was adopted as IK Group's standard for all subsequent exhibitions",
      "Client reported the strongest ADIPEC lead pipeline in their company history",
    ],
    stats: [
      { value: 45, suffix: " sqm", label: "Stand Footprint" },
      { value: 18, label: "Scheduled Meetings" },
      { value: 4, suffix: " days", label: "Show Duration" },
      { value: 12, label: "Products Showcased" },
    ],
  },
];
