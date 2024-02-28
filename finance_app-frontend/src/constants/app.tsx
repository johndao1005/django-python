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
    route: '/terms'
  }, {
    title: 'Privacy',
    route: '/privacy'
  }, {
    title: 'Transaction List',
    route: '/transactions'
  }, {
    title: 'Investment',
    route: '/investment'
  }]