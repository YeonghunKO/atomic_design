export const breakPoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1440,
  xxl: 1800,
};

export const size = {
  xs: `${breakPoints.xs}px`,
  sm: `${breakPoints.sm}px`,
  md: `${breakPoints.md}px`,
  lg: `${breakPoints.lg}px`,
  xl: `${breakPoints.xl}px`,
  xxl: `${breakPoints.xxl}px`,
};

export const device = {
  xs: `(min-width:${size.xs})`,
  sm: `(min-width:${size.sm})`,
  md: `(min-width:${size.md})`,
  lg: `(min-width:${size.lg})`,
  xl: `(min-width:${size.xl})`,
  xxl: `(min-width:${size.xxl})`,
};
