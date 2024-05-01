export const createDataset = ({
  data,
  label,
  borderColor,
  borderWidth,
  backgroundColor,
  tension,
  fill
}: {
  data: number[]
  borderColor: string
  tension: number
  fill: boolean
  label?: string
  borderWidth?: number
  backgroundColor?: string
}) => {
  if (!Array.isArray(data)) {
    throw new Error('data must be an array')
  }

  if (data.every((value) => typeof value !== 'number')) {
    throw new Error('data must contain only numbers')
  }

  return {
    label,
    data,
    backgroundColor,
    borderColor,
    borderWidth,
    tension,
    fill
  }
}
