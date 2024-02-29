import { Pressable, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { theme } from '@/themes'
import { styles } from './styles'

interface MenuButtonProps {
  title: string
  icon: keyof typeof FontAwesome.glyphMap
}

export function MenuButton({ title, icon }: MenuButtonProps) {
  return (
    <Pressable style={styles.container}>
      <FontAwesome
        name={icon}
        size={32}
        color={theme.colors.white}
        style={styles.icon}
      />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}
