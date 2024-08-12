import { Client, Account} from 'react-native-appwrite';

export const config = {
    endpoint:'https://cloud.appwrite.io/v1',
    platform:'com.webapp.aora',
    projectId:'66b9ad820005dda313c9',
    databaseId:'66b9af2f0020f4c67b83',
    userCollectionId:'66b9af7d002024ea074f',
    videoCollectionId:'66b9afc70005936564f0',
    storageId:'66b9b1fe002877189850 '
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform) 
;

const account = new Account(client);

export const createUser = () => {
account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
}
