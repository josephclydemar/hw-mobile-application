import { Context, useContext, useState, useEffect, ReactNode } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import { WebView } from 'react-native-webview';

import { LIVE_STREAM_HOSTNAME } from '../common/Constants';

import CurrentDayDetectionsContext from '../contexts/CurrentDayDetectionsContext';
import NumberOfFacesDetectedContext from '../contexts/NumberOfFacesDetectedContext';

import Section from '../components/Section';
import SectionMini from '../components/SectionMini';
import DetectionItem from '../components/DetectionItem';

import { Detection, CurrentDayDetectionsContextType } from '../types/DetectionsTypes';
import { NumberOfFacesDetectedContextType } from '../types/NumberOfFacesDetectedTypes';

export default function HomeScreen() {
    const { numberOfFacesDetected } = useContext<NumberOfFacesDetectedContextType>(NumberOfFacesDetectedContext as Context<NumberOfFacesDetectedContextType>);
    const { currentDayDetections } = useContext<CurrentDayDetectionsContextType>(CurrentDayDetectionsContext as Context<CurrentDayDetectionsContextType>);
    const [DetectionsToRender, setDetectionsToRender] = useState<Detection[]>([]);
    const [search, setSearch] = useState<string>('');
    const [isWebViewNoError, setIsWebViewNoError] = useState<boolean>(true);

    const [webViewComponent, setWebViewComponent] = useState(
        <WebView
            source={{
                uri: LIVE_STREAM_HOSTNAME,
            }}
            onError={function (err) {
                // console.warn(err);
                setIsWebViewNoError(() => false);
            }}
            style={{
                height: 210,
                width: 327,
            }}
        />,
    );
    const [refreshWebView, setRefreshWebView] = useState<boolean>(true);

    useEffect(
        function (): void {
            if (refreshWebView === true) {
                setWebViewComponent(() => (
                    <WebView
                        source={{
                            uri: LIVE_STREAM_HOSTNAME,
                        }}
                        onError={function (err) {
                            // console.warn(err);
                            setIsWebViewNoError(() => false);
                        }}
                        style={{
                            height: 210,
                            width: 327,
                        }}
                    />
                ));
                setIsWebViewNoError(() => true);
            }
        },
        [refreshWebView],
    );

    useEffect(
        function (): void {
            setDetectionsToRender(() =>
                currentDayDetections.filter(function (item: Detection): boolean {
                    return new Date(item.createdAt).toLocaleTimeString().toLowerCase().includes(search.toLowerCase());
                }),
            );
        },
        [currentDayDetections, search],
    );

    return (
        <>
            <Section title="Detections">
                <View
                    style={{
                        paddingTop: 10,
                        paddingBottom: 10,
                    }}>
                    <TextInput
                        style={{
                            borderColor: '#000',
                            borderWidth: 1,
                            borderRadius: 10,
                            fontSize: 15,
                            paddingLeft: 15,
                        }}
                        placeholder="Search Detections by Time"
                        onChangeText={function (data: string): void {
                            setSearch(() => data);
                            // console.log(authorizedUsers);
                        }}
                    />
                </View>
                <View
                    style={{
                        height: 30,
                    }}>
                    <Text style={{ color: '#777', fontWeight: 'bold', fontSize: 14 }}>No. of Detections Today: {currentDayDetections.length}</Text>
                </View>
                <FlatList
                    style={{
                        height: 200,
                        // borderWidth: 1,
                        // borderColor: '#000',
                    }}
                    keyExtractor={function (item) {
                        return item.id;
                    }}
                    data={DetectionsToRender}
                    renderItem={function ({ item }) {
                        return (
                            <DetectionItem
                                id={item.id}
                                videoId={item.videoId}
                                videoFormat={item.videoFormat}
                                videoDurationSeconds={item.videoDurationSeconds}
                                createdAt={item.createdAt}
                            />
                        );
                    }}
                />
            </Section>
            <View
                style={{
                    alignItems: 'center',
                    paddingTop: 25,
                }}>
                {(function (arg: number): ReactNode {
                    switch (arg) {
                        case 0:
                            return <Text style={{ fontSize: 17, fontWeight: 'bold' }}>NO FACES DETECTED</Text>;
                        case 1:
                            return <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#0F0' }}>SCANNING FACE</Text>;
                        default:
                            return <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#F00' }}>MULTIPLE FACES DETECTED</Text>;
                    }
                })(numberOfFacesDetected)}
            </View>
            <Section title="Live Video">
                <View
                    style={{
                        alignItems: 'center',
                    }}>
                    <View
                        style={{
                            paddingBottom: 5,
                            width: 180,
                        }}>
                        <Button
                            title="Refresh Live Video"
                            color="#04062A"
                            onPress={function (): void {
                                setRefreshWebView(prev => !prev);
                                console.log(refreshWebView);
                            }}
                        />
                    </View>
                </View>
                <View
                    style={{
                        backgroundColor: '#000',
                        height: 200,
                        paddingLeft: 5,
                        paddingRight: 5,
                        paddingBottom: 5,
                        // borderRadius: 10
                    }}>
                    {refreshWebView && isWebViewNoError ? (
                        webViewComponent
                    ) : (
                        <Text
                            style={{
                                color: '#FFF',
                            }}>
                            No Live Feed
                        </Text>
                    )}
                </View>
            </Section>
        </>
    );
}
