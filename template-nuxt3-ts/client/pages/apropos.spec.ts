import { render } from '@testing-library/vue'

import Apropos from './apropos.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

describe('apropos', () => {
  it('should render a simple accordion', () => {
    const title = 'À propos'

    const { getByText } = render(Apropos, {
      global: {
        components: {
          VIcon,
        },
      },
    })

    const titleEl = getByText(title)

    expect(titleEl).toHaveProperty('tagName', 'H1')
    expect(titleEl).toHaveClass('fr-mt-4w')
  })
})
