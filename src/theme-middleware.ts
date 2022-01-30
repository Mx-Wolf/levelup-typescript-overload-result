let themeName: string | undefined;
export const setTheme = (name: string) => themeName = name;
export const withTheme = (element:HTMLElement)=>{
  if(typeof themeName === 'string'){
    element.classList.add(themeName);
  }
  return element;
}