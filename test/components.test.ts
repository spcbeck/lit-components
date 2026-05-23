import { describe, expect, it, vi } from "vitest";
import {
  createComponentEventDetail,
  emitComponentEvent
} from "../src/utils/events.ts";
import { formFieldClassNames, formFieldStyles } from "../src/styles/form-field.ts";

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
    expect(handler.mock.calls[0][0].detail).toMatchObject({
      component: "lc-button",
      value: { label: "Click me" }
    });

    element.remove();
  });
});

describe("event helpers", () => {
  it("creates normalized component event detail", () => {
    const detail = createComponentEventDetail("lc-input", {
      value: "abc"
    });

    expect(detail).toEqual({
      component: "lc-input",
      value: "abc"
    });
  });

  it("dispatches composed and bubbling custom events", () => {
    const target = document.createElement("div");
    const handler = vi.fn();
    target.addEventListener("lc-test", handler);

    emitComponentEvent(target, "lc-test", { component: "lc-test" });

    expect(handler).toHaveBeenCalledTimes(1);
    const event = handler.mock.calls[0][0] as CustomEvent;
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
  });

  it("supports cancelable events", () => {
    const target = document.createElement("div");
    target.addEventListener("lc-before-open", (event) => event.preventDefault());

    const dispatched = emitComponentEvent(
      target,
      "lc-before-open",
      { component: "lc-modal" },
      { cancelable: true }
    );

    expect(dispatched).toBe(false);
  });
});

describe("form field shared styles", () => {
  it("exports stable class name contract", () => {
    expect(formFieldClassNames).toEqual({
      root: "lc-field",
      label: "lc-field__label",
      control: "lc-field__control",
      hint: "lc-field__hint",
      error: "lc-field__error"
    });
  });

  it("contains invalid state and focus styles", () => {
    const cssText = formFieldStyles.cssText;

    expect(cssText).toContain(".lc-field[data-invalid=\"true\"] .lc-field__control");
    expect(cssText).toContain(".lc-field__control:focus-within");
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
