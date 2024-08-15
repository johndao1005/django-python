export const app = {
  name: 'personal-money',
  link: 'yourmoney.com',
};

type NavList = {
  title: string;
  route: string;
}[];


export const navList: NavList = [
  {
    title: 'Home',
    route: '/'
  }, {
    title: 'Terms',
    route: '/about'
  }, {
    title: 'Privacy',
    route: '/privacy'
  }]

export const AppAPIList = {
  Transactions : 'http://127.0.0.1:8000/transactions/',
  Account: 'http://127.0.0.1:8000/accounts/',
  Categories: "http://127.0.0.1:8000/categories/",
  Investment: "http://127.0.0.1:8000/investments/",
  Forecast: "http://127.0.0.1:8000/forecasts/"
}