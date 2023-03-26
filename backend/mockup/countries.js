let countries = [
  {
    name: 'Japan',
  },
  {
    name: 'Argentina',
  },
  {
    name: 'Sweden',
  },
  {
    name: 'Ecuador',
  },
  {
    name: 'China',
  },
  {
    name: 'Poland',
  },
  {
    name: 'Cape Verde',
  },
  {
    name: 'China',
  },
  {
    name: 'Russia',
  },
  {
    name: 'Portugal',
  },
  {
    name: 'Kyrgyzstan',
  },
  {
    name: 'Syria',
  },
  {
    name: 'Indonesia',
  },
  {
    name: 'Russia',
  },
  {
    name: 'Brazil',
  },
  {
    name: 'Hungary',
  },
  {
    name: 'Portugal',
  },
  {
    name: 'Bangladesh',
  },
  {
    name: 'China',
  },
  {
    name: 'Portugal',
  },
]

let _countries = []
countries.forEach((item) =>
  _countries.find((_item) => _item.name === item.name) ? null : _countries.push(item)
)
countries = _countries

window.data = window.data || {}
window.data.countries = countries
