// import { useState } from 'react';
import { View, Text, Image } from 'react-native';

import { AuthorizedUserEntry } from '../types/EntriesTypes';

export default function AuthorizedUserEntryItem({ id, authorizedUserId, capturedImage, createdAt }: AuthorizedUserEntry) {
    // const separatedDateTime: string[] = createdAt.split('T');
    // const separatedDate: string[] = separatedDateTime[0].split('-');
    // const time: string = separatedDateTime[1];

    // const day: number = parseInt(separatedDate[2]) + 1;
    // const month: string = separatedDate[1];
    // const year: string = separatedDate[0];

    // const correctDateTime: string = `${year}-${month}-${day}T${time}`;

    const localeDateTime: string = new Date(createdAt).toLocaleString();
    return (
        <View
            style={{
                margin: 5,
                padding: 10,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#888',
                backgroundColor: '#F8F4FB',
                alignItems: 'center',
            }}>
            <View>
                <Image
                    style={{
                        width: 290,
                        height: 160,
                        resizeMode: 'contain',
                    }}
                    source={{
                        uri: `data:image/jpeg;base64,${capturedImage}`,
                    }}
                />
            </View>
            <View
                style={{
                    paddingLeft: 10,
                    paddingTop: 15,
                    paddingBottom: 12,
                    width: 305,
                }}>
                <Text style={{ color: '#000', fontSize: 17, fontWeight: 'bold' }}>{localeDateTime}</Text>
            </View>
        </View>
    );
}
