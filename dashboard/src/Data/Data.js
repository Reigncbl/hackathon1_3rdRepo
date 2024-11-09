import {
    UilEstate,
    UilClipboardAlt,
    UilChart,
    UilPackage,
} from '@iconscout/react-unicons';

export const SidebarData = [
    {
        title: 'Dashboard',
        icon: <UilEstate />,
        link: '/',
    },
    {
        title: 'About',
        icon: <UilClipboardAlt />,
        link: '/',
    },
    {
        title: 'Calculator',
        icon: <UilChart />,
        link: '/',
    },
    {
        title: 'Loans',
        icon: <UilPackage />,
        link: '/',
    },

];

export const SidebarFooter = [
    {
        title: 'Settings',
        icon: <UilPackage />,
        link: '/',
    },
    {
        title: 'Information',
        icon: <UilPackage />,
        link: '/',
    },
];

export const cardsData = [
    {
      title: "Sales",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      url:"https://public.tableau.com/views/PlayingwithTableausNewSpatialParameter/Map?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      value: "25,970",
      png: UilChart,
      series: [
        {
          name: "Sales",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Revenue",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      url:"https://public.tableau.com/views/PlayingwithTableausNewSpatialParameter/Map?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      barValue: 80,
      value: "14,270",
      png: UilChart,
      series: [
        {
          name: "Revenue",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Expenses",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      url:"https://public.tableau.com/views/PlayingwithTableausNewSpatialParameter/Map?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      barValue: 60,
      value: "4,270",
      png: UilClipboardAlt,
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
];