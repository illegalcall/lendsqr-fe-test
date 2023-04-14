import { ActiveUsers } from '@/assets/ActiveUsers';
import { TwoUser } from '@/assets/TwoUser';
import { UserLoans } from '@/assets/UserLoans';
import { UserSavings } from '@/assets/UserSavings';

export const userDashboardCardsData = [
  {
    label: 'Users',
    icon: <TwoUser />,
    value: new Intl.NumberFormat('en-US').format(2453),
  },
  {
    label: 'Active Users',
    icon: <ActiveUsers />,
    value: new Intl.NumberFormat('en-US').format(2453),
  },
  {
    label: 'Users with Loans',
    icon: <UserLoans />,
    value: new Intl.NumberFormat('en-US').format(12453),
  },
  {
    label: 'Users with Savings',
    icon: <UserSavings />,
    value: new Intl.NumberFormat('en-US').format(102453),
  },
];

export const tableHeaders = [
  'Organization',
  'Username',
  'Email',
  'Phone number',
  'Date joined',
  'Status',
  '',
];
