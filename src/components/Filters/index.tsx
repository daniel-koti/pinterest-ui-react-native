import { FlatList } from 'react-native'
import { Filter } from '@/components/Filter'
import { styles } from './styles'

interface FiltersProps {
  filter: string
  filters: string[]
  onChange: (value: string) => void
}

export function Filters({ filters, filter, onChange }: FiltersProps) {
  return (
    <FlatList
      data={filters}
      keyExtractor={(item) => item}
      renderItem={(item) => (
        <Filter
          filter={item.item}
          selected={item.item === filter}
          onPress={() => onChange(item.item)}
        />
      )}
      horizontal
      style={styles.list}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    />
  )
}
