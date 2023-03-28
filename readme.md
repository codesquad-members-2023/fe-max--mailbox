# 빨간 우체통 마을 찾기

## Table of Contents
- [Features](#features)
- [Keywords](#keywords)
- [Ideas](#ideas)

## Features
- [ ] Mission 1
  - [ ] Draw villages on screen
    - [ ] Choose random number of villages
    - [x] Create village
      - [x] Choose random size
      - [x] Choose random coordinates
    - [ ] Render village
      - [ ] Overlap check(3 times)
      - [ ] Render or skip based on overlap check
  - [ ] Draw mailboxes on screen
    - [ ] Choose random number of mailboxes
    - [ ] Choose random size
- [ ] Mission 2

## Keywords
- `Element.getBoundingClientRect()`
- `document.elementFromPoint()`

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
