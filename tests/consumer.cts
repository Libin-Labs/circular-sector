import { sectorMeasures } from '@lp-labs/circular-sector';
if (Math.abs(sectorMeasures(2, Math.PI).area - 2 * Math.PI) > 1e-10) throw new Error('Geometry');
// @ts-expect-error invalid argument must be rejected by declarations
sectorMeasures('2', Math.PI);
