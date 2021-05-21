import { html, fixture, expect } from '@open-wc/testing';

import '../my-other-element.js';

describe('MyOtherElement', () => {
  it('change the property hasBeenClicked to true on button click', async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const el = await fixture(html`
      <my-other-element></my-other-element>
    `);
    el.shadowRoot.querySelector('button').click();

    expect(el.hasBeenClicked).to.be.true;
  });
});
