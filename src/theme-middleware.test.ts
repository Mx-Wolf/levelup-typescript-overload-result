import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import { withTheme } from './theme-middleware';
const template = `<!DOCTYPE html><html><head></head><body></body></html>`;

describe('поведение функции-посредника для указания темы', () => {
  it('сохраняет специфичность типа элемента', () => {
    const dom = new JSDOM(template);
    const { window: { document } } = dom;
    const button = document.createElement('button');
    expect(typeof (button.disabled) === 'undefined').to.eq(false);
    const result = withTheme(button);
    expect(typeof (result.disabled)==='undefined').to.eq(false); 
  })
})