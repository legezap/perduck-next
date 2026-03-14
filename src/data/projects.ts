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
      asset("/assets/photos/gallery/microsoft-IMG_3103.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3106.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3107.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3111.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3161.jpg"),
      asset("/assets/photos/gallery/microsoft-AAA00001.jpg"),
      asset("/assets/photos/gallery/microsoft-AAA00052.jpg"),
      asset("/assets/photos/gallery/microsoft-render-1.jpg"),
      asset("/assets/photos/gallery/microsoft-render-2.jpg"),
      asset("/assets/photos/gallery/microsoft-render-3.jpg"),
      asset("/assets/photos/gallery/microsoft-render-4.jpg"),
      asset("/assets/photos/gallery/microsoft-render-5.jpg"),
      asset("/assets/photos/gallery/microsoft-render-6.jpg"),
      asset("/assets/photos/gallery/microsoft-render-7.jpg"),
      asset("/assets/photos/gallery/microsoft-render-8.jpg"),
      asset("/assets/photos/gallery/microsoft-floorplan-1.jpg"),
    ],
  },
  {
    slug: "nespresso-creatista",
    client: "Nespresso",
    event: "CreatistaPlus Launch",
    title: "Nespresso CreatistaPlus Launch",
    image: asset("/assets/photos/gallery/nespresso-NES-1239.jpg"),
    size: "180 sqm",
    tags: ["Event Production", "Premium Launch", "Brand Experience"],
    location: "Dubai, UAE",
    overview:
      "A 180 sqm premium product launch event for Nespresso's CreatistaPlus machine, staged at a five-star hotel venue in Dubai. The experience combined a cocktail bar, live barista stations, curated photo zones, and an intimate keynote area — designed to make media, influencers, and VIP guests feel the brand's luxury positioning from the moment they walked in.",
    challenge:
      "Creating a multi-sensory brand world inside a hotel ballroom with low ceilings and limited rigging points. The client needed distinct zones — welcome, product reveal, tasting bar, photo opportunity, and networking lounge — to flow naturally without physical barriers, while maintaining a sense of exclusivity and visual polish worthy of the Nespresso brand.",
    solution:
      "We built a freestanding architectural framework using slim 60x60mm black steel profiles with integrated LED strip channels, creating glowing archways that guided guests through each zone without walls. The cocktail bar was fabricated from brushed copper-finish panels with backlit Nespresso branding, while the photo zone used a 4-metre floral wall as its backdrop. All lighting was pre-programmed on a DMX timeline synced to the event runsheet.",
    features: [
      {
        title: "Freestanding Architectural Framework",
        description:
          "Slim 60x60mm black steel profiles with integrated RGBW LED channels, creating illuminated archways that defined event zones without obstructing sightlines.",
      },
      {
        title: "Copper-Finish Cocktail Bar",
        description:
          "Brushed copper laminate over MDF with integrated LED branding panels, built-in refrigeration, and a custom-shaped countertop for barista demonstrations.",
      },
      {
        title: "4-Metre Floral Photo Wall",
        description:
          "Premium artificial floral installation mounted on a steel subframe with concealed uplighting, creating an Instagram-ready backdrop for guests.",
      },
      {
        title: "DMX-Synced Event Lighting",
        description:
          "Full DMX lighting rig pre-programmed to a show timeline, transitioning between welcome, reveal, tasting, and networking phases automatically.",
      },
    ],
    results: [
      "Event hosted 200+ VIP guests including top-tier media and influencers",
      "Generated over 50 pieces of earned media coverage within 48 hours",
      "Photo zone content shared over 2,000 times on social media",
      "Client rated the event production a 10/10 in post-event debrief",
    ],
    stats: [
      { value: 180, suffix: " sqm", label: "Event Footprint" },
      { value: 200, suffix: "+", label: "VIP Guests" },
      { value: 2000, suffix: "+", label: "Social Shares" },
      { value: 50, suffix: "+", label: "Media Placements" },
    ],
    gallery: [
      asset("/assets/photos/gallery/nespresso-NES-102.jpg"),
      asset("/assets/photos/gallery/nespresso-NES-106.jpg"),
      asset("/assets/photos/gallery/nespresso-NES-135.jpg"),
      asset("/assets/photos/gallery/nespresso-NES-163.jpg"),
      asset("/assets/photos/gallery/nespresso-NES-297.jpg"),
      asset("/assets/photos/gallery/nespresso-NES-963.jpg"),
      asset("/assets/photos/gallery/nespresso-NES-1070.jpg"),
      asset("/assets/photos/gallery/nespresso-NES-1085.jpg"),
      asset("/assets/photos/gallery/nespresso-NES-1127.jpg"),
      asset("/assets/photos/gallery/nespresso-NES-1196.jpg"),
      asset("/assets/photos/gallery/nespresso-NES-1207.jpg"),
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
    gallery: [
      asset("/assets/photos/gallery/vanderlande-1.jpg"),
      asset("/assets/photos/gallery/vanderlande-2.jpg"),
      asset("/assets/photos/gallery/vanderlande-3.jpg"),
      asset("/assets/photos/gallery/vanderlande-4.jpg"),
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
    gallery: [
      asset("/assets/photos/gallery/spark-build-1.jpg"),
      asset("/assets/photos/gallery/spark-build-2.jpg"),
      asset("/assets/photos/gallery/spark-build-3.jpg"),
    ],
  },
  {
    slug: "hoosh-world-of-vape",
    client: "HOOSH",
    event: "World of Vape",
    title: "HOOSH — World of Vape",
    image: asset("/assets/photos/gallery/hoosh-1.jpg"),
    size: "36 sqm",
    tags: ["Retail Design", "LED Signage", "Product Wall"],
    location: "Dubai, UAE",
    overview:
      "A 36 sqm retail-style exhibition stand for HOOSH at World of Vape, designed to showcase their full product range in a format that felt more like a premium vape boutique than a standard trade show booth. The stand featured a full-width product wall, LED-backlit signage, and a tasting bar where visitors could sample products hands-on.",
    challenge:
      "Standing out in a crowded hall where every competitor used similar black-and-neon aesthetics. HOOSH needed a stand that communicated quality and trust — critical differentiators in the vape industry — while displaying over 60 SKUs in a way that invited browsing rather than overwhelming visitors.",
    solution:
      "We designed a clean, warm retail environment using matte white surfaces with brushed brass accents, deliberately contrasting the dark industrial look used by most competitors. The product wall used individually backlit acrylic shelving with integrated price rails, while the overhead LED lightbox panel provided even illumination across the entire display. A curved tasting counter with built-in USB charging invited visitors to stay longer.",
    features: [
      {
        title: "Retail-Style Product Wall",
        description:
          "Full-width modular shelving system with individual LED backlighting for each product bay, displaying 60+ SKUs in a browsable retail format.",
      },
      {
        title: "LED Lightbox Signage",
        description:
          "Overhead frameless LED lightbox spanning the full width of the stand, with edge-lit branding visible from 25+ metres across the show floor.",
      },
      {
        title: "Curved Tasting Counter",
        description:
          "Brushed brass-finish counter with integrated USB charging ports, product testers, and a built-in waste collection system for sampling.",
      },
      {
        title: "Warm Retail Palette",
        description:
          "Matte white surfaces with brushed brass hardware and warm 3000K lighting, creating a premium boutique feel that stood apart from competitors.",
      },
    ],
    results: [
      "Highest footfall of any stand in the vape hall across both show days",
      "Average visitor dwell time of 6 minutes — triple the hall average",
      "Client signed 12 new distribution deals directly from on-stand meetings",
      "Stand design was reused for three follow-up trade shows",
    ],
    stats: [
      { value: 36, suffix: " sqm", label: "Stand Footprint" },
      { value: 60, suffix: "+", label: "Products Displayed" },
      { value: 12, label: "Deals Signed" },
      { value: 6, suffix: " min", label: "Avg Dwell Time" },
    ],
    gallery: [
      asset("/assets/photos/gallery/hoosh-2.jpg"),
      asset("/assets/photos/gallery/hoosh-3.jpg"),
      asset("/assets/photos/gallery/hoosh-4.jpg"),
      asset("/assets/photos/gallery/hoosh-5.jpg"),
      asset("/assets/photos/gallery/hoosh-6.jpg"),
      asset("/assets/photos/gallery/hoosh-7.jpg"),
      asset("/assets/photos/gallery/hoosh-8.jpg"),
      asset("/assets/photos/gallery/hoosh-9.jpg"),
      asset("/assets/photos/gallery/hoosh-10.jpg"),
      asset("/assets/photos/gallery/hoosh-render-1.jpg"),
      asset("/assets/photos/gallery/hoosh-render-2.jpg"),
      asset("/assets/photos/gallery/hoosh-render-3.jpg"),
      asset("/assets/photos/gallery/hoosh-render-4.jpg"),
      asset("/assets/photos/gallery/hoosh-render-5.jpg"),
      asset("/assets/photos/gallery/hoosh-render-6.jpg"),
      asset("/assets/photos/gallery/hoosh-render-7.jpg"),
      asset("/assets/photos/gallery/hoosh-floorplan-1.jpg"),
    ],
  },
  {
    slug: "sipchem-adipec",
    client: "Sipchem",
    event: "ADIPEC",
    title: "Sipchem — ADIPEC",
    image: asset("/assets/photos/gallery/sipchem-1.jpg"),
    size: "90 sqm",
    tags: ["Double Decker", "LED Video Wall", "Premium Finish"],
    location: "Abu Dhabi, UAE",
    overview:
      "A 90 sqm double-decker stand for Sipchem at ADIPEC, designed to project the company's position as a leading Saudi petrochemical player on the global stage. The ground floor combined an open reception with product display zones, while the upper deck housed VIP meeting rooms and a hospitality lounge — all anchored by a striking LED video wall visible from two aisles.",
    challenge:
      "Communicating the scale and technical sophistication of a petrochemical company within a 90 sqm island plot surrounded by much larger competitors. The stand needed to project corporate authority while remaining approachable, and the double-decker structure had to comply with both ADNEC venue regulations and Abu Dhabi Civil Defence requirements for upper-deck occupancy.",
    solution:
      "We designed a bold architectural form using a cantilevered upper deck that extended beyond the ground-floor footprint, creating an imposing visual presence and additional covered meeting space below. The 12 sqm LED video wall ran custom content showing Sipchem's facilities and product range, serving as a visual anchor visible from the main thoroughfare. Premium finishes — stone-effect flooring, fabric-wrapped acoustic panels, and brushed stainless steel trims — reinforced the corporate positioning.",
    features: [
      {
        title: "Cantilevered Upper Deck",
        description:
          "Upper level extending 1.5m beyond the ground-floor perimeter, creating a dramatic overhang and additional sheltered space at ground level.",
      },
      {
        title: "12 sqm LED Video Wall",
        description:
          "2.9mm pixel-pitch LED panels running custom-produced content showcasing Sipchem's plants, products, and sustainability initiatives.",
      },
      {
        title: "VIP Meeting Suite",
        description:
          "Upper-level meeting room with acoustic glazing, integrated AV, and lounge seating for 10 guests, offering privacy for executive-level discussions.",
      },
      {
        title: "Premium Material Palette",
        description:
          "Stone-effect raised flooring, fabric-wrapped wall panels, brushed stainless steel columns, and custom-built reception desk in white Corian.",
      },
    ],
    results: [
      "Stand was one of the most photographed in the petrochemical hall",
      "Upper-deck meeting room hosted 28 scheduled meetings over four days",
      "LED video wall content was repurposed by the client for post-show marketing",
      "Client renewed for the following year's ADIPEC within one month of the show",
    ],
    stats: [
      { value: 90, suffix: " sqm", label: "Stand Footprint" },
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
    title: "Interfood — Gulfood Manufacturing",
    image: asset("/assets/photos/gallery/interfood-1.jpg"),
    size: "54 sqm",
    tags: ["Custom Build", "Hanging Signage", "Interactive Display"],
    location: "Dubai, UAE",
    overview:
      "A 54 sqm custom-build stand for Interfood at Gulfood Manufacturing, Dubai's largest food processing and packaging trade fair. The design centered on the client's signature green branding, with a dramatic suspended signage structure and interactive product displays that showcased their ingredient solutions for the food manufacturing industry.",
    challenge:
      "Creating strong brand visibility in a dense exhibition hall where competitors occupied plots two to three times the size. Interfood's product range — food ingredients and processing solutions — required both visual impact and the ability for technical staff to conduct detailed product conversations without interruption from show floor noise.",
    solution:
      "We designed a double-height hanging sign structure suspended from the venue rigging grid, giving the stand a presence visible from across the entire hall. At ground level, the stand combined an open product display zone with two semi-enclosed meeting pods, each acoustically treated with fabric-wrapped panels. Interactive touchscreen kiosks let visitors explore the product catalogue and request samples digitally, reducing brochure waste and capturing qualified leads automatically.",
    features: [
      {
        title: "Suspended Hanging Signage",
        description:
          "4-metre-wide double-sided hanging sign with internal LED illumination, suspended from the venue rigging grid for maximum visibility across the hall.",
      },
      {
        title: "Interactive Product Kiosks",
        description:
          "Two 32-inch touchscreen displays running a custom product catalogue app with sample request functionality and built-in lead capture.",
      },
      {
        title: "Semi-Enclosed Meeting Pods",
        description:
          "Two meeting pods with fabric-wrapped acoustic panels, each seating 4 guests with integrated power and display screens for presentations.",
      },
      {
        title: "Green Brand Integration",
        description:
          "Full stand wrapped in Interfood's signature green with white accents, using printed tension-fabric panels for lightweight, vibrant colour reproduction.",
      },
    ],
    results: [
      "Hanging signage made the stand visible from every entrance to the hall",
      "Interactive kiosks captured 340 qualified leads across three show days",
      "Meeting pods were fully booked with back-to-back appointments throughout",
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
      asset("/assets/photos/gallery/interfood-4.jpg"),
      asset("/assets/photos/gallery/interfood-5.jpg"),
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
