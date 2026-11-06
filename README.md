# @lp-labs/circular-sector

Circular sector arc,area,chord and segment area.

Original, standalone MIT TypeScript implementation with **zero runtime or peer dependencies**. ESM/CommonJS exports and separate declarations; Node18+ and compatible ES2022 browsers. No service, filesystem, network, clock or browser globals accessed on import. Compiler/formatter dependencies are development-only.

## Install

```sh
npm install @lp-labs/circular-sector
```

## Working example

```js
import { sectorMeasures } from '@lp-labs/circular-sector';
if (Math.abs(sectorMeasures(2, Math.PI).area - 2 * Math.PI) > 1e-10) throw new Error('Geometry');
```

CommonJS: `const api = require('@lp-labs/circular-sector')`.

## Behavior, customization and limits

sectorMeasures(radius,angle) requires radius[1e-9,1e9],angle radians[0,2pi]. Segment area uses r^2*(theta-sin(theta))/2 with a Taylor expansion below0.01 to preserve tiny-angle differences. A full-turn chord is floating near zero,not snapped. Major sector/segment allowed. Matching caller units; pure ideal geometry,not CAD topology,structural engineering,manufacturing tolerances or safety guidance. Constant time,unless specified; fresh objects and no mutation.

Use the explicit function arguments and public types below to customize the documented behavior. There are no hidden environment settings or sibling-library requirements. Array inputs must be dense; sparse entries are invalid. Inputs are validated before a successful result is returned. Outputs do not mutate caller-owned inputs. Hostile proxies/getters and concurrent mutation are outside the contract.

## Errors and integration

Invalid data never produces an empty success-shaped substitute. TypeError reports incompatible runtime types/nonfinite numbers; RangeError reports unsupported ranges, invalid syntax, inconsistent states and exceeded budgets. Functions that explicitly return null, false or empty arrays describe those legitimate outcomes above. Errors propagate to callers; UI applications should catch at their boundary and visibly notify users. Numerical calculations use JavaScript IEEE754 unless the API explicitly uses bigint; compare approximate numerical results with application-appropriate tolerances.

## Complete public API

```ts
export declare function sectorMeasures(
  radius: number,
  angle: number,
): {
  arc: number;
  area: number;
  chord: number;
  segmentArea: number;
};
```

## Performance and portability

Complexity and resource ceilings are specified above. Buffered synchronous algorithms do not create workers or timers; callers can move expensive work to their own worker. Limits are enforced, not silently truncated. No runtime imports from any other library. No compatibility or completeness claims beyond the stated scope.

## Support

If this library is useful to you, consider supporting its maintenance with a [donation via PayPal](https://www.paypal.me/LibinPrasanth).

## Author

Created by [Libin Prasanth](https://www.linkedin.com/in/libinprasanth/). Connect on LinkedIn for updates and discussion.
