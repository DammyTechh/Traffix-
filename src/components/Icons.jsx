/* 24px grid, 2.0 stroke, round caps. Kept deliberately blunt so every glyph
   still reads at the 20px most of them are drawn at. */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': 'true',
  focusable: 'false',
};

const Svg = ({ size = 24, children, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>{children}</svg>
);

/* ---------- sensing ---------- */

export const IconCamera = (p) => (
  <Svg {...p}>
    <rect x="2.4" y="6.8" width="13" height="10.4" rx="2.6" />
    <path d="m15.4 11 6.2-3.4v8.8L15.4 13" />
    <circle cx="7.8" cy="12" r="2.3" />
  </Svg>
);

export const IconRadar = (p) => (
  <Svg {...p}>
    <circle cx="4.6" cy="19.4" r="1.6" />
    <path d="M4.6 13.6a5.8 5.8 0 0 1 5.8 5.8" />
    <path d="M4.6 8.4a11 11 0 0 1 11 11" />
    <path d="M4.6 3.2a16.2 16.2 0 0 1 16.2 16.2" />
  </Svg>
);

export const IconFusion = (p) => (
  <Svg {...p}>
    <path d="M2.6 6.2h5.6c2.6 0 2.8 5.8 5.4 5.8h7.4" />
    <path d="M2.6 17.8h5.6c2.6 0 2.8-5.8 5.4-5.8" />
    <path d="m17.4 8.4 3.6 3.6-3.6 3.6" />
  </Svg>
);

export const IconChip = (p) => (
  <Svg {...p}>
    <rect x="5.6" y="5.6" width="12.8" height="12.8" rx="2.9" />
    <rect x="9.7" y="9.7" width="4.6" height="4.6" rx="1.3" />
    <path d="M12 2.2v3.4" />
    <path d="M12 18.4v3.4" />
    <path d="M2.2 12h3.4" />
    <path d="M18.4 12h3.4" />
  </Svg>
);

export const IconQueue = (p) => (
  <Svg {...p}>
    <rect x="2.4" y="8.4" width="5.6" height="7.2" rx="1.7" />
    <rect x="9.2" y="8.4" width="5.6" height="7.2" rx="1.7" />
    <rect x="16" y="8.4" width="5.6" height="7.2" rx="1.7" />
  </Svg>
);

/* ---------- the stack ---------- */

export const IconBoard = (p) => (
  <Svg {...p}>
    <rect x="2.6" y="4.4" width="18.8" height="15.2" rx="2.6" />
    <rect x="6.2" y="8.2" width="5.8" height="5.8" rx="1.4" />
    <path d="M15.4 9h3.2" />
    <path d="M15.4 12h3.2" />
    <path d="M15.4 15h3.2" />
  </Svg>
);

export const IconSignal = (p) => (
  <Svg {...p}>
    <rect x="6.2" y="2.4" width="11.6" height="19.2" rx="4.4" />
    <circle cx="12" cy="7.4" r="1.9" />
    <circle cx="12" cy="12" r="1.9" />
    <circle cx="12" cy="16.6" r="1.9" />
  </Svg>
);

export const IconSolar = (p) => (
  <Svg {...p}>
    <path d="M3 16.2 5.8 7.4h12.4L21 16.2Z" />
    <path d="M12 7.4v8.8" />
    <path d="M4.4 11.8h15.2" />
    <path d="M8 20.6h8" />
  </Svg>
);

export const IconBattery = (p) => (
  <Svg {...p}>
    <rect x="2.4" y="7.4" width="16" height="9.2" rx="2.6" />
    <path d="M21.6 10.6v2.8" />
    <path d="m11.4 9.4-2.3 3.2h3.8l-2.3 3" />
  </Svg>
);

export const IconDashboard = (p) => (
  <Svg {...p}>
    <rect x="2.6" y="3.8" width="18.8" height="13.4" rx="2.6" />
    <path d="M8 21.2h8" />
    <path d="M12 17.2v4" />
    <path d="M7 13.2v-2.4" />
    <path d="M12 13.2V7.8" />
    <path d="M17 13.2V9.6" />
  </Svg>
);

export const IconLink = (p) => (
  <Svg {...p}>
    <path d="M10.2 13.8a4.8 4.8 0 0 0 7.2.5l2.6-2.6a4.8 4.8 0 0 0-6.8-6.8l-1.5 1.5" />
    <path d="M13.8 10.2a4.8 4.8 0 0 0-7.2-.5L4 12.3a4.8 4.8 0 0 0 6.8 6.8l1.5-1.5" />
  </Svg>
);

/* ---------- operations ---------- */

export const IconPower = (p) => (
  <Svg {...p}>
    <path d="M12 2.8v8.4" />
    <path d="M17.8 6.4a7.6 7.6 0 1 1-11.6 0" />
  </Svg>
);

export const IconClock = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 6.6V12l3.6 2.2" />
  </Svg>
);

export const IconCalendar = (p) => (
  <Svg {...p}>
    <rect x="3.2" y="5.2" width="17.6" height="16" rx="2.6" />
    <path d="M8.2 2.8v4.8" />
    <path d="M15.8 2.8v4.8" />
    <path d="M3.2 10.4h17.6" />
  </Svg>
);

export const IconCheck = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.2 12.2 2.6 2.6 5-5.6" />
  </Svg>
);

export const IconWarning = (p) => (
  <Svg {...p}>
    <path d="M12 3.2 1.8 20.8h20.4Z" />
    <path d="M12 9.8v4.6" />
    <path d="M12 17.6h.01" />
  </Svg>
);

export const IconShield = (p) => (
  <Svg {...p}>
    <path d="M12 2.8 4.5 6v6c0 4.3 3.1 7.8 7.5 9.2 4.4-1.4 7.5-4.9 7.5-9.2V6Z" />
    <path d="m8.9 11.9 2.2 2.2 4.1-4.4" />
  </Svg>
);

/* ---------- UI ---------- */

export const IconArrow = ({ size = 18, ...p }) => (
  <Svg size={size} {...p}>
    <path d="M4.5 12h14" />
    <path d="m13 6.5 5.5 5.5-5.5 5.5" />
  </Svg>
);

export const IconArrowDown = ({ size = 18, ...p }) => (
  <Svg size={size} {...p}>
    <path d="M12 4.5v14" />
    <path d="m6.5 13 5.5 5.5L17.5 13" />
  </Svg>
);

export const IconMenu = ({ size = 20, ...p }) => (
  <Svg size={size} {...p}>
    <path d="M3.8 8.5h16.4" />
    <path d="M3.8 15.5h16.4" />
  </Svg>
);

export const IconClose = ({ size = 20, ...p }) => (
  <Svg size={size} {...p}>
    <path d="m6.2 6.2 11.6 11.6" />
    <path d="M17.8 6.2 6.2 17.8" />
  </Svg>
);
