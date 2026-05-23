# lit-components

Reusable Lit-based web components that can be consumed in Vue, React, and any framework that supports Custom Elements.

## What is included

- TypeScript source in `src/`
- ESM build output in `dist/`
- Generated type declarations (`.d.ts`) for editor support
- NPM publish-ready package exports
- Starter components:
	- `<lc-badge>`
	- `<lc-button>`
	- `<lc-card>`

## Install

```bash
npm install
```

## Build

```bash
npm run build
```

## Use in other projects

### Option 1: Register all components once

```ts
import "lit-components/define";
```

### Option 2: Import specific components

```ts
import "lit-components/badge";
import "lit-components/button";
import "lit-components/card";
```

## Examples

### Plain HTML / Vanilla JS

```html
<script type="module">
	import "lit-components/define";
</script>

<lc-card title="Hello" subtitle="Custom element">
	<lc-badge text="new"></lc-badge>
	<lc-button label="Action"></lc-button>
</lc-card>
```

### Vue 3

In `main.ts`:

```ts
import { createApp } from "vue";
import App from "./App.vue";
import "lit-components/define";

createApp(App).mount("#app");
```

In `vite.config.ts`, make sure Vue treats tags with `lc-` as custom elements:

```ts
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		vue({
			template: {
				compilerOptions: {
					isCustomElement: (tag) => tag.startsWith("lc-")
				}
			}
		})
	]
});
```

### React

In your app entry point (for example, `main.tsx`):

```tsx
import "lit-components/define";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
```

Then in React components:

```tsx
export function Dashboard() {
	return (
		<lc-card title="Metrics" subtitle="Live">
			<lc-badge text="beta"></lc-badge>
			<lc-button label="Refresh"></lc-button>
		</lc-card>
	);
}
```

## Test

```bash
npm run test
```

## CI

GitHub Actions workflow at `.github/workflows/ci.yml` runs:

- install (`npm ci`)
- typecheck (`npm run typecheck`)
- build (`npm run build`)
- tests (`npm run test`)
- publish validation (`npm run publish:check`)

## NPM publish

Update metadata in `package.json`:

- `name`
- `repository.url`
- `homepage`
- `bugs.url`

Then publish:

```bash
npm login
npm publish --access public
```

The `prepublishOnly` script automatically builds before publish.

## Add new components

1. Create a component file in `src/components/`.
2. Export it from `src/index.ts`.
3. Add an export path in `package.json` under `exports`.
4. Optionally import it in `src/define.ts` for all-at-once registration.