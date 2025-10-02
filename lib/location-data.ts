// US States and Counties data for QuickQuote form

export interface StateData {
  code: string;
  name: string;
  counties: string[];
}

export const US_STATES: StateData[] = [
  {
    code: 'AL',
    name: 'Alabama',
    counties: ['Jefferson', 'Mobile', 'Madison', 'Montgomery', 'Shelby', 'Tuscaloosa', 'Baldwin', 'Lee', 'Calhoun', 'Etowah']
  },
  {
    code: 'AK',
    name: 'Alaska',
    counties: ['Anchorage', 'Fairbanks North Star', 'Matanuska-Susitna', 'Kenai Peninsula', 'Juneau', 'Bethel', 'Nome', 'North Slope']
  },
  {
    code: 'AZ',
    name: 'Arizona',
    counties: ['Maricopa', 'Pima', 'Pinal', 'Yavapai', 'Mohave', 'Coconino', 'Cochise', 'Yuma', 'Navajo', 'Apache']
  },
  {
    code: 'AR',
    name: 'Arkansas',
    counties: ['Pulaski', 'Benton', 'Washington', 'Sebastian', 'Faulkner', 'Craighead', 'Saline', 'Garland', 'White', 'Lonoke']
  },
  {
    code: 'CA',
    name: 'California',
    counties: ['Los Angeles', 'San Diego', 'Orange', 'Riverside', 'San Bernardino', 'Santa Clara', 'Alameda', 'Sacramento', 'Contra Costa', 'Fresno', 'Kern', 'San Francisco', 'Ventura', 'San Mateo', 'San Joaquin', 'Stanislaus', 'Sonoma', 'Tulare', 'Santa Barbara', 'Monterey']
  },
  {
    code: 'CO',
    name: 'Colorado',
    counties: ['Denver', 'El Paso', 'Arapahoe', 'Jefferson', 'Adams', 'Larimer', 'Boulder', 'Weld', 'Douglas', 'Pueblo']
  },
  {
    code: 'CT',
    name: 'Connecticut',
    counties: ['Fairfield', 'Hartford', 'New Haven', 'New London', 'Litchfield', 'Middlesex', 'Tolland', 'Windham']
  },
  {
    code: 'DE',
    name: 'Delaware',
    counties: ['New Castle', 'Sussex', 'Kent']
  },
  {
    code: 'FL',
    name: 'Florida',
    counties: ['Miami-Dade', 'Broward', 'Palm Beach', 'Hillsborough', 'Orange', 'Pinellas', 'Duval', 'Lee', 'Polk', 'Brevard', 'Volusia', 'Pasco', 'Seminole', 'Sarasota', 'Manatee', 'Osceola', 'Marion', 'Collier', 'Escambia', 'Lake']
  },
  {
    code: 'GA',
    name: 'Georgia',
    counties: ['Fulton', 'Gwinnett', 'Cobb', 'DeKalb', 'Forsyth', 'Cherokee', 'Clayton', 'Henry', 'Chatham', 'Richmond']
  },
  {
    code: 'HI',
    name: 'Hawaii',
    counties: ['Honolulu', 'Hawaii', 'Maui', 'Kauai', 'Kalawao']
  },
  {
    code: 'ID',
    name: 'Idaho',
    counties: ['Ada', 'Canyon', 'Kootenai', 'Bonneville', 'Bannock', 'Twin Falls', 'Nez Perce', 'Madison', 'Elmore', 'Blaine']
  },
  {
    code: 'IL',
    name: 'Illinois',
    counties: ['Cook', 'DuPage', 'Lake', 'Will', 'Kane', 'McHenry', 'Winnebago', 'Madison', 'St. Clair', 'Champaign']
  },
  {
    code: 'IN',
    name: 'Indiana',
    counties: ['Marion', 'Lake', 'Allen', 'Hamilton', 'St. Joseph', 'Elkhart', 'Tippecanoe', 'Vanderburgh', 'Hendricks', 'Porter']
  },
  {
    code: 'IA',
    name: 'Iowa',
    counties: ['Polk', 'Linn', 'Scott', 'Johnson', 'Black Hawk', 'Woodbury', 'Dubuque', 'Story', 'Dallas', 'Pottawattamie']
  },
  {
    code: 'KS',
    name: 'Kansas',
    counties: ['Johnson', 'Sedgwick', 'Shawnee', 'Wyandotte', 'Douglas', 'Leavenworth', 'Riley', 'Reno', 'Butler', 'Saline']
  },
  {
    code: 'KY',
    name: 'Kentucky',
    counties: ['Jefferson', 'Fayette', 'Kenton', 'Boone', 'Warren', 'Hardin', 'Campbell', 'Daviess', 'Madison', 'McCracken']
  },
  {
    code: 'LA',
    name: 'Louisiana',
    counties: ['East Baton Rouge', 'Jefferson', 'Orleans', 'St. Tammany', 'Lafayette', 'Caddo', 'Calcasieu', 'Livingston', 'Ouachita', 'Rapides']
  },
  {
    code: 'ME',
    name: 'Maine',
    counties: ['Cumberland', 'York', 'Penobscot', 'Kennebec', 'Androscoggin', 'Aroostook', 'Oxford', 'Somerset', 'Hancock', 'Knox']
  },
  {
    code: 'MD',
    name: 'Maryland',
    counties: ['Montgomery', 'Prince Georges', 'Baltimore', 'Anne Arundel', 'Howard', 'Harford', 'Frederick', 'Carroll', 'Charles', 'St. Marys']
  },
  {
    code: 'MA',
    name: 'Massachusetts',
    counties: ['Middlesex', 'Worcester', 'Essex', 'Suffolk', 'Norfolk', 'Bristol', 'Plymouth', 'Hampden', 'Barnstable', 'Hampshire']
  },
  {
    code: 'MI',
    name: 'Michigan',
    counties: ['Wayne', 'Oakland', 'Macomb', 'Kent', 'Genesee', 'Washtenaw', 'Ottawa', 'Ingham', 'Livingston', 'Kalamazoo']
  },
  {
    code: 'MN',
    name: 'Minnesota',
    counties: ['Hennepin', 'Ramsey', 'Dakota', 'Anoka', 'Washington', 'St. Louis', 'Scott', 'Olmsted', 'Carver', 'Wright']
  },
  {
    code: 'MS',
    name: 'Mississippi',
    counties: ['Hinds', 'Harrison', 'DeSoto', 'Rankin', 'Jackson', 'Madison', 'Lee', 'Forrest', 'Lauderdale', 'Jones']
  },
  {
    code: 'MO',
    name: 'Missouri',
    counties: ['St. Louis', 'Jackson', 'St. Charles', 'Jefferson', 'Greene', 'Clay', 'Boone', 'Cass', 'Franklin', 'Jasper']
  },
  {
    code: 'MT',
    name: 'Montana',
    counties: ['Yellowstone', 'Missoula', 'Gallatin', 'Flathead', 'Cascade', 'Lewis and Clark', 'Silver Bow', 'Ravalli', 'Lake', 'Glacier']
  },
  {
    code: 'NE',
    name: 'Nebraska',
    counties: ['Douglas', 'Lancaster', 'Sarpy', 'Hall', 'Buffalo', 'Scotts Bluff', 'Madison', 'Dodge', 'Platte', 'Lincoln']
  },
  {
    code: 'NV',
    name: 'Nevada',
    counties: ['Clark', 'Washoe', 'Carson City', 'Lyon', 'Elko', 'Douglas', 'Nye', 'Churchill', 'Humboldt', 'White Pine']
  },
  {
    code: 'NH',
    name: 'New Hampshire',
    counties: ['Hillsborough', 'Rockingham', 'Merrimack', 'Strafford', 'Grafton', 'Cheshire', 'Carroll', 'Belknap', 'Sullivan', 'Coos']
  },
  {
    code: 'NJ',
    name: 'New Jersey',
    counties: ['Bergen', 'Essex', 'Middlesex', 'Hudson', 'Monmouth', 'Ocean', 'Union', 'Camden', 'Passaic', 'Morris']
  },
  {
    code: 'NM',
    name: 'New Mexico',
    counties: ['Bernalillo', 'Dona Ana', 'Santa Fe', 'San Juan', 'Sandoval', 'Lea', 'Valencia', 'Chaves', 'Otero', 'Eddy']
  },
  {
    code: 'NY',
    name: 'New York',
    counties: ['Kings', 'Queens', 'New York', 'Suffolk', 'Bronx', 'Nassau', 'Westchester', 'Erie', 'Monroe', 'Richmond', 'Onondaga', 'Orange', 'Rockland', 'Albany', 'Dutchess', 'Saratoga', 'Oneida', 'Niagara', 'Broome', 'Ulster']
  },
  {
    code: 'NC',
    name: 'North Carolina',
    counties: ['Mecklenburg', 'Wake', 'Guilford', 'Forsyth', 'Cumberland', 'Durham', 'Buncombe', 'Union', 'Cabarrus', 'Gaston']
  },
  {
    code: 'ND',
    name: 'North Dakota',
    counties: ['Cass', 'Burleigh', 'Grand Forks', 'Ward', 'Morton', 'Stark', 'Williams', 'Richland', 'Stutsman', 'Barnes']
  },
  {
    code: 'OH',
    name: 'Ohio',
    counties: ['Cuyahoga', 'Franklin', 'Hamilton', 'Summit', 'Montgomery', 'Lucas', 'Butler', 'Stark', 'Lorain', 'Warren']
  },
  {
    code: 'OK',
    name: 'Oklahoma',
    counties: ['Oklahoma', 'Tulsa', 'Cleveland', 'Canadian', 'Comanche', 'Rogers', 'Wagoner', 'Creek', 'Pottawatomie', 'McClain']
  },
  {
    code: 'OR',
    name: 'Oregon',
    counties: ['Multnomah', 'Washington', 'Clackamas', 'Lane', 'Marion', 'Jackson', 'Deschutes', 'Linn', 'Douglas', 'Yamhill']
  },
  {
    code: 'PA',
    name: 'Pennsylvania',
    counties: ['Philadelphia', 'Allegheny', 'Montgomery', 'Bucks', 'Delaware', 'Chester', 'Lancaster', 'York', 'Berks', 'Westmoreland']
  },
  {
    code: 'RI',
    name: 'Rhode Island',
    counties: ['Providence', 'Kent', 'Washington', 'Newport', 'Bristol']
  },
  {
    code: 'SC',
    name: 'South Carolina',
    counties: ['Greenville', 'Richland', 'Charleston', 'Spartanburg', 'Horry', 'Lexington', 'York', 'Anderson', 'Beaufort', 'Berkeley']
  },
  {
    code: 'SD',
    name: 'South Dakota',
    counties: ['Minnehaha', 'Pennington', 'Lincoln', 'Brown', 'Brookings', 'Codington', 'Lawrence', 'Davison', 'Meade', 'Hughes']
  },
  {
    code: 'TN',
    name: 'Tennessee',
    counties: ['Shelby', 'Davidson', 'Knox', 'Hamilton', 'Rutherford', 'Williamson', 'Sumner', 'Montgomery', 'Blount', 'Washington']
  },
  {
    code: 'TX',
    name: 'Texas',
    counties: ['Harris', 'Dallas', 'Tarrant', 'Bexar', 'Travis', 'Collin', 'Denton', 'El Paso', 'Fort Bend', 'Hidalgo', 'Montgomery', 'Williamson', 'Cameron', 'Nueces', 'Brazoria', 'Bell', 'Galveston', 'Lubbock', 'Webb', 'Jefferson']
  },
  {
    code: 'UT',
    name: 'Utah',
    counties: ['Salt Lake', 'Utah', 'Davis', 'Weber', 'Washington', 'Cache', 'Summit', 'Tooele', 'Box Elder', 'Iron']
  },
  {
    code: 'VT',
    name: 'Vermont',
    counties: ['Chittenden', 'Rutland', 'Washington', 'Windsor', 'Bennington', 'Franklin', 'Addison', 'Orange', 'Windham', 'Caledonia']
  },
  {
    code: 'VA',
    name: 'Virginia',
    counties: ['Fairfax', 'Prince William', 'Virginia Beach', 'Loudoun', 'Chesterfield', 'Henrico', 'Norfolk', 'Chesapeake', 'Arlington', 'Richmond']
  },
  {
    code: 'WA',
    name: 'Washington',
    counties: ['King', 'Pierce', 'Snohomish', 'Spokane', 'Clark', 'Thurston', 'Kitsap', 'Yakima', 'Whatcom', 'Benton']
  },
  {
    code: 'WV',
    name: 'West Virginia',
    counties: ['Kanawha', 'Berkeley', 'Cabell', 'Wood', 'Monongalia', 'Raleigh', 'Harrison', 'Mercer', 'Jefferson', 'Putnam']
  },
  {
    code: 'WI',
    name: 'Wisconsin',
    counties: ['Milwaukee', 'Dane', 'Waukesha', 'Brown', 'Racine', 'Outagamie', 'Kenosha', 'Rock', 'Winnebago', 'Marathon']
  },
  {
    code: 'WY',
    name: 'Wyoming',
    counties: ['Laramie', 'Natrona', 'Campbell', 'Sheridan', 'Fremont', 'Sweetwater', 'Albany', 'Carbon', 'Uinta', 'Park']
  }
];

// Helper function to get counties by state code
export function getCountiesByState(stateCode: string): string[] {
  const state = US_STATES.find(s => s.code === stateCode);
  return state ? state.counties : [];
}

// Helper function to get state name by code
export function getStateName(stateCode: string): string {
  const state = US_STATES.find(s => s.code === stateCode);
  return state ? state.name : stateCode;
}

