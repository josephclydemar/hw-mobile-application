import { View, Text, StyleSheet } from 'react-native';

type HeaderProps = {
    title: string;
};

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#444',
    },
    headerContainer: {
        margin: 0,
        padding: 0,
        backgroundColor: '#fff',
    },
});

export default function Header({ title }: HeaderProps) {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
}
