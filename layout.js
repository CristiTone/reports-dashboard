const navLinks = [
  {
    name: 'Dashboard',
    url: '#',
    icon: '/assets/dashboard.svg',
  },
  {
    name: 'Incidents',
    url: '#',
    icon: '/assets/incidents.svg',
  },
  {
    name: 'Network',
    url: '#',
    icon: '/assets/network.svg',
  },
  {
    name: 'Risk Management',
    url: '#',
    icon: '/assets/risk.svg',
  },
  {
    name: 'Policies',
    url: '#',
    icon: '/assets/policies.svg',
  },
  {
    name: 'Reports',
    url: '#',
    icon: '/assets/reports.svg',
  },
  {
    name: 'Quarantine',
    url: '#',
    icon: '/assets/quarantine.svg',
  },
  {
    name: 'Companies',
    url: '#',
    icon: '/assets/companies.svg',
  },
  {
    name: 'Accounts',
    url: '#',
    icon: '/assets/accounts.svg',
  },
  {
    name: 'Sandbox Analyzer',
    url: '#',
    icon: '/assets/sandbox.svg',
  },
];

let navContent = '';
navLinks.forEach((link) => {
  navContent += `<li><a href=${link.url} data-identify="${link.name}"><img src=${link.icon} /><p>${link.name}</p></a></li>`;
});
document.querySelector('.navbar').innerHTML = navContent;

const iconBtns = document.querySelectorAll('a');
iconBtns.forEach((btn) => {
  const identity = btn.getAttribute('data-identify');
  btn.addEventListener('click', () =>
    console.log(`Icon button with the identity "${identity}" was clicked`),
  );
});
