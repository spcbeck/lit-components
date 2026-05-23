import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("lc-badge")
export class LcBadge extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      --lc-badge-bg: #ecfeff;
      --lc-badge-color: #155e75;
      --lc-badge-border: #67e8f9;
      --lc-badge-radius: 999px;
      --lc-badge-padding: 0.2rem 0.6rem;
      --lc-badge-font-size: 0.75rem;
      --lc-badge-font-weight: 700;
      --lc-badge-letter-spacing: 0.02em;
    }

    span {
      display: inline-flex;
      align-items: center;
      border: 1px solid var(--lc-badge-border);
      border-radius: var(--lc-badge-radius);
      background: var(--lc-badge-bg);
      color: var(--lc-badge-color);
      padding: var(--lc-badge-padding);
      font-size: var(--lc-badge-font-size);
      font-weight: var(--lc-badge-font-weight);
      letter-spacing: var(--lc-badge-letter-spacing);
      line-height: 1;
      white-space: nowrap;
      text-transform: uppercase;
    }
  `;

  @property({ type: String })
  text = "new";

  render() {
    return html`<span><slot>${this.text}</slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lc-badge": LcBadge;
  }
}
