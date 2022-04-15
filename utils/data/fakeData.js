
export const locationSales = {
  calexico : [ 48,42,30,24,42,24,36,42,42,48,36,42,24,36 ],
  barcelona :[ 95,95,60,95,90,50,100,55,65,80,90,95,50,70 ],
  vancouver : [ 30,20,30,20,20,25,30,35,40,20,20,45,35,30 ],
  milano : [ 19,9,25,25,28,19,28,19,9,9,22,19,9,25 ],
  detroit : [ 70,77,62,81,92,77,62,88,85,70,77,92,66,88 ],
  addis_ababa : [ 51,33,25,66,51,66,37,40,29,66,18,33,55,22 ],
  dublin : [ 30,13,57,13,54,34,57,17,64,64,17,27,27,57 ],
  tacoma : [ 33,44,14,33,44,18,25,40,44,29,37,25,25,37 ],
}

export const locationMapper = {
  calexico: 'Calexico',
  barcelona: 'Barcelona',
  vancouver: 'Vancounver',
  milano: 'Milano',
  detroit: 'Detroit',
  addis_ababa: 'Addis Ababa',
  dublin: 'Dublin',
  tacoma: 'Tacoma',
}

export const hours = [ '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm', 'Totals' ];

const locationBuilder = (data) => ({
  location: locationMapper[data],
  minCustomer: 0,
  maxCustomer: 0,
  avgSales: 0,
  hourlySales: locationSales[data]
})

export const locations = Object.keys(locationMapper);
export const data = locations.map((i) => locationBuilder(i))

