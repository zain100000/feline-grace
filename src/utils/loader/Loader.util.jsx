/**
 * @file Loader.util.jsx
 * @module Components/Loader
 * @description
 * Custom loader component that displays an animated spinning loader with configurable size and color.
 */

const Loader = ({ size = 24, color = "var(--primary)", style }) => {
  return (
    <section
      id="loader"
      className="flex items-center justify-center w-full h-full"
      style={style}
    >
      <div
        className="animate-spin rounded-full border-2 border-white/20"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderLeftColor: color,
        }}
      />
    </section>
  );
};

export default Loader;
