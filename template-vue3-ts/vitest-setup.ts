import matchers from '@testing-library/jest-dom/matchers'
import { expect } from 'vitest'

expect.extend(matchers)

window.matchMedia = function () {
  return { matches: false }
}
