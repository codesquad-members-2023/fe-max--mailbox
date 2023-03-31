# 빨간 우체통 마을 찾기

## Table of Contents

- [Features](#features)
- [Keywords](#keywords)
- [Ideas](#ideas)

## Features

- [x] Mission 1
  - [x] Draw villages on screen
    - [x] Choose random number of villages
    - [x] Create village
      - [x] Choose random size
      - [x] Choose random coordinates
    - [x] Render village
      - [x] Overlap check(10 times)
      - [x] Render or skip based on overlap check
  - [x] Draw mailboxes on screen
    - [x] Choose random number of mailboxes
- [ ] Mission 2
  - [ ] Button event
    - [x] Find all villages with a mailbox
      - [x] Create and use a custom `querySelector`
      - [x] Create and use a custom `querySelectorAll`
    - [x] Render village names in text view section
    - [x] Render village names in order of ascending size of mailbox
      - [x] Implement and use a sorting algorithm
    - [ ] After 2 seconds, change the village border color to red
      - [ ] Use `setTimeout` and `Promise` pattern to handle that delay

## Keywords

- `Element.getBoundingClientRect()`
- `document.elementFromPoint()`
- `dataset` vs `getAttribute()`/`setAttribute()`
- Merge sort vs Radix sort

## Development Process

### Ideas

- Check overlap using coordinates
- Check overlap using sides

### Issues

#### Nested Villages

- Previous Approach
  - Used `getBoundingClientRect()` to generate random size and position.
  - Unlikely to generate nested villages.
- Solution
  - Store parent village info reference in `VillageInfo` class.

#### Overlap between siblings

- Problem
  - Villages kept overlapping.
- Solution
  - Adjust size and position of village.
  - Needed to change `every` to `some` when checking overlap between sibling villages.
