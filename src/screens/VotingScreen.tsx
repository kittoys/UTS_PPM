// src/screens/VotingScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const VotingScreen: React.FC = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);

  const candidates = ['Candidate A', 'Candidate B', 'Candidate C'];

  const handleVote = () => {
    if (selectedCandidate) {
      Alert.alert('Vote Submitted', `You voted for: ${selectedCandidate}`);
    } else {
      Alert.alert('No Candidate Selected', 'Please select a candidate to vote for');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vote for Your Favorite Candidate</Text>
      {candidates.map((candidate, index) => (
        <View key={index} style={styles.candidateContainer}>
          <Button
            title={candidate}
            onPress={() => setSelectedCandidate(candidate)}
            color={selectedCandidate === candidate ? 'green' : 'blue'}
          />
        </View>
      ))}
      <Button title="Submit Vote" onPress={handleVote} color="green" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  candidateContainer: {
    marginVertical: 10,
  },
});

export default VotingScreen;
