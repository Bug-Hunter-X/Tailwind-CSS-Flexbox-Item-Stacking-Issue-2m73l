# Tailwind CSS Flexbox Unexpected Vertical Stacking

This repository demonstrates a common issue encountered when using Tailwind CSS's flexbox utility classes. The problem arises when explicitly setting the width and height of flex items, causing them to stack vertically instead of aligning horizontally as expected.

## Bug Description:

The provided code snippet utilizes Tailwind classes to style two div elements within a flex container. Although `flex` is applied, elements unexpectedly stack vertically due to the combination of `w-10` and `h-10`. This occurs because the default flex-basis is not accounted for.

## Solution:

The solution involves adding either `flex-shrink-0` (prevent shrinking) or the flex-grow class to each child element of the flex container to solve the unexpected vertical stacking issue. `flex-shrink-0` is recommended for this specific use case to ensure the divs maintain their defined width.

## How to Reproduce:

1. Clone this repository.
2. Open `index.html` in your browser. Note the vertical stacking.
3. Examine `bugSolution.html` to see the corrected code using `flex-shrink-0` and `flex-grow`.