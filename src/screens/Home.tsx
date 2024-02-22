import { Text, View } from 'react-native'
import { BadgeCheck } from 'lucide-react-native'

export function Home() {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <BadgeCheck color='#000'/>
      <Text className="text-state-900 text-2xl">Hello world</Text>
    </View>
  )
}