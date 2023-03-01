const darkColor = {
  name: 'dark',
  textDarkColor: '#7f8489',
  textLightColor: '#fdfdfd',
  backgroundColor1: '#292d32',
  backgroundColor2: '#16171b',
  iconBackgroundColor1: '#1f86e4',
  iconBackgroundColor2: '#76d0ff',
  iconColor: 'white',
  roomBackgroundColor1: '#1f2328',
  roomBackgroundColor2: '#1a1c1f',
  roomShadowColor: '#262e32',
  roomBlurColor: '#1b1d21',
  borderChartColor: '#319ab2',
  borderChartText: '#319ab2',
  backgroundChartColor1: '#222428',
  backgroundChartColor2: '#222428',
  backgroundChartColorMain: 'rgba(31, 134, 228,0.8)',
  nodeChartColor: '#26a1ff',
  iconActive: '#1f86e4',
  iconUnActive: '#7f8489',
  backgroundColorNavbar1: '#212328',
  backgroundColorNavbar2: '#16171b',
  shadowColorNavbar: '#19a3db',
  borderColor: 'white',
  colorRoom1: 'rgba(70,71,94,0.7)',
  textRoom: '#eaeaec',
  fontWeight: 'none',
  roomUnActive1: '#3B3A4F',
  roomUnActive2: '#46475E',
  roomActive: '#2E2E3E',
  iconRoomUnActive: '#848184',
  iconRoomActive1: '#27D71C',
  iconRoomActive2: '#ABE505',
  roomTextUnActive: '#262626',
  roomTextActive: '#ffffff',
  roomButtonActive: '#2E2E3E',
  roomButtonUnActive1: '#3B3A4F',
  roomButtonUnActive2: '#46475E',
};
const whiteColor = {
  name: 'light',
  textDarkColor: 'rgba(0,0,0,0.4)',
  textLightColor: '#262626',
  backgroundColor1: '#f0f0f0',
  backgroundColor2: '#f0f0f0',
  iconBackgroundColor1: '#0B2556',
  iconBackgroundColor2: '#0B2556',
  iconColor: 'white',
  roomBackgroundColor1: '#ffffff',
  roomBackgroundColor2: '#ffffff',
  roomShadowColor: '#ffffff',
  roomBlurColor: '#ffffff',
  borderChartColor: 'transparent',
  borderChartText: '#0B2556',
  backgroundChartColor1: '#ffffff',
  backgroundChartColor2: 'rgba(255,255,255,0.49)',
  backgroundChartColorMain: 'rgba(31, 134, 228, 1)',
  nodeChartColor: '#0B2556',
  iconActive: '#1E1E1E',
  iconUnActive: '#b6b2b2',
  backgroundColorNavbar1: '#ffffff',
  backgroundColorNavbar2: '#f0f0f0',
  shadowColorNavbar: 'transparent',
  borderColor: '#262626',
  colorRoom1: '#ffffff',
  textRoom: 'rgba(0,0,0,0.4)',
  fontWeight: 'bold',
  roomUnActive1: '#ffffff',
  roomUnActive2: '#ffffff',
  roomActive: '#12283D',
  iconRoomUnActive: '#848184',
  iconRoomActive1: '#ffffff',
  iconRoomActive2: '#ffffff',
  roomTextUnActive: '#262626',
  roomTextActive: '#ffffff',
  roomButtonActive: '#cccccc',
  roomButtonUnActive1: '#8d9297',
  roomButtonUnActive2: '#8d9297',
};

const color = (state = darkColor, action) => {
  switch (action.type) {
    case 'setDark':
      state = darkColor;
      break;
    case 'setWhite':
      state = whiteColor;
      break;
  }
  return state;
};

export default color;
