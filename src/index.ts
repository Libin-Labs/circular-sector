function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function length(v: number): void {
  finite(v, 1e-9, 1e9);
}
export function sectorMeasures(
  radius: number,
  angle: number,
): { arc: number; area: number; chord: number; segmentArea: number } {
  length(radius);
  finite(angle, 0, 2 * Math.PI);
  const z = angle * angle,
    difference =
      angle < 0.01
        ? angle * z * (1 / 6 - z / 120 + (z * z) / 5040 - (z * z * z) / 362880)
        : angle - Math.sin(angle);
  return {
    arc: radius * angle,
    area: (radius * radius * angle) / 2,
    chord: 2 * radius * Math.sin(angle / 2),
    segmentArea: (radius * radius * difference) / 2,
  };
}
