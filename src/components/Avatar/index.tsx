import { Image, ImageProps } from 'react-native'
import { styles } from './styles'

export function Avatar({ selected, ...props }: AvatarProps & ImageProps) {
  return (
    <Image
      style={[styles.image, selected && styles.selected]}
      {...props}
      alt=""
    />
  )
}
