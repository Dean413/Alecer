import {LayoutDashboard, Wallet, ArrowLeftRight, ArrowDownToLine, Send, FileText, CreditCard, ChartColumn, Settings, PanelLeft, ScrollText, ArrowDownLeft, ArrowRightLeft, ArrowUpRight} from "lucide-react"
export const cards = [
    {
      icon: "/assets/wallets.svg",
      title: "Multi-Currency Wallets",
      text: "Create and manage USD, GBP, EUR, and NGN wallets all in one place",
      alt: "wallet-icon"
    },

    {
      icon: "/assets/cards.svg",
      title: "Virtual & Physical Cards",
      text: "Issue instant virtual cards and order physical cards for global transactions",
      alt: "card-icon"
    },

    {
      icon: "/assets/expense-tracking.svg",
      title: "Expense Tracking",
      text: "Track expenses, set budgets, and get detailed financial insights",
      alt: "analytics-icon"
    },

    {
      icon: "/assets/speed.svg",
      title: "Instant Transfers",
      text: "Send money internationally with competitive rates and low fees",
      alt: "speed-icon"
    },

    {
      icon: "/assets/teams.svg",
      title: "Team Payroll",
      text: "Manage team payments, invoicing, and payroll all from one dashboard",
      alt: "team-icon"
    },

    {
      icon: "/assets/shield.svg",
      title: "Bank-Level Security",
      text: "Enterprise-grade security with 2FA, encryption, and compliance standards",
      alt: 'shield-icon'
    },
  ]

  export const reason = [
    {
      title: "Fast Setup",
      text: "Get started in minutes, not days",
    },

    {
      title: "Low Fees",
      text: "Competitive rates with transparent pricing"
    },

    {
      title: "Global Reach",
      text: "Send to 195+ countries worldwide"
    },

    {
      title: "Real-Time Support",
      text: "24/7 customer support for all users"
    },

  ]

 export const stats = [
    {
      title: "50K+",
      text: "Active Users"
    },

     {
      title: "$1.2B",
      text: "Transactions"
    },

     {
      title: "195+",
      text: "Countries"
    },

     {
      title: "99.9%",
      text: "Uptime"
    },
      
  ]

  export const sideBar = [
  {
    header: "MONEY TOOLS",
    items: [
      { icon: <LayoutDashboard size={20} />, title: "Dashboard" },
      { icon: <Wallet size={20} />, title: "Wallets" },
      { icon: <ArrowLeftRight size={20} />, title: "Convert" },
      { icon: <Send size={20} />, title: "Send Money" },
      { icon: <ArrowDownToLine size={20} />, title: "Receive Money" },
      { icon: <ScrollText size={20} />, title: "Withdraw"},
    ],
  },

 

  {
    header: "BUSINESS",
    items: [
      { icon: <CreditCard size={20} />, title: "Cards" },
      { icon: <FileText size={20} />, title: "Invoices" },
    ],
  },

  {
    header: "SUPPORT",
    items: [
      { icon: <ChartColumn size={20} />, title: "Analytics" },
      { icon: <Settings size={20} />, title: "Settings" },
    ],
  },
];

export const wallets = [
  {
    currency: "NGN",
    currencyIcon: "N",
    flag: "/assets/ngn-flag.svg",
    balance: "5,280.50",
    kycLevel: "KYC level 1",
    account: "*****9568245"
  },

  {
    currency: "USD",
    currencyIcon: "$",
    flag: "/assets/us-flag.svg",
    balance: "3,280.50",
    kycLevel: "KYC level 1",
    account: "*****9878245"
  },

  {
    currency: "GBP",
    currencyIcon: "£",
    flag: "/assets/uk-flag.svg",
    balance: "8,530.15",
    kycLevel: "KYC level 2",
    account: "*****8768245"
  },

  {
    currency: "EURO",
    currencyIcon: "€",
    flag: "/assets/euro-flag.svg",
    balance: "1,480.10",
    kycLevel: "KYC level 2",
    account: "*****9568149"
  },
]

export const transactions = [
  {
    name: "John Smith",
    time: "Today, 2:30 PM",
    amount: "+$250.00",
    status: "Completed",
    type: "income",
    icon: <ArrowDownLeft size={24} color="lightgreen"/>
  },

  {
    name: "Sarah Johnson",
    time: "Today, 11:15 AM",
    amount: "-$180.00",
    status: "Pending",
    type: "pending",
    icon: <ArrowRightLeft size={24} color="#007BFF" />
  },

  {       
    name: "Tech Corp Ltd",
    time: "Yesterday, 4:45 PM",
    amount: "+€500.00",
    status: "Completed",
    type: "income",
    icon: <ArrowUpRight size={24} color="lightgreen" />
  },
  
  {
    name: "Monthly Subscription",
    time: "Dec 28, 9:00 AM",
    amount: "-£75.50",
    status: "Reversed",
    type: "reversed",
    icon: <ArrowDownLeft size={24} color="lightgreen"/>      
  }
]

  