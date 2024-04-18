import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default function AddNewAuthorizedUserScreen() {
    const [newAuthorizedUserName, setNewAuthorizedUserName] = useState<string>('');
    return (
        <View>
            <Text>Add New Authorized User</Text>
            <View>
                <TextInput
                    placeholder="New Authorized User Name..."
                    onChangeText={function (textData: string): void {
                        setNewAuthorizedUserName(() => textData);
                    }}
                    style={{
                        padding: 10,
                        borderWidth: 1,
                        borderColor: '#000',
                    }}
                />
            </View>
        </View>
    );
}
