import { PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type SectionMiniProps = PropsWithChildren<{
    title: string;
}>;

const styles = StyleSheet.create({
    sectionContainer: {
        paddingTop: 25,
        // backgroundColor: '#fff',
        paddingHorizontal: 15,
    },
    sectionTitle: {
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
        color: '#000',
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

export default function SectionMini({ title, children }: SectionMiniProps) {
    return (
        <View style={styles.sectionContainer}>
            <Text style={[styles.sectionTitle]}>{title}</Text>
            <View>{children}</View>
        </View>
    );
}
