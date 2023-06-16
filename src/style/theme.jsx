const deviceSizes = {
    mobile: "375px",
    tablet: "768px",
    laptop: "1440px",
  };
  
  const device = {
    mobile: `screen and (max-width: ${deviceSizes.mobile})`,
    tablet: `screen and (max-width: ${deviceSizes.tablet})`,
    laptop: `screen and (max-width: ${deviceSizes.laptop})`,
  };
  
  const theme = {
    device
  };
// const theme = {
//     color2020: '#E5DEF5',
//     point2020: '#D4CCE9',
//     color2010: '#FFE7B1',
//     point2010: '#FFCF66',
//     color2000: '#E1ECAB',
//     point2000: '#DAF25C',
//     color1990: '#C6DFF3',
//     point1990: '#8ABEE8',
//     colorAll: '#E7E4DD',
//     pointAll: '#F5DA9A',
//     feedback: '#FFF8EC',
//     gray: '#818181',
//     mainColor:'#EF6363',
//     mobile: `(max-width: ${size.mobile})`,
//     tablet: `(max-width: ${size.tablet})`,
//     laptop: `(max-width: ${size.laptop})`,
//     desktop: `(min-width: ${size.desktop})`,
// }

export default theme;

