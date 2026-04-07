import { tabs } from '@/constants/data';
import { colors, components } from '@/constants/theme';
import clsx from 'clsx';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const tabBar = components.tabBar;

const TabLayout = () => {
    const insets = useSafeAreaInsets();
    const TabIcon = ({ focused, icon }: any) => {
        const isElement = React.isValidElement(icon);
        return (
            <View className='tabs-icon'>
                <View className={clsx('tabs-pill', focused && 'tabs-active')}>
                    {isElement ? (
                        React.cloneElement(icon, { color: focused ? '#fff' : '#666', size: 20 })
                    ) : (
                        <Image source={icon} resizeMode="contain" className='tabs-glyph' />
                    )}
                </View>
            </View>
        );
    };

  return (
    <Tabs screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
            position: 'absolute',
            bottom:Math.max(insets.bottom, tabBar.horizontalInset),
            height: tabBar.height,
            marginHorizontal: tabBar.horizontalInset,
            borderRadius: tabBar.radius,
            backgroundColor: colors.primary,
            borderTopWidth: 0,
            elevation: 0,
        },
        tabBarItemStyle: {
            paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6
        },
        tabBarIconStyle: {
            width: tabBar.iconFrame,
            height: tabBar.iconFrame,
            alignItems: 'center',
        }

        }}>
        {tabs.map((tab) => (
            <Tabs.Screen
                key={tab.name}
                name={tab.name}
                options={{
                    tabBarLabel: tab.title,
                    tabBarIcon: ({ focused }: { focused: boolean }) => <TabIcon focused={focused} icon={tab.icon} />
                }}
            />
        ))}
    </Tabs>
  )
}

export default TabLayout