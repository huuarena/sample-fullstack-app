let users = [
  {
    firstName: 'Sharon',
    lastName: 'Laurentin',
    email: 'slaurentin0@usgs.gov',
    gender: true,
    birthday: '2006-11-29',
  },
  {
    firstName: 'Francisca',
    lastName: 'Groocock',
    email: 'fgroocock1@github.com',
    gender: true,
    birthday: '2005-11-06',
  },
  {
    firstName: 'Alfy',
    lastName: 'Cristoferi',
    email: 'acristoferi2@4shared.com',
    gender: false,
    birthday: '2020-02-10',
  },
  {
    firstName: 'Mandy',
    lastName: 'Frugier',
    email: 'mfrugier3@ning.com',
    gender: true,
    birthday: '2011-08-16',
  },
  {
    firstName: 'Edlin',
    lastName: 'Starbuck',
    email: 'estarbuck4@jimdo.com',
    gender: false,
    birthday: '2001-08-25',
  },
  {
    firstName: 'Cody',
    lastName: 'Izkoveski',
    email: 'cizkoveski5@hc360.com',
    gender: false,
    birthday: '2001-07-23',
  },
  {
    firstName: 'Lezlie',
    lastName: "O'Deoran",
    email: 'lodeoran6@narod.ru',
    gender: true,
    birthday: '2004-09-03',
  },
  {
    firstName: 'Deena',
    lastName: 'Rau',
    email: 'drau7@tuttocitta.it',
    gender: false,
    birthday: '2004-05-18',
  },
  {
    firstName: 'Eugen',
    lastName: 'Olczak',
    email: 'eolczak8@hhs.gov',
    gender: false,
    birthday: '2009-09-14',
  },
  {
    firstName: 'Quintina',
    lastName: 'Betje',
    email: 'qbetje9@paginegialle.it',
    gender: true,
    birthday: '2013-07-09',
  },
  {
    firstName: 'Tarrah',
    lastName: 'Pirouet',
    email: 'tpiroueta@booking.com',
    gender: true,
    birthday: '2021-04-26',
  },
  {
    firstName: 'Quill',
    lastName: 'Kingh',
    email: 'qkinghb@themeforest.net',
    gender: false,
    birthday: '2003-08-29',
  },
  {
    firstName: 'Amata',
    lastName: 'Napolitano',
    email: 'anapolitanoc@msn.com',
    gender: true,
    birthday: '2012-06-03',
  },
  {
    firstName: 'Antonio',
    lastName: 'Lacy',
    email: 'alacyd@redcross.org',
    gender: true,
    birthday: '2008-08-01',
  },
  {
    firstName: 'Alison',
    lastName: 'Rodmell',
    email: 'arodmelle@wikimedia.org',
    gender: false,
    birthday: '2011-03-31',
  },
  {
    firstName: 'Ulrick',
    lastName: 'Wychard',
    email: 'uwychardf@ifeng.com',
    gender: true,
    birthday: '2006-07-13',
  },
  {
    firstName: 'Doria',
    lastName: 'Rudsdale',
    email: 'drudsdaleg@skyrock.com',
    gender: true,
    birthday: '2017-10-14',
  },
  {
    firstName: 'Joceline',
    lastName: 'Kynoch',
    email: 'jkynochh@bloglines.com',
    gender: false,
    birthday: '2004-09-14',
  },
  {
    firstName: 'Wood',
    lastName: 'Allkins',
    email: 'wallkinsi@fda.gov',
    gender: false,
    birthday: '2007-09-07',
  },
  {
    firstName: 'Daria',
    lastName: 'Cleevely',
    email: 'dcleevelyj@prnewswire.com',
    gender: false,
    birthday: '2001-10-07',
  },
]

let _users = []
users.forEach((item) =>
  _users.find((_item) => _item.email === item.email) ? null : _users.push(item)
)
users = _users

users = users.map((item) => ({
  ...item,
  username: (item.firstName + '-' + item.lastName).replace(/\s+/g, '').toLowerCase(),
  password: '12345678',
  avatar: 'https://picsum.photos/300/300',
  photos: [
    'https://picsum.photos/200/300',
    'https://picsum.photos/300/300',
    'https://picsum.photos/400/300',
  ],
}))

window.data = window.data || {}
window.data.users = users
