// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" }
import * as $0 from "./routes/_404.jsx"
import * as $1 from "./routes/_500.jsx"
import * as $2 from "./routes/_middleware.js"
import * as $3 from "./routes/index.jsx"
import * as $4 from "./routes/javascript.jsx"
import * as $5 from "./routes/pages/[slug].jsx"
import * as $6 from "./routes/pages/index.jsx"
import * as $7 from "./routes/showcase.jsx"
import * as $8 from "./routes/sitemap.xml.js"
import * as $9 from "./routes/uploads/[file].js"
import * as $$0 from "./islands/Counter.tsx"

const manifest = {
  routes: {
    "./routes/_404.jsx": $0,
    "./routes/_500.jsx": $1,
    "./routes/_middleware.js": $2,
    "./routes/index.jsx": $3,
    "./routes/javascript.jsx": $4,
    "./routes/pages/[slug].jsx": $5,
    "./routes/pages/index.jsx": $6,
    "./routes/showcase.jsx": $7,
    "./routes/sitemap.xml.js": $8,
    "./routes/uploads/[file].js": $9,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
}

export default manifest
