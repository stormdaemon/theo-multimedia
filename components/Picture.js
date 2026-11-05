/**
 * AVIF first, WebP fallback. `src` is the path without extension: both files
 * exist side by side in /public. The <picture> box is display: contents, so the
 * <img> is styled as if it were the direct child.
 */
export default function Picture({ src, alt = '', width, height, className, loading = 'lazy', fetchPriority, sizes, style }) {
  return (
    <picture>
      <source type="image/avif" srcSet={`${src}.avif`} sizes={sizes} />
      <img
        src={`${src}.webp`}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        className={className}
        style={style}
      />
    </picture>
  );
}
