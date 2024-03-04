import { Filters } from '@/components/Filters'
import { theme } from '@/themes'
import { View, StyleSheet } from 'react-native'

import { FILTERS } from '@/utils/filters'
import { useState } from 'react'
import { Posts } from '@/components/Posts'
import { POSTS } from '@/utils/posts'

export default function Home() {
  const [filter, setFilter] = useState(FILTERS[0])

  return (
    <View style={styles.container}>
      <Filters filters={FILTERS} filter={filter} onChange={setFilter} />
      <Posts posts={POSTS} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    padding: 16,
    paddingTop: 52,
  },
})
