interface INavItem {
  title: string;
  icon: string;
  path: string;
}

interface INavItemGroup {
  title: string;
  items: INavItem[];
}

export const navItems: INavItemGroup[] = [
  {
    title: '',
    items: [{ title: 'Dashboard', icon: '/dashboard', path: '/dashboard' }],
  },
  {
    title: 'Customers',
    items: [
      { title: 'Users', icon: '/users', path: '/Users' },
      { title: 'Guarantors', icon: '/guarantors', path: '/guarantors' },
      { title: 'Loans', icon: '/loans', path: '/Loans' },
      //   {
      //     title: 'Decision Models',
      //     icon: 'Decision Models',
      //     path: '/decision-models',
      //   },
      //   { title: 'Savings', icon: 'Savings', path: '/Savings' },
      //   { title: 'Loan Requests', icon: 'loan-requests', path: '/loan-requests' },
      //   { title: 'Whitelist', icon: 'whitelist', path: '/whitelist' },
      //   { title: 'Karma', icon: 'karma', path: '/karma' },
    ],
  },
  {
    title: 'Businesses',
    items: [
      {
        title: 'Organization',
        icon: '/organization',
        path: '/organization',
      },
    ],
  },
];
