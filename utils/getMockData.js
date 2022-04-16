const fs = require('fs');

module.exports = function getMockData() {
  const rawData = fs.readFileSync('./data/MOCK_DATA.csv', 'utf-8')
  const dataArr = rawData.split('\n');
  
  const data = dataArr.reduce((total, row) => {
    const arr = row.split(',');
    const location = arr[0];
    if (location.length > 0) {
      const sales = arr.splice(1);
      total = {...total, [location]:sales};
    }
    return total;
  }, {})
  return data
}
