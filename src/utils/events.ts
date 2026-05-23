export interface ComponentEventDetail<TValue = unknown> {
  component: string;
  value?: TValue;
  nativeEvent?: Event;
}

interface EmitComponentEventOptions {
  cancelable?: boolean;
}

export function createComponentEventDetail<TValue = unknown>(
  component: string,
  detail: Omit<ComponentEventDetail<TValue>, "component"> = {}
): ComponentEventDetail<TValue> {
  return {
    component,
    ...detail
  };
}

export function emitComponentEvent<TDetail>(
  target: EventTarget,
  type: string,
  detail: TDetail,
  options: EmitComponentEventOptions = {}
): boolean {
  return target.dispatchEvent(
    new CustomEvent<TDetail>(type, {
      detail,
      bubbles: true,
      composed: true,
      cancelable: options.cancelable ?? false
    })
  );
}