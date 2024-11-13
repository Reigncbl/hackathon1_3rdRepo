import {
    UilEstate,
    UilClipboardAlt,
    UilChart,
    UilPackage,
    UilInfoCircle,
    UilCalculatorAlt,
    UilUser,
    UilStore,
    UilBuilding
} from '@iconscout/react-unicons';

export const SidebarData = [
  {
      title: 'Dashboard',
      icon: <UilEstate />,
      para: 'View your business performance at a glance with real-time insights.',
  },
  {
      title: 'Micro ',
      icon: <UilUser />,
      para: 'Track essential metrics for micro-businesses to support growth.',
  },
  {
      title: 'Small',
      icon: <UilStore />,
      para: 'Analyze data and trends tailored for small business needs.',
  },
  {
      title: 'Medium',
      icon: <UilBuilding />,
      para: 'Access insights for medium-sized enterprises to drive success.',
  },
  {
      title: 'Loan Calculator',
      icon: <UilCalculatorAlt />,
      para: 'Estimate your monthly loan installments easily and accurately.',
  },
];


export const SidebarFooter = [
    {
      title: 'About',
      icon: <UilInfoCircle />,
      para: 'Discover insights to drive your business forward!',

      
    }
];

export const cardsDataMicro = [
    {
      title: "Savings Account",
      color: {
         backGround: "#39F8CE",
      },
      barValue: 70,
      url:"https://public.tableau.com/views/MEDIUM/Sheet1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      value: "10,107", /*1778 + 1800 + 1824 + 1558 + 1573 + 1574*/ /*Monthly report*/
      png: UilChart,   /*PercentIncrease = [(newvalue - originalvalue)/originalvalue] x 100*/
      percent: "0%",  //                      [(1574-1573) / 1573] x 100 = 0.063
    },
    {
      title: "Personal Loan",
      color: {
        backGround: "#39F8CE8",
      },
      barValue: 70,
      url:"https://public.tableau.com/views/MEDIUM/Sheet2?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      value: "2,660", /*444 + 446 + 443 + 442 + 440 + 445*/
      png: UilChart,
      percent: "1%", // [(445-440) / 440] x 100 = 1.13%

    },
    {
      title: "Non-life Insurance",
      color: {
        backGround: "#39F8CE8",
      },
      barValue: 70,
      url:"https://public.tableau.com/views/PlayingwithTableausNewSpatialParameter/Map?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      value: "275", /*31 + 32 + 33 + 58 + 59 + 62*/
      png: UilChart,
      percent: "5%", // [(62-59) / 59] x 100 = 5.08%

    },
    {
      title: "Investment",
      color: {
        backGround: "#39F8CE8",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      url:"https://public.tableau.com/views/PlayingwithTableausNewSpatialParameter/Map?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      value: "132", /*22 + 22 + 22 + 22 + 22 + 22*/
      png: UilChart,
      percent: "0%", // [(22-22) / 22] x 100 = 0% 

    },
];

export const cardsDataSmall = [
  {
    title: "Savings Account",
    color: {
      backGround: "#39F8CE8",
    },
    barValue: 70,
    url:"https://public.tableau.com/views/PlayingwithTableausNewSpatialParameter/Map?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    value: "9,864", /*1677 + 1672 + 1671 + 1617 + 1618 + 1609*/
    png: UilChart,
    percent: "0%", // [(1609-1618) / 1618] x 100 = -0.55%
  },
  {
    title: "Personal Loan",
    color: {
      backGround: "#39F8CE8",
    },
    barValue: 70,
    url:"https://public.tableau.com/views/PlayingwithTableausNewSpatialParameter/Map?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    value: "5,396", /*909 + 912 + 900 + 889 + 891 + 895*/
    png: UilChart,
    percent: "0%", // [(895-891) / 891] x 100 = 0.44%

  },
  {
    title: "Non-life Insurance",
    color: {
      backGround: "#39F8CE8",
    },
    barValue: 70,
    url:"https://public.tableau.com/views/PlayingwithTableausNewSpatialParameter/Map?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    value: "659", /*67 + 72 + 75 + 146 + 149 + 150*/
    png: UilChart,
    percent: "1%", // [(150-149) / 149] x 100 = 0.67%

  },
  {
    title: "Investment",
    color: {
      backGround: "#39F8CE8",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    url:"https://public.tableau.com/views/PlayingwithTableausNewSpatialParameter/Map?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    value: "555", /*92 + 93 + 91 + 93 + 94 + 92*/
    png: UilChart,
    percent: "0%", // [(92-94) / 94] x 100 = -2.12% 

  },

];
export const cardsDataMedium = [
  {
    title: "Savings Account",
    color: {
      backGround: "#39F8CE8",
    },
    barValue: 70,
    url:"https://public.tableau.com/views/PlayingwithTableausNewSpatialParameter/Map?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    value: "8,337", /*1403 + 1402 + 1402 + 1380 + 1376 + 1374*/
    png: UilChart,
    percent: "0%", // [(1374-1376) / 1376] x 100 = -0.14%
  },
  {
    title: "Personal Loan",
    color: {
      backGround: "#39F8CE8",
    },
    barValue: 70,
    url:"https://public.tableau.com/views/PlayingwithTableausNewSpatialParameter/Map?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    value: "6,694", /*1116 + 1118 + 1108 + 1113 + 1117 + 1122*/
    png: UilChart,
    percent: "0%", // [(1122-1117) / 1117] x 100 = 0.44%

  },
  {
    title: "Non-life Insurance",
    color: {
      backGround: "#39F8CE8",
    },
    barValue: 70,
    url:"https://public.tableau.com/views/PlayingwithTableausNewSpatialParameter/Map?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    value: "1,423", /*194 + 198 + 206 + 268 + 274 + 283*/
    png: UilChart,
    percent: "3%", // [(283-274) / 274] x 100 = 3.28%

  },
  {
    title: "Investment",
    color: {
      backGround: "#39F8CE8",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    url:"https://public.tableau.com/views/PlayingwithTableausNewSpatialParameter/Map?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    value: "1,502", /*251 + 250 + 247 + 249 + 250 + 255*/
    png: UilChart,
    percent: "2%", // [(255-250) / 250] x 100 = 2%

  },
];