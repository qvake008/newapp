// Nav tabs layout — created navigation tabs
import { tabs } from '@/constants/data'
import { Tabs } from 'expo-router'

const TabLayout = () => {
  return (
    <Tabs screenOptions={{headerShown: false}}>
        {tabs.map((tab) => (
            <Tabs.Screen
                key={tab.name}
                name={tab.name}
                options={{
                    tabBarLabel: tab.title,
                    tabBarIcon: () => tab.icon
                }}
            />
        ))}
    </Tabs>
  )
}

export default TabLayout