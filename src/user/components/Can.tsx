import { createContextualCan } from '@casl/react'

import AbilityContext from 'user/context/AbilityContext'

export const Can = createContextualCan(AbilityContext.Consumer)

export default Can
