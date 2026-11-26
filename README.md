# Sonit Maddineni portfolio

A fixed-stage, scrollytelling portfolio built with Vite and vanilla TypeScript. Content is centralized in `src/data/content.ts`; the scroll behavior is split into small modules under `src/scroll`.

## Setup

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

The production output is written to `dist/`.

## Deploy to Vercel

1. Import this repository into Vercel.
2. Use the framework preset **Vite**.
3. Set the build command to `npm run build` and output directory to `dist` (Vercel detects these defaults).
4. Deploy. No environment variables are required.
