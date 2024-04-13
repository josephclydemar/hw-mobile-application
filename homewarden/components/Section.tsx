import { PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type SectionProps = PropsWithChildren<{
    title: string;
}>;

const styles = StyleSheet.create({
    sectionContainer: {
        paddingTop: 32,
        // backgroundColor: '#fff',
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        color: '#444',
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

export default function Section({ children, title }: SectionProps): React.JSX.Element {
    return (
        <View style={styles.sectionContainer}>
            <Text style={[styles.sectionTitle]}>{title}</Text>
            <View>{children}</View>
        </View>
    );
}
