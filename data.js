const stores = [
  // 10001 - Chelsea / NoMad (approx: 40.7505, -73.9934)
  {
    id: 1,
    name: "Vintage Vogue",
    address: "123 Fashion Ave, New York, NY",
    zip: "10001",
    lat: 40.7505,
    lng: -73.9934,
    category: "Consignment",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "High-end designer consignment featuring Chanel, Gucci, and more.",
    rating: 4.8
  },
  {
    id: 7,
    name: "Chelsea Thrift House",
    address: "200 W 25th St, New York, NY",
    zip: "10001",
    lat: 40.7469,
    lng: -73.9942,
    category: "Thrift",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A hidden gem for affordable vintage clothing and housewares.",
    rating: 4.2
  },
  {
    id: 8,
    name: "Designer Resale",
    address: "324 E 81st St (Branch), New York, NY",
    zip: "10001",
    lat: 40.7756,
    lng: -73.9542,
    category: "Consignment",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Gently used designer fashion for women. Great deals on shoes.",
    rating: 4.5
  },

  // 11201 - Brooklyn Heights / DUMBO (approx: 40.7021, -73.9962)
  {
    id: 2,
    name: "Thrift & Thrive",
    address: "456 Green St, Brooklyn, NY",
    zip: "11201",
    lat: 40.7021,
    lng: -73.9962,
    category: "Thrift",
    image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Curated vintage finds and sustainable fashion for the eco-conscious.",
    rating: 4.5
  },
  {
    id: 9,
    name: "Brooklyn Flea Market",
    address: "80 Pearl St, Brooklyn, NY",
    zip: "11201",
    lat: 40.7012,
    lng: -73.9951,
    category: "Market",
    image: "https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Weekend market with hundreds of vendors selling vintage, antiques, and food.",
    rating: 4.7
  },
  {
    id: 10,
    name: "DUMBO Vintage",
    address: "15 Main St, Brooklyn, NY",
    zip: "11201",
    lat: 40.7033,
    lng: -73.9897,
    category: "Vintage",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Industrial-chic boutique offering hand-picked vintage denim and leather.",
    rating: 4.6
  },

  // 10021 - Upper East Side (approx: 40.7736, -73.9566)
  {
    id: 3,
    name: "The Luxe Closet",
    address: "789 Madison Ave, New York, NY",
    zip: "10021",
    lat: 40.7736,
    lng: -73.9566,
    category: "Consignment",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Luxury handbags, shoes, and accessories in pristine condition.",
    rating: 4.9
  },
  {
    id: 11,
    name: "Michael's Consignment",
    address: "1041 Madison Ave, New York, NY",
    zip: "10021",
    lat: 40.7756,
    lng: -73.9582,
    category: "Consignment",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Institution for high-end consignment since 1954.",
    rating: 4.7
  },

  // 11211 - Williamsburg (approx: 40.7081, -73.9571)
  {
    id: 4,
    name: "Retro Rewind",
    address: "321 Bedford Ave, Brooklyn, NY",
    zip: "11211",
    lat: 40.7081,
    lng: -73.9571,
    category: "Vintage",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Best of the 70s, 80s, and 90s fashion. Denim, tees, and leather.",
    rating: 4.6
  },
  {
    id: 12,
    name: "Beacon's Closet",
    address: "74 Guernsey St, Brooklyn, NY",
    zip: "11211",
    lat: 40.7105,
    lng: -73.9542,
    category: "Buy/Sell/Trade",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Massive exchange shop with a huge selection of trendy and vintage items.",
    rating: 4.4
  },
  {
    id: 13,
    name: "Awoke Vintage",
    address: "132 N 5th St, Brooklyn, NY",
    zip: "11211",
    lat: 40.7123,
    lng: -73.9601,
    category: "Vintage",
    image: "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Cute and colorful vintage shop with a great selection of accessories.",
    rating: 4.8
  },

  // 10012 - SoHo (approx: 40.7231, -73.9969)
  {
    id: 5,
    name: "Second Chance Boutique",
    address: "555 Broadway, New York, NY",
    zip: "10012",
    lat: 40.7231,
    lng: -73.9969,
    category: "Consignment",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Contemporary brands at a fraction of the price.",
    rating: 4.3
  },
  {
    id: 14,
    name: "The RealReal",
    address: "80 Wooster St, New York, NY",
    zip: "10012",
    lat: 40.7245,
    lng: -73.9982,
    category: "Luxury Consignment",
    image: "https://images.unsplash.com/photo-1549897381-5856d8b595e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Brick-and-mortar location for the luxury online consignment giant.",
    rating: 4.5
  },

  // 10003 - Union Square / East Village (approx: 40.7359, -73.9911)
  {
    id: 6,
    name: "Urban Exchange",
    address: "101 5th Ave, New York, NY",
    zip: "10003",
    lat: 40.7359,
    lng: -73.9911,
    category: "Buy/Sell/Trade",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Trendy street style and casual wear for men and women.",
    rating: 4.4
  },
  {
    id: 15,
    name: "Buffalo Exchange",
    address: "332 E 11th St, New York, NY",
    zip: "10003",
    lat: 40.7296,
    lng: -73.9834,
    category: "Buy/Sell/Trade",
    image: "https://images.unsplash.com/photo-1576188973526-0e5d7047b0cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Chain known for buying and selling trendy secondhand clothing.",
    rating: 4.1
  },

  // 20001 - Downtown Washington, DC
  {
    id: 16,
    name: "Georgetown Consignment",
    address: "1234 M St NW, Washington, DC",
    zip: "20001",
    lat: 38.9047,
    lng: -77.0414,
    category: "Consignment",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Luxury consignment in the heart of Georgetown featuring designer pieces.",
    rating: 4.7
  },
  {
    id: 17,
    name: "Dupont Circle Thrift",
    address: "1500 Connecticut Ave NW, Washington, DC",
    zip: "20036",
    lat: 38.9098,
    lng: -77.0433,
    category: "Thrift",
    image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Curated thrift finds in Dupont Circle. Great selection of vintage and contemporary pieces.",
    rating: 4.3
  },

  // 22314 - Alexandria, Virginia
  {
    id: 18,
    name: "Old Town Vintage",
    address: "123 King St, Alexandria, VA",
    zip: "22314",
    lat: 38.8048,
    lng: -77.0469,
    category: "Vintage",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Vintage clothing and accessories in historic Old Town Alexandria.",
    rating: 4.6
  },
  {
    id: 19,
    name: "Virginia Consignment Boutique",
    address: "456 Washington St, Alexandria, VA",
    zip: "22314",
    lat: 38.8065,
    lng: -77.0442,
    category: "Consignment",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Designer consignment with a focus on professional and evening wear.",
    rating: 4.5
  },

  // 20814 - Bethesda, Maryland
  {
    id: 20,
    name: "Bethesda Luxury Consignment",
    address: "456 Wisconsin Ave, Bethesda, MD",
    zip: "20814",
    lat: 38.9847,
    lng: -77.0947,
    category: "Consignment",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "High-end designer consignment in Bethesda. Specializing in luxury brands.",
    rating: 4.8
  },
  {
    id: 21,
    name: "Maryland Thrift Exchange",
    address: "789 Bethesda Ave, Bethesda, MD",
    zip: "20814",
    lat: 38.9821,
    lng: -77.0965,
    category: "Thrift",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Community-focused thrift store with great finds for the whole family.",
    rating: 4.2
  }
];
