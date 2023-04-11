import users from '@/assets/UsersIcons/users.svg';
import usersActive from '@/assets/UsersIcons/active-users.svg';
import usersWithLoans from '@/assets/UsersIcons/user-loans.svg';
import usersWithSavings from '@/assets/UsersIcons/user-savings.svg';

export const userDashboardCardsData = [
  {
    label: 'Users',
    icon: users,
    value: new Intl.NumberFormat('en-US').format(2453),
  },
  {
    label: 'Active Users',
    icon: usersActive,
    value: new Intl.NumberFormat('en-US').format(2453),
  },
  {
    label: 'Users with Loans',
    icon: usersWithLoans,
    value: new Intl.NumberFormat('en-US').format(12453),
  },
  {
    label: 'Users with Savings',
    icon: usersWithSavings,
    value: new Intl.NumberFormat('en-US').format(102453),
  },
];
