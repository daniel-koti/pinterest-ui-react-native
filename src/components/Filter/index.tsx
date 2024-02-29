import { Pressable, PressableProps, Text } from 'react-native'
import { FilterProps } from './filter'
import { styles } from './styles'

export function Filter({
  selected,
  filter,
  ...props
}: PressableProps & FilterProps) {
  return (
    <Pressable
      style={[styles.pressable, selected && styles.pressableSelected]}
      {...props}
    >
      <Text style={styles.text}>{filter}</Text>
    </Pressable>
  )
}
