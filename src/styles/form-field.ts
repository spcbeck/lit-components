import { css } from "lit";

export const formFieldClassNames = {
  root: "lc-field",
  label: "lc-field__label",
  control: "lc-field__control",
  hint: "lc-field__hint",
  error: "lc-field__error"
} as const;

export const formFieldStyles = css`
  :host {
    display: inline-flex;
    width: 100%;
    min-width: 220px;
    max-width: 420px;
    --lc-field-label-color: #0f172a;
    --lc-field-control-bg: #ffffff;
    --lc-field-control-border: #cbd5e1;
    --lc-field-control-border-focus: #0f766e;
    --lc-field-control-border-invalid: #dc2626;
    --lc-field-control-color: #0f172a;
    --lc-field-hint-color: #475569;
    --lc-field-error-color: #b91c1c;
    --lc-field-radius: 10px;
    --lc-field-gap: 0.4rem;
    --lc-field-padding: 0.55rem 0.7rem;
    --lc-field-font-size: 0.95rem;
  }

  .lc-field {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: var(--lc-field-gap);
    font-size: var(--lc-field-font-size);
    color: var(--lc-field-control-color);
  }

  .lc-field__label {
    color: var(--lc-field-label-color);
    font-weight: 600;
  }

  .lc-field__control {
    border: 1px solid var(--lc-field-control-border);
    border-radius: var(--lc-field-radius);
    background: var(--lc-field-control-bg);
    color: var(--lc-field-control-color);
    padding: var(--lc-field-padding);
    transition: border-color 120ms ease, box-shadow 120ms ease;
  }

  .lc-field__control:focus-within {
    border-color: var(--lc-field-control-border-focus);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--lc-field-control-border-focus) 20%, transparent);
  }

  .lc-field[data-invalid="true"] .lc-field__control {
    border-color: var(--lc-field-control-border-invalid);
  }

  .lc-field__hint {
    margin: 0;
    color: var(--lc-field-hint-color);
    font-size: 0.84em;
    line-height: 1.2;
  }

  .lc-field__error {
    margin: 0;
    color: var(--lc-field-error-color);
    font-size: 0.84em;
    line-height: 1.2;
  }
`;