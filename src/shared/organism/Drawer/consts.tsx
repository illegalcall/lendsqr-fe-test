import {
  BadgePercent,
  BriefcaseNoColor,
  Coins,
  Galaxy,
  Handshake,
  Home,
  Piggybank,
  SackWithHand,
  SavingsBank,
  Scroll,
  Sliders,
  UserCheck,
  UserCog,
  Users,
  Clipboard,
  Transaction,
  UserCross,
  MoneySack,
  UsersMultiple,
} from '@/assets';

import { ReactNode } from 'react';

interface INavItem {
  title: string;
  icon: ReactNode;
  path: string;
}

interface INavItemGroup {
  title: string;
  items: INavItem[];
}

export const navItems: INavItemGroup[] = [
  {
    title: '',
    items: [{ title: 'Dashboard', icon: <Home />, path: '/dashboard' }],
  },
  {
    title: 'Customers',
    items: [
      { title: 'Users', icon: <Users />, path: '/dashboard/users' },
      {
        title: 'Guarantors',
        icon: <UsersMultiple />,
        path: '#',
      },
      { title: 'Loans', icon: <MoneySack />, path: '#' },
      {
        title: 'Decision Models',
        icon: <Handshake />,
        path: '#',
      },
      { title: 'Savings', icon: <Piggybank />, path: '#' },
      {
        title: 'Loan Requests',
        icon: <SackWithHand />,
        path: '#',
      },
      { title: 'Whitelist', icon: <UserCheck />, path: '#' },
      { title: 'Karma', icon: <UserCross />, path: '#' },
    ],
  },
  {
    title: 'Businesses',
    items: [
      {
        title: 'Organization',
        icon: <BriefcaseNoColor />,
        path: '#',
      },
      {
        title: 'Loan Products',
        icon: <SackWithHand />,
        path: '#',
      },
      {
        title: 'Savings Products',
        icon: <SavingsBank />,
        path: '#',
      },
      {
        title: 'Fees and Charges',
        icon: <Coins />,
        path: '#',
      },
      {
        title: 'Transactions',
        icon: <Transaction />,
        path: '#',
      },
      {
        title: 'Services',
        icon: <Galaxy />,
        path: '#',
      },
      {
        title: 'Service Account',
        icon: <UserCog />,
        path: '#',
      },
      {
        title: 'Settlements',
        icon: <Scroll />,
        path: '#',
      },
      {
        title: 'Reports',
        icon: <Scroll />,
        path: '#',
      },
    ],
  },
  {
    title: 'Settings',
    items: [
      {
        title: 'Preferences',
        icon: <Sliders />,
        path: '#',
      },
      {
        title: 'Fees and Pricing',
        icon: <BadgePercent />,
        path: '#',
      },
      {
        title: 'Audit Logs',
        icon: <Clipboard />,
        path: '#',
      },
    ],
  },
];
