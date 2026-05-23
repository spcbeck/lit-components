import { describe, expect, it, vi } from "vitest";

import "../src/components/lc-badge.ts";
import "../src/components/lc-button.ts";
import "../src/components/lc-card.ts";

describe("lc-button", () => {
  it("renders label text", async () => {
    const element = document.createElement("lc-button") as HTMLElement & {
      label: string;
      updateComplete: Promise<void>;
      shadowRoot: ShadowRoot;
    };

    element.label = "Run";
    document.body.appendChild(element);
    await element.updateComplete;

    expect(element.shadowRoot.textContent).toContain("Run");

    element.remove();
  });

  it("emits lc-click when internal button is clicked", async () => {
    const element = document.createElement("lc-button") as HTMLElement & {
      updateComplete: Promise<void>;
      shadowRoot: ShadowRoot;
    };

    const handler = vi.fn();
    element.addEventListener("lc-click", handler);
    document.body.appendChild(element);
    await element.updateComplete;

    const internalButton = element.shadowRoot.querySelector("button");
    internalButton?.click();

    expect(handler).toHaveBeenCalledTimes(1);

    element.remove();
  });
});

describe("lc-card", () => {
  it("renders title and subtitle", async () => {
    const element = document.createElement("lc-card") as HTMLElement & {
      title: string;
      subtitle: string;
      updateComplete: Promise<void>;
      shadowRoot: ShadowRoot;
    };

    element.title = "Overview";
    element.subtitle = "Today";
    document.body.appendChild(element);
    await element.updateComplete;

    expect(element.shadowRoot.textContent).toContain("Overview");
    expect(element.shadowRoot.textContent).toContain("Today");

    element.remove();
  });
});

describe("lc-badge", () => {
  it("renders badge text", async () => {
    const element = document.createElement("lc-badge") as HTMLElement & {
      text: string;
      updateComplete: Promise<void>;
      shadowRoot: ShadowRoot;
    };

    element.text = "beta";
    document.body.appendChild(element);
    await element.updateComplete;

    expect(element.shadowRoot.textContent).toContain("beta");

    element.remove();
  });
});
