import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import { withTheme } from './theme-middleware';
const template = `<!DOCTYPE html><html><head></head><body></body></html>`;
const imgSrc = './images/good.png';

describe('поведение функции-посредника для указания темы', () => {
  it('сохраняет специфичность типа элемента кнопки', () => {
    const dom = new JSDOM(template);
    const { window: { document } } = dom;
    const button = document.createElement('button');
    expect(typeof (button.disabled) === 'undefined').to.eq(false);
    const result = withTheme(button);
    expect(typeof (result.disabled)==='undefined').to.eq(false);     
  });
  it('сохраняет специфичность типа элемента картинки',() =>{
    const dom = new JSDOM(template);
    const {window: {document}} = dom;
    const img = withTheme(document.createElement('img'));
    img.src = imgSrc;
    expect(img.src).eq(imgSrc);
  })
})