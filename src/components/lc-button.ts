import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("lc-button")
export class LcButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      --lc-button-bg: #0f766e;
      --lc-button-bg-hover: #115e59;
      --lc-button-color: #ffffff;
      --lc-button-radius: 12px;
      --lc-button-padding: 0.7rem 1rem;
      --lc-button-font-size: 0.95rem;
      --lc-button-font-weight: 600;
    }

    button {
      border: none;
      border-radius: var(--lc-button-radius);
      padding: var(--lc-button-padding);
      background: var(--lc-button-bg);
      color: var(--lc-button-color);
      font-size: var(--lc-button-font-size);
      font-weight: var(--lc-button-font-weight);
      cursor: pointer;
      transition: background 150ms ease, transform 150ms ease;
    }

    button:hover {
      background: var(--lc-button-bg-hover);
      transform: translateY(-1px);
    }

    button:focus-visible {
      outline: 2px solid #14b8a6;
      outline-offset: 2px;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }
  `;

  @property({ type: String })
  label = "Click me";

  @property({ type: Boolean, reflect: true })
  disabled = false;

  private onClick(): void {
    if (this.disabled) {
      return;
    }

    this.dispatchEvent(
      new CustomEvent("lc-click", {
        detail: { label: this.label },
        bubbles: true,
        composed: true
      })
    );
  }

  render() {
    return html`
      <button ?disabled=${this.disabled} @click=${this.onClick}>
        <slot>${this.label}</slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lc-button": LcButton;
  }
}
