import { ThemeMiddleware } from "./i-face-theme-middleware";

let themeName: string | undefined;
export const setTheme = (name: string) => themeName = name;
export const withTheme:ThemeMiddleware = (element)=>{
  if(typeof themeName === 'string'){
    element.classList.add(themeName);
  }
  return element as any;
}