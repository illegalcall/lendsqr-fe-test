# Shared Components using Atomic Design

This project uses the Atomic Design methodology to organize its shared components. Atomic Design is a methodology that helps designers and developers to create consistent, reusable, and modular design systems.

Storybook has been used with the atoms for efficient development and documentation when working with a team.

## Atoms

Atoms are the building blocks of our design system. They are the smallest, most basic components that cannot be broken down any further. Here are the atoms used in this project:

- **Button**: A generic button component that can be used in various parts of the app.
- **Card**: A generic card component that can be used to display information in a structured way.
- **Input**: A generic input component that can be used for user input.
- **Loader**: A GIF loader used to indicate loading state for various parts of the app.

## Molecules

Molecules are combinations of atoms that make up larger, more complex components. Here's the molecule used in this project:

- **Filters**: A filters component which combines a few atomic components to provide a filtering functionality.

## Organisms

Organisms are combinations of atoms and molecules that make up sections of a page. They are distinct functional units that provide a specific function. Here are the organisms used in this project:

- **Drawer**: The side drawer used throughout the app to provide navigation and actions.
- **Header**: The header component used throughout the app to display branding and navigation.
- **Table**: A customizable generic table which takes headers and data to display tabular information.

## Templates

Templates are combinations of atoms, molecules, and organisms that make up entire pages. Here's the template used in this project:

- **Layout**: The layout used in the app which consists of the Header and Drawer component. This template provides a consistent look and feel across all pages.

## Misc

- **types.ts**: Contains the TypeScript types used in the app. This file provides type safety to the app and makes the code more maintainable.

These components help us build your project efficiently and with consistency.
