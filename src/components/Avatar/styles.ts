import { theme } from '@/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },
  selected: {
    borderWidth: 3,
    borderColor: theme.colors.white,
  },
})
