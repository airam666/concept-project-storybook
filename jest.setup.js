// Taken from https://reactnavigation.org/docs/testing/

// Include mocks for react-native-gesture-handler:
import 'react-native-gesture-handler/jestSetup';

// Include mocks for react-native-reanimated:
// eslint-disable-next-line no-undef
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect,
  // so we override it with a no-op:
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because
// the native animated module is missing:
// eslint-disable-next-line no-undef
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
