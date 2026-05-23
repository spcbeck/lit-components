import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("lc-card")
export class LcCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      --lc-card-bg: #ffffff;
      --lc-card-border: #d1d5db;
      --lc-card-radius: 16px;
      --lc-card-shadow: 0 10px 30px -18px rgba(0, 0, 0, 0.45);
      --lc-card-padding: 1rem;
      --lc-card-title-color: #0f172a;
      --lc-card-subtitle-color: #475569;
    }

    article {
      background: var(--lc-card-bg);
      border: 1px solid var(--lc-card-border);
      border-radius: var(--lc-card-radius);
      box-shadow: var(--lc-card-shadow);
      padding: var(--lc-card-padding);
    }

    h3 {
      margin: 0;
      color: var(--lc-card-title-color);
      font-size: 1rem;
      line-height: 1.3;
    }

    p {
      margin: 0.4rem 0 0;
      color: var(--lc-card-subtitle-color);
      font-size: 0.9rem;
    }

    .body {
      margin-top: 0.8rem;
    }
  `;

  @property({ type: String })
  title = "Card title";

  @property({ type: String })
  subtitle = "Card subtitle";

  render() {
    return html`
      <article>
        <header>
          <h3>${this.title}</h3>
          <p>${this.subtitle}</p>
        </header>
        <section class="body">
          <slot></slot>
        </section>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lc-card": LcCard;
  }
}
