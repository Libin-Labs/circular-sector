import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('analytic fixture', () => {
  assert.ok(Math.abs(api.sectorMeasures(2, Math.PI).area - 2 * Math.PI) < 1e-10);
});
test('semicircle chord', () => {
  assert.equal(api.sectorMeasures(2, Math.PI).chord, 4);
});
test('zero angle', () => {
  assert.deepEqual(api.sectorMeasures(2, 0), { arc: 0, area: 0, chord: 0, segmentArea: 0 });
});
test('tiny segment resolution', () => {
  const s = api.sectorMeasures(1, 1e-8);
  assert.ok(Math.abs(s.segmentArea / (1e-24 / 12) - 1) < 1e-14);
});
test('invalid angle', () => {
  assert.throws(() => api.sectorMeasures(1, -1));
  assert.throws(() => api.sectorMeasures(1, 7));
});
test('type contract', () => {
  assert.throws(() => api.sectorMeasures('2', Math.PI));
});
