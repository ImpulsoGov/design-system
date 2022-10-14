export const themeColorSelector = (theme) => {
  let colors = "";
  const allColorsAvaliable = {
    ColorIP: "#2EB380",
    ColorSM: "#5367C9",
    ColorAGP: "#F4CCAB",
  };
  if (theme === undefined) {
    colors = "#5367C9";
  } else {
    colors = allColorsAvaliable?.[theme];
    
  }
  console.log(theme)
  return colors ;
};
