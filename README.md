# The Bit Weavers — Vite + React + 3D Landing

This project is a Vite + React scaffold tailored to The Bit Weavers with an interactive 3D landing hero using Three.js, @react-three/fiber, @react-three/drei and GSAP ScrollTrigger.

Installation

1. Install runtime deps:

```bash
npm install
# if you already had package.json from this scaffold, this installs everything
```

2. If you manually setup from scratch, install these packages:

```bash
npm install react react-dom three @react-three/fiber @react-three/drei gsap
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Development

```bash
npm run dev
```

Build

```bash
npm run build
npm run preview
```

Where to customize 3D scene

- `src/components/Landing3D.jsx`: main 3D scene and the `FloatingGeom` mesh. Replace geometry or material here.
- Use `three` primitives or load GLTF assets for branded models. For GLTF use `useGLTF` from `@react-three/drei`.

Notes & tips

- GSAP ScrollTrigger is registered in `src/App.jsx` and used to animate camera/object during scroll in `Landing3D.jsx`.
- Tailwind is included. Edit `tailwind.config.cjs` for theme/customization.
- Performance: the Canvas sets DPR clamped to 2 and example uses `requestAnimationFrame` through r3f's `useFrame` loop.

