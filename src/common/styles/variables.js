export const fonts = {
  serif: "mrs-eaves-xl-serif, Georgia, 'Times New Roman', Times, serif",
  sans: "Montserrat, 'Helvetica Neue', Helvetica, Arial, sans-serif",
};
export const timing = {
  base: ".1s",
};
export const fontWeight = {
  bold: "600",
  medium: "500",
  regular: "400",
  light: "300",
};

export const fontStyles = (size, lh, extras = {}) => ({
  fontSize: size,
  lineHeight: lh,
  ...extras,
});

export const letterSpacing = {
  none: "0",
  small: "0.05rem",
  base: "0.15rem",
  large: "0.25rem",
  huge: "0.4rem",
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
  borderDark: "#EEEEEE",
  borderLight: "rgba(51,51,51,0.1)",
  borderWhite: "#FFFFFF",
  borderWhiteO: "rgba(255,255,255,0.15)",

  bgBlue: "#155FA2",
  bgBlueLight: "#1D7BB9",
  bgLight: "#F6F6F6",
  bgLightO: "rgba(255,255,255,0.8)",
  bgDark: "#333333",
  bgDarkO: "rgba(51,51,51,0.8)",
  bgWhite: "#FFFFFF",

  linkBase: "#333333",
  linkHover: "#777777",
  linkBlue: "#155FA2",
  linkBlueHover: "#2C6FAB",

  statusDanger: "#B0153C",
  statusInfo: "#85CEFF",
  statusNeutral: "#333333",
  statusSuccess: "#52A74B",
  statusWarning: "#F5A623",

  textBase: "#333333",
  textBlue: "#155FA2",
  textLight: "#777777",
  textRed: "#B82C4F",
  textLightO: "rgba(255,255,255,0.85)",
  textWhite: "#FFFFFF",

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
  solid: "1",
  hover: ".75",
  transparent: "0",
};

const spacingFactor = 8;
export const spacing = {
  space0: `${spacingFactor * 0}px`,     // 0
  space05: `${spacingFactor / 2}px`,     // 4
  space1: `${spacingFactor * 1}px`,     // 8
  space2: `${spacingFactor * 2}px`,     // 16
  space3: `${spacingFactor * 3}px`,     // 24
  space4: `${spacingFactor * 4}px`,     // 32
  space5: `${spacingFactor * 5}px`,     // 40
  space6: `${spacingFactor * 6}px`,     // 48
  space7: `${spacingFactor * 7}px`,     // 56
  space8: `${spacingFactor * 8}px`,     // 64
  space9: `${spacingFactor * 9}px`,     // 72
  space10: `${spacingFactor * 10}px`,    // 80
  space11: `${spacingFactor * 11}px`,    // 88
  space12: `${spacingFactor * 12}px`,    // 96
  space13: `${spacingFactor * 13}px`,    // 104
  space14: `${spacingFactor * 14}px`,    // 168
  space15: `${spacingFactor * 15}px`,    // 120
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
