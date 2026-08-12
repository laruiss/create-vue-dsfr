import type { IconifyJSON } from "@iconify/vue"

const collections: IconifyJSON[] = [
  {
    prefix: "ri",
    icons: {
      "flag-line": {
        body: '<path fill="currentColor" d="M12.382 3a1 1 0 0 1 .894.553L14 5h6a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-6.382a1 1 0 0 1-.894-.553L12 16H5v6H3V3zm-.618 2H5v9h8.236l1 2H19V7h-6.236z"/>',
      },
      "home-2-line": {
        body: '<path fill="currentColor" d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1M6 19h12V9.157l-6-5.454l-6 5.454z"/>',
      },
    },
    width: 24,
    height: 24,
  },
]

export const ri = {
  flagLine: "ri:flag-line",
  home2Line: "ri:home-2-line",
} as const

export default collections
