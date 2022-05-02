import '@mui/material/styles';

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    section: CSSProperties;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    manoSpalva?: PaletteColorOptions;
  }

  interface Palette {
    manoSpalva: PaletteColor;
  }
}
