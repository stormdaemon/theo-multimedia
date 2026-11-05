import { Geologica } from 'next/font/google';

// One variable family for the whole site. The SHRP (sharpness) and slnt axes
// drive the "heat" reveal: headings arrive soft, slanted and orange, then cool
// down sharp and upright.
export const geologica = Geologica({
  subsets: ['latin'],
  axes: ['SHRP', 'slnt'],
  variable: '--font-geologica',
  display: 'swap',
  preload: true,
});
