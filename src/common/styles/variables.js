export const fonts = {
  Serif: "mrs-eaves-xl-serif, Georgia, 'Times New Roman', Times, serif",
  Sans: "Montserrat, 'Helvetica Neue', Helvetica, Arial, sans-serif",
  Round: "museo-sans-rounded, 'Helvetica Neue', Helvetica, Arial, sans-serif",
};
export const timing = {
  base: ".1s",
};
export const fontWeight = {
  bold: "600",
  medium: "500",
  normal: "400",
  light: "300",
};

export const fontStyles = (size, lh, extras = {}) => ({
  fontSize: size,
  lineHeight: lh,
  ...extras,
});

export const letterSpacing = {
  none: "0",
  base: "0.015rem",
  large: "0.025rem",
};

export const colors = {

  baseBlack: "#000000",
  baseInherit: "inherit",
  baseTransparent: "transparent",
  baseWhite: "#FFFFFF",

  brandBlue: "#155FA2",
  brandBlueHover: "#2C6FAB",
  brandBlueLight: "#1D7BB9",
  brandGreen: "#52A74B",
  brandGreenHover: "#63B05D",
  brandRed: "#B0153C",
  brandRedHover: "#B82C4F",
  brandYellow: "#FDC842",
  brandYellowHover: "#FDCD55",
  brandWhite: "#FFFFFF",

  borderBase: "#E8E8E8",
  borderLight: "rgba(51,51,51,0.1)",
  borderWhiteO: "rgba(255,255,255,0.15)",

  bgBlue: "#155FA2",
  bgBlueLight: "#1D7BB9",
  bgLight: "#EEEEEE",
  bgLightO: "rgba(255,255,255,0.8)",
  bgDark: "#333333",
  bgDarkO: "rgba(51,51,51,0.8)",

  linkBase: "#333333",
  linkHover: "#777777",
  linkBlue: "#155FA2",
  linkBlueHover: "2C6FAB",

  statusDanger: "#B0153C",
  statusInfo: "#85CEFF",
  statusNeutral: "#333333",
  statusSuccess: "#52A74B",
  statusWarning: "#F5A623",

  textBase: "#333333",
  textLight: "#777777",
  textLightO: "rgba(255,255,255,0.85)",

  socialEmail: '#B0153C',
  socialFacebook: "#3A579A",
  socialTwitter: "#00AAF0",
  socialWhatsApp: "#52A74B",
};

export const icons = {
  none: '',
  close: "close",
  angleLeft: "angle-left",
  angleRight: "angle-right",
  bookmark: "bookmark",
  mobile: "mobile",
  newspaper: "newspaper",
  download: "download",
  print: "print",
  whatsapp: "whatsapp",
  envelope: "envelope",
  youtube: "youtube",
  twitter: "twitter",
  facebook: "facebook",
  instagram: "instagram",
}

export const opacity = {
  Solid: ".1",
  Hover: ".75",
  Transparent: "0",
};

const spacingFactor = 8;
export const spacing = {
  Space0: `${spacingFactor * 0}px`,     // 0
  Space05: `${spacingFactor / 2}px`,     // 4
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


export const media = {
  min: {
    1430: "1430px",
    1410: "1410px",
    1350: "1350px",
    1290: "1290px",
    1200: "1200px",
    1080: "1080px",
    1024: "1024px",
    960: "960px",
    840: "840px",
    768: "768px",
    720: "720px",
    600: "600px",
    560: "560px",
    480: "480px",
    360: "360px",
    320: "320pxm",
  },
  max: {
    1530: "1530px",
    1430: "1430px",
    1410: "1410px",
    1350: "1350px",
    1290: "1290px",
    1200: "1200px",
    1080: "1080px",
    1024: "1024px",
    960: "960px",
    840: "840px",
    768: "768px",
    720: "720px",
    600: "600px",
    560: "560px",
    480: "480px",
    360: "360px",
    320: "320px",
  },
};
