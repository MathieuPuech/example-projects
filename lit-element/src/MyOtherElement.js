import { html, LitElement } from 'lit-element';

export class MyOtherElement extends LitElement {
  static get properties() {
    return {
      hasBeenClicked: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.__click(false);
  }

  __click(bool) {
    this.hasBeenClicked = bool ?
      // This branch should be covered
      true : false;
  }

  render() {
    return html`
      <button @click=${() => this.__click(true)}>Click</button>
    `;
  }
}
