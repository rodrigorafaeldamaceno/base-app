import React from 'react';
import { View, StyleSheet, Platform, Text } from 'react-native';

// import { Container } from './styles';

export default function Divider() {
	return (
		<>
			<View style={styles.divider} />
			<Text>teste</Text>
		</>
	)
}

const styles = StyleSheet.create({
	divider: {
		marginVertical: 25
	}
})
