import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Community = () => {
  return (
    <SafeAreaView>
      <Text>Community</Text>
      <Button
        title="Book an Appointment"
        onPress={() => alert('Booking feature coming soon!')}
      />
    </SafeAreaView>
  );
}

export default Community;
