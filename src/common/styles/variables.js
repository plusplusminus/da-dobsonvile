export const fonts = {
  Serif: "mrs-eaves-xl-serif, Georgia, 'Times New Roman', Times, serif",
  Sans: "Montserrat, 'Helvetica Neue', Helvetica, Arial, sans-serif",
  Round: "museo-sans-rounded, 'Helvetica Neue', Helvetica, Arial, sans-serif",
};
export const timing = {
  default: ".8s",
};
export const fontWeight = {
  Bold: "600",
  Medium: "500",
  Normal: "400",
  Light: "300",
};

export const fontStyles = (size, lh, extras = {}) => ({
  fontSize: size,
  lineHeight: lh,
  ...extras,
});

export const letterSpacing = {
  None: "0",
  Base: "1px",
  Large: "2px",
};

export const colors = {
  Border: "#E8E8E8",
  borderWhiteO: "rgba(255,255,255,0.15)",
  bgBlue: "#155FA2",
  bgBlueLight: "#1D7BB9",
  bgLight: "#EEEEEE",
  bgLightO: "rgba(255,255,255,0.8)",
  bgDark: "#333333",
  bgDarkO: "rgba(51,51,51,0.8)",
  Black: "#000000",
  Blue: "#155FA2",
  BlueLight: "#1D7BB9",
  BlueLight1: "#85CEFF",
  BorderLight: "rgba(51,51,51,0.1)",
  Copy: "#333333",
  CopyLight: "#777777",
  Facebook: "#3A579A",
  Green: "#52A74B",
  GreenHover: "#088920",
  Heading: "#333333",
  Primary: "#155FA2",
  PrimaryHover: "#1E80C0",
  Red: "#B0153C",
  RedHover: "#B0153C",
  Transparent: "transparent",
  Twitter: "#00AAF0",
  WhatsApp: "#52A74B",
  White: "#ffffff",
  Yellow: "#FDC842",
  YellowHover: "#FDC842",
};

export const opacity = {
  Solid: ".1",
  Hover: ".75",
  Transparent: "0",
};

const spacingFactor = 8;
export const spacing = {
  Space: `${spacingFactor * 0}px`,     // 0
  Space0: `${spacingFactor / 2}px`,     // 4
  Space1: `${spacingFactor * 1}px`,     // 8
  Space2: `${spacingFactor * 2}px`,     // 16
  Space3: `${spacingFactor * 3}px`,     // 24
  Space4: `${spacingFactor * 4}px`,     // 32
  Space5: `${spacingFactor * 5}px`,     // 40
  Space6: `${spacingFactor * 6}px`,     // 48
  Space7: `${spacingFactor * 7}px`,     // 56
  Space8: `${spacingFactor * 8}px`,     // 64
  Space9: `${spacingFactor * 9}px`,     // 72
  Space10: `${spacingFactor * 10}px`,    // 80
  Space11: `${spacingFactor * 11}px`,    // 88
  Space12: `${spacingFactor * 12}px`,    // 96
  Space13: `${spacingFactor * 13}px`,    // 104
  Space14: `${spacingFactor * 14}px`,    // 168
  Space15: `${spacingFactor * 15}px`,    // 120
};
