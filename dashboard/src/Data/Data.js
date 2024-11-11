import {
    UilEstate,
    UilClipboardAlt,
    UilChart,
    UilPackage,
    UilInfoCircle,
} from '@iconscout/react-unicons';

export const SidebarData = [
    {
        title: 'Dashboard',
        icon: <UilEstate />,
    },
    {
        title: 'Micro',
        icon: <UilClipboardAlt />,
    },
    {
        title: 'Small',
        icon: <UilChart />,
    },
    {
        title: 'Medium',
        icon: <UilPackage />,
    },
    {
      title: 'Loan Calculator',
      icon: <UilPackage />,
  },

];

export const SidebarFooter = [
    {
      title: 'About',
      icon: <UilInfoCircle />,

      
    }
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
];