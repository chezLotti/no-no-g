export const fieldSize = 30

// board options
export const options = [
  {
    name: 'dimX',
    label: 'Breite',
    min: 4,
    max: 10,
    step: 1,
    default: 5,
  },
  {
    name: 'dimY',
    label: 'Höhe',
    min: 4,
    max: 10,
    step: 1,
    default: 5,
  },
  {
    name: 'density',
    label: 'Dichte',
    min: 10,
    max: 100,
    step: 10,
    default: 50,
  }
] as const

export const defaultValues: Record<string, number> = 
  options.reduce(
    (defVal, currentValue) => 
    ({...defVal, [currentValue.name]: currentValue.default}), 
    {}
  )