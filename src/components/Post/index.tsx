import { useEffect, useState } from 'react'
import { View, Image, Text } from 'react-native'
import { styles } from './styles'
import { Feather } from '@expo/vector-icons'
import { colors } from '@/themes/colors'

export interface PostProps {
  id: string
  title: string
  image: string
}

type Props = {
  post: PostProps
}

export function Post({ post }: Props) {
  const [aspectRatio, setAspectRatio] = useState(1)

  useEffect(() => {
    if (post.image) {
      Image.getSize(post.image, (width, height) => {
        setAspectRatio(width / height)
      })
    }
  }, [post.image])

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: post.image }}
        style={[styles.image, { aspectRatio }]}
        alt=""
      />
      <View style={styles.footer}>
        <Text style={styles.title}>{post.title}</Text>
        <Feather name="more-horizontal" size={16} color={colors.white} />
      </View>
    </View>
  )
}
