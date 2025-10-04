import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('e-counter')
export class CounterElement extends LitElement {
	@property({ type: Number }) accessor value = 0;

	render() {
		return html`<button @click=${() => this.value++}>${this.value}</button>`;
	}
}

document.body.innerHTML = '<e-counter value=5>';
