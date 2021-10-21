import palette from './palette';

export default {
  fontFamily: [
    'Manrope',
    'sans-serif',
  ].join(','),
  h1: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '35px',
    letterSpacing: '-0.24px',
    lineHeight: '40px'
  },
  h2: {
    color: palette.text.primary,
    fontWeight: 400,
    fontSize: '29px',
    letterSpacing: '-0.24px',
    lineHeight: '32px'
  },
  h3: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '1.5em',
    letterSpacing: '-0.06px',
    lineHeight: '28px'
  },
  h4: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '1.25em',
    letterSpacing: '-0.06px',
    lineHeight: '24px'
  },
  h5: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '1em',
    letterSpacing: '-0.05px',
    lineHeight: '20px'
  },
  h6: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '0.8750em',
    letterSpacing: '-0.05px',
    lineHeight: '20px'
  },
  subtitle1: {
    color: palette.text.primary,
    fontFamily: 'Manrope',
    fontWeight: 700,
    fontSize: '1.5em',
    lineHeight: '36px'
  },
  subtitle2: {
    color: palette.text.secondary,
    fontFamily: 'Manrope',
    fontWeight: 400,
    fontSize: '1em',
    lineHeight: '24px'
  },
  subtitle3: {
    color: palette.text.primary,
    fontFamily: 'Manrope',
    fontWeight: 800,
    fontSize: '1.25em',
    lineHeight: '27px'
  },
  subtitle4: {
    color: palette.text.primary,
    fontFamily: 'Manrope',
    fontWeight: 700,
    fontSize: '0.875em',
    lineHeight: '19.6px'
  },
  subtitle5: {
    color: palette.text.secondary,
    fontFamily: 'Manrope',
    fontWeight: 700,
    fontSize: '0.875em',
    lineHeight: '19.6px'
  },
  body1: {
    color: palette.text.primary,
    fontSize: '0.8750em',
    letterSpacing: '-0.05px',
    lineHeight: '21px'
  },
  body2: {
    color: palette.text.secondary,
    fontSize: '0.75em',
    letterSpacing: '-0.04px',
    lineHeight: '18px'
  },
  button: {
    color: palette.button.primary.background,
    fontSize: '1em'
  },
  caption: {
    color: palette.text.secondary,
    fontSize: '0.6875em',
    letterSpacing: '0.33px',
    lineHeight: '13px'
  },
  overline: {
    color: palette.text.secondary,
    fontSize: '0.6875em',
    fontWeight: 500,
    letterSpacing: '0.33px',
    lineHeight: '13px',
    textTransform: 'uppercase'
  },
	
};
