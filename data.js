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
  },

  // EAST COAST - Boston, MA
  // 02108 - Downtown Boston
  {
    id: 22,
    name: "Boston Consignment Co",
    address: "123 Newbury St, Boston, MA",
    zip: "02108",
    lat: 42.3523,
    lng: -71.0756,
    category: "Consignment",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Upscale consignment on Newbury Street featuring designer brands.",
    rating: 4.6
  },
  {
    id: 23,
    name: "The Garment District",
    address: "200 Broadway, Cambridge, MA",
    zip: "02139",
    lat: 42.3736,
    lng: -71.1189,
    category: "Thrift",
    image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Massive thrift store with clothing by the pound. Great for students.",
    rating: 4.4
  },

  // Philadelphia, PA
  // 19103 - Center City
  {
    id: 24,
    name: "Philly Thrift",
    address: "456 Walnut St, Philadelphia, PA",
    zip: "19103",
    lat: 39.9496,
    lng: -75.1503,
    category: "Thrift",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Curated thrift finds in the heart of Philadelphia.",
    rating: 4.3
  },
  {
    id: 25,
    name: "Rittenhouse Consignment",
    address: "789 Chestnut St, Philadelphia, PA",
    zip: "19106",
    lat: 39.9526,
    lng: -75.1652,
    category: "Consignment",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Luxury consignment in Rittenhouse Square.",
    rating: 4.7
  },

  // Baltimore, MD
  // 21202 - Inner Harbor
  {
    id: 26,
    name: "Baltimore Vintage",
    address: "234 Light St, Baltimore, MD",
    zip: "21202",
    lat: 39.2904,
    lng: -76.6122,
    category: "Vintage",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Vintage clothing and accessories near Inner Harbor.",
    rating: 4.5
  },

  // Atlanta, GA
  // 30309 - Midtown
  {
    id: 27,
    name: "Atlanta Consignment Boutique",
    address: "567 Peachtree St NE, Atlanta, GA",
    zip: "30309",
    lat: 33.7756,
    lng: -84.3863,
    category: "Consignment",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Designer consignment in Midtown Atlanta.",
    rating: 4.6
  },
  {
    id: 28,
    name: "Rag-O-Rama",
    address: "890 Ponce de Leon Ave, Atlanta, GA",
    zip: "30306",
    lat: 33.7719,
    lng: -84.3656,
    category: "Buy/Sell/Trade",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Buy, sell, and trade trendy clothing in Atlanta.",
    rating: 4.4
  },

  // Miami, FL
  // 33139 - South Beach
  {
    id: 29,
    name: "Miami Beach Consignment",
    address: "123 Lincoln Rd, Miami Beach, FL",
    zip: "33139",
    lat: 25.7907,
    lng: -80.1300,
    category: "Consignment",
    image: "https://images.unsplash.com/photo-1549897381-5856d8b595e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Luxury consignment on South Beach. Designer swimwear and resort wear.",
    rating: 4.8
  },

  // MIDWEST - Chicago, IL
  // 60611 - Gold Coast
  {
    id: 30,
    name: "Chicago Consignment",
    address: "456 Rush St, Chicago, IL",
    zip: "60611",
    lat: 41.8998,
    lng: -87.6253,
    category: "Consignment",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "High-end consignment in Chicago's Gold Coast.",
    rating: 4.7
  },
  {
    id: 31,
    name: "Village Discount Outlet",
    address: "789 Milwaukee Ave, Chicago, IL",
    zip: "60622",
    lat: 41.9008,
    lng: -87.6728,
    category: "Thrift",
    image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Chicago's largest thrift chain with multiple locations.",
    rating: 4.2
  },

  // Detroit, MI
  // 48226 - Downtown
  {
    id: 32,
    name: "Detroit Thrift",
    address: "234 Woodward Ave, Detroit, MI",
    zip: "48226",
    lat: 42.3314,
    lng: -83.0458,
    category: "Thrift",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Affordable thrift finds in downtown Detroit.",
    rating: 4.3
  },

  // Minneapolis, MN
  // 55403 - Uptown
  {
    id: 33,
    name: "Uptown Consignment",
    address: "567 Hennepin Ave, Minneapolis, MN",
    zip: "55403",
    lat: 44.9778,
    lng: -93.2650,
    category: "Consignment",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Curated consignment in Minneapolis Uptown.",
    rating: 4.5
  },

  // SOUTH - Nashville, TN
  // 37203 - Music Row
  {
    id: 34,
    name: "Nashville Thrift",
    address: "123 Music Square E, Nashville, TN",
    zip: "37203",
    lat: 36.1627,
    lng: -86.7816,
    category: "Thrift",
    image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Vintage and thrift finds in Music City.",
    rating: 4.4
  },

  // Dallas, TX
  // 75201 - Downtown
  {
    id: 35,
    name: "Dallas Consignment",
    address: "456 Main St, Dallas, TX",
    zip: "75201",
    lat: 32.7767,
    lng: -96.7970,
    category: "Consignment",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Designer consignment in downtown Dallas.",
    rating: 4.6
  },
  {
    id: 36,
    name: "Buffalo Exchange Dallas",
    address: "789 Greenville Ave, Dallas, TX",
    zip: "75206",
    lat: 32.8354,
    lng: -96.7694,
    category: "Buy/Sell/Trade",
    image: "https://images.unsplash.com/photo-1576188973526-0e5d7047b0cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Buy, sell, trade trendy clothing in Dallas.",
    rating: 4.3
  },

  // Houston, TX
  // 77002 - Downtown
  {
    id: 37,
    name: "Houston Thrift",
    address: "234 Main St, Houston, TX",
    zip: "77002",
    lat: 29.7604,
    lng: -95.3698,
    category: "Thrift",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Large selection of thrift finds in Houston.",
    rating: 4.2
  },

  // Austin, TX
  // 78701 - Downtown
  {
    id: 38,
    name: "Austin Vintage",
    address: "567 Congress Ave, Austin, TX",
    zip: "78701",
    lat: 30.2672,
    lng: -97.7431,
    category: "Vintage",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Vintage clothing and accessories in the heart of Austin.",
    rating: 4.7
  },
  {
    id: 39,
    name: "Buffalo Exchange Austin",
    address: "890 Guadalupe St, Austin, TX",
    zip: "78701",
    lat: 30.2711,
    lng: -97.7437,
    category: "Buy/Sell/Trade",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Keep Austin weird with unique thrift finds.",
    rating: 4.5
  },

  // WEST COAST - Los Angeles, CA
  // 90028 - Hollywood
  {
    id: 40,
    name: "The RealReal LA",
    address: "123 N Robertson Blvd, Los Angeles, CA",
    zip: "90048",
    lat: 34.0736,
    lng: -118.4004,
    category: "Luxury Consignment",
    image: "https://images.unsplash.com/photo-1549897381-5856d8b595e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Luxury consignment in West Hollywood. Designer pieces from celebrities.",
    rating: 4.9
  },
  {
    id: 41,
    name: "Wasteland",
    address: "456 Melrose Ave, Los Angeles, CA",
    zip: "90048",
    lat: 34.0837,
    lng: -118.3444,
    category: "Buy/Sell/Trade",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Trendy buy/sell/trade store on Melrose. Great for streetwear.",
    rating: 4.6
  },
  {
    id: 42,
    name: "Crossroads Trading",
    address: "789 Santa Monica Blvd, Los Angeles, CA",
    zip: "90046",
    lat: 34.0928,
    lng: -118.3287,
    category: "Buy/Sell/Trade",
    image: "https://images.unsplash.com/photo-1576188973526-0e5d7047b0cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Buy and sell trendy clothing in West Hollywood.",
    rating: 4.4
  },

  // San Francisco, CA
  // 94102 - Tenderloin
  {
    id: 43,
    name: "Goodwill San Francisco",
    address: "123 Market St, San Francisco, CA",
    zip: "94102",
    lat: 37.7749,
    lng: -122.4194,
    category: "Thrift",
    image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Large thrift store in downtown San Francisco.",
    rating: 4.1
  },
  {
    id: 44,
    name: "Buffalo Exchange SF",
    address: "456 Valencia St, San Francisco, CA",
    zip: "94110",
    lat: 37.7599,
    lng: -122.4218,
    category: "Buy/Sell/Trade",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Mission District's favorite buy/sell/trade store.",
    rating: 4.5
  },
  {
    id: 45,
    name: "The RealReal SF",
    address: "789 Fillmore St, San Francisco, CA",
    zip: "94117",
    lat: 37.7849,
    lng: -122.4313,
    category: "Luxury Consignment",
    image: "https://images.unsplash.com/photo-1549897381-5856d8b595e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Luxury consignment in Pacific Heights.",
    rating: 4.8
  },

  // San Diego, CA
  // 92101 - Downtown
  {
    id: 46,
    name: "San Diego Consignment",
    address: "234 5th Ave, San Diego, CA",
    zip: "92101",
    lat: 32.7157,
    lng: -117.1611,
    category: "Consignment",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Beach-friendly consignment in downtown San Diego.",
    rating: 4.5
  },

  // Seattle, WA
  // 98101 - Downtown
  {
    id: 47,
    name: "Seattle Thrift",
    address: "456 Pike St, Seattle, WA",
    zip: "98101",
    lat: 47.6062,
    lng: -122.3321,
    category: "Thrift",
    image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Eco-conscious thrift store in downtown Seattle.",
    rating: 4.4
  },
  {
    id: 48,
    name: "Buffalo Exchange Seattle",
    address: "789 Broadway E, Seattle, WA",
    zip: "98102",
    lat: 47.6205,
    lng: -122.3214,
    category: "Buy/Sell/Trade",
    image: "https://images.unsplash.com/photo-1576188973526-0e5d7047b0cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Capitol Hill's favorite buy/sell/trade store.",
    rating: 4.6
  },

  // Portland, OR
  // 97201 - Downtown
  {
    id: 49,
    name: "Portland Vintage",
    address: "123 SW 3rd Ave, Portland, OR",
    zip: "97201",
    lat: 45.5152,
    lng: -122.6784,
    category: "Vintage",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Curated vintage finds in the heart of Portland.",
    rating: 4.7
  },
  {
    id: 50,
    name: "Buffalo Exchange Portland",
    address: "456 SE Hawthorne Blvd, Portland, OR",
    zip: "97214",
    lat: 45.5122,
    lng: -122.6587,
    category: "Buy/Sell/Trade",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Keep Portland weird with unique thrift finds.",
    rating: 4.5
  },

  // WESTERN NEW YORK - Buffalo Area
  // 14215 - Buffalo, NY
  {
    id: 51,
    name: "Buffalo Thrift & Consignment",
    address: "123 Main St, Buffalo, NY",
    zip: "14215",
    lat: 42.8864,
    lng: -78.8784,
    category: "Thrift",
    image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Affordable thrift finds in Buffalo. Great selection of winter clothing.",
    rating: 4.3
  },
  {
    id: 52,
    name: "Queen City Consignment",
    address: "456 Elmwood Ave, Buffalo, NY",
    zip: "14222",
    lat: 42.9017,
    lng: -78.8728,
    category: "Consignment",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Designer consignment on Elmwood Avenue. Buffalo's premier consignment shop.",
    rating: 4.6
  },
  {
    id: 53,
    name: "Buffalo Exchange Buffalo",
    address: "789 Hertel Ave, Buffalo, NY",
    zip: "14216",
    lat: 42.9398,
    lng: -78.8500,
    category: "Buy/Sell/Trade",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Buy, sell, and trade trendy clothing in North Buffalo.",
    rating: 4.4
  },
  {
    id: 54,
    name: "Vintage Buffalo",
    address: "234 Allen St, Buffalo, NY",
    zip: "14201",
    lat: 42.9013,
    lng: -78.8773,
    category: "Vintage",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Curated vintage clothing and accessories in Allentown.",
    rating: 4.5
  },
  {
    id: 55,
    name: "Amherst Consignment",
    address: "567 Sheridan Dr, Amherst, NY",
    zip: "14221",
    lat: 42.9784,
    lng: -78.7997,
    category: "Consignment",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Upscale consignment in Amherst. Designer brands at great prices.",
    rating: 4.7
  },
  {
    id: 56,
    name: "Goodwill Buffalo",
    address: "890 Niagara Falls Blvd, Buffalo, NY",
    zip: "14223",
    lat: 42.9634,
    lng: -78.8514,
    category: "Thrift",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Large thrift store with great finds for the whole family.",
    rating: 4.2
  },

  // ROCHESTER, NY Area
  // 14604 - Rochester, NY
  {
    id: 57,
    name: "Rochester Thrift & Vintage",
    address: "123 Main St, Rochester, NY",
    zip: "14604",
    lat: 43.1566,
    lng: -77.6088,
    category: "Thrift",
    image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Affordable vintage and thrift finds in downtown Rochester.",
    rating: 4.4
  },
  {
    id: 58,
    name: "Flower City Consignment",
    address: "456 Park Ave, Rochester, NY",
    zip: "14607",
    lat: 43.1526,
    lng: -77.5850,
    category: "Consignment",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Upscale consignment on Park Avenue. Designer brands at great prices.",
    rating: 4.6
  },
  {
    id: 59,
    name: "Goodwill Rochester",
    address: "789 Monroe Ave, Rochester, NY",
    zip: "14618",
    lat: 43.1250,
    lng: -77.5800,
    category: "Thrift",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Large selection of thrift finds in the Monroe Avenue area.",
    rating: 4.3
  },
  {
    id: 60,
    name: "Vintage Rochester",
    address: "234 East Ave, Rochester, NY",
    zip: "14610",
    lat: 43.1550,
    lng: -77.6000,
    category: "Vintage",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Curated vintage clothing and accessories in the East End.",
    rating: 4.5
  },

  // SYRACUSE, NY Area
  // 13202 - Syracuse, NY
  {
    id: 61,
    name: "Salt City Thrift",
    address: "123 Salina St, Syracuse, NY",
    zip: "13202",
    lat: 43.0481,
    lng: -76.1474,
    category: "Thrift",
    image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Affordable thrift finds in downtown Syracuse.",
    rating: 4.3
  },
  {
    id: 62,
    name: "Syracuse Consignment Boutique",
    address: "456 Marshall St, Syracuse, NY",
    zip: "13210",
    lat: 43.0378,
    lng: -76.1394,
    category: "Consignment",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Designer consignment near Syracuse University.",
    rating: 4.5
  },
  {
    id: 63,
    name: "Goodwill Syracuse",
    address: "789 Erie Blvd, Syracuse, NY",
    zip: "13204",
    lat: 43.0500,
    lng: -76.1500,
    category: "Thrift",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Large thrift store with great finds for the whole family.",
    rating: 4.2
  },

  // NIAGARA FALLS, NY Area
  // 14301 - Niagara Falls, NY
  {
    id: 64,
    name: "Niagara Falls Thrift",
    address: "123 Main St, Niagara Falls, NY",
    zip: "14301",
    lat: 43.0962,
    lng: -79.0377,
    category: "Thrift",
    image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Affordable thrift finds near the Falls.",
    rating: 4.3
  },
  {
    id: 65,
    name: "Falls Consignment",
    address: "456 Third St, Niagara Falls, NY",
    zip: "14303",
    lat: 43.0950,
    lng: -79.0400,
    category: "Consignment",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Designer consignment in Niagara Falls.",
    rating: 4.4
  },

  // JAMESTOWN, NY Area
  // 14701 - Jamestown, NY
  {
    id: 66,
    name: "Jamestown Thrift",
    address: "123 Main St, Jamestown, NY",
    zip: "14701",
    lat: 42.0970,
    lng: -79.2353,
    category: "Thrift",
    image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Affordable thrift finds in Jamestown.",
    rating: 4.2
  },

  // ELMIRA, NY Area
  // 14901 - Elmira, NY
  {
    id: 67,
    name: "Elmira Consignment",
    address: "123 Water St, Elmira, NY",
    zip: "14901",
    lat: 42.0894,
    lng: -76.8077,
    category: "Consignment",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Upscale consignment in Elmira.",
    rating: 4.4
  },

  // BINGHAMTON, NY Area
  // 13901 - Binghamton, NY
  {
    id: 68,
    name: "Binghamton Thrift",
    address: "123 Main St, Binghamton, NY",
    zip: "13901",
    lat: 42.0987,
    lng: -75.9180,
    category: "Thrift",
    image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Affordable thrift finds in Binghamton.",
    rating: 4.3
  },

  // ITHACA, NY Area
  // 14850 - Ithaca, NY
  {
    id: 69,
    name: "Ithaca Vintage & Thrift",
    address: "123 State St, Ithaca, NY",
    zip: "14850",
    lat: 42.4430,
    lng: -76.5019,
    category: "Vintage",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Curated vintage finds near Cornell University.",
    rating: 4.6
  },
  {
    id: 70,
    name: "Ithaca Consignment",
    address: "456 College Ave, Ithaca, NY",
    zip: "14850",
    lat: 42.4400,
    lng: -76.5000,
    category: "Consignment",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Designer consignment in downtown Ithaca.",
    rating: 4.5
  }
];
