import type { BuildingInfo } from 'types/Project'

export default function roofHeight(info: BuildingInfo, POS_X: number) {
  const baseHeight = info.height
  const baseWidth = info.width

  if (info.roofShape === 'Gable' && POS_X > baseWidth / 2) {
    return baseHeight + info.roofPitch * (POS_X - baseWidth)
  }

  return baseHeight + POS_X * info.roofPitch
}
