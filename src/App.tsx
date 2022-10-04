/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {type PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {StackParamList, StackScreenProps} from './navigation/types';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle]}>{title}</Text>
      <Text style={[styles.sectionDescription]}>{children}</Text>
    </View>
  );
};

const SafetyArea = ({children}: {children: React.ReactNode}) => {
  return (
    <SafeAreaView>
      <StatusBar />
      {children}
    </SafeAreaView>
  );
};

const HomeScreen = ({navigation}: StackScreenProps<'Home'>) => {
  return (
    <SafetyArea>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Home</Text>
          <Button
            title="go to test screen"
            onPress={() => navigation.push('Test')}
          />
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
        </View>
      </ScrollView>
    </SafetyArea>
  );
};

const TestScreen = ({navigation}: StackScreenProps<'Test'>) => {
  return (
    <SafeAreaView>
      <Text>Hello</Text>
      <Button
        title="go to test screen"
        onPress={() => navigation.push('Home')}
      />
    </SafeAreaView>
  );
};

const Stack = createNativeStackNavigator<StackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="Test"
          component={TestScreen}
          options={{title: 'Test'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
