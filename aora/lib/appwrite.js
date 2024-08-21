import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';
import SignIn from '../app/(auth)/sign-in';

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
const avatars =  new Avatars(client);
const databases = new Databases(client)

export const createUser = async (email, password, username) => {
try {
    const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
    )

    if(!newAccount) throw Error;
    const avatarUrl = avatars.getInitials(username )
    
    SignIn(email, password)

    const newUser = await databases.createDocument(
     config.databaseId,
     config.userCollectionId,
     ID.unique(),
     {
        accountId: newAccount.$id,
        email,
        username,
        avatar:avatarUrl
     }
    )

    return newUser;
} catch (error) {
    console.log(error);
    throw new Error(error);
    
}
}

export async function getUserPosts(userId) {
    try {
      const posts = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.videoCollectionId,
        [Query.equal("creator", userId)]
      );
  
      return posts.documents;
    } catch (error) {
      throw new Error(error);
    }
  }
  
export async function getAllPosts() {
    try {
      const posts = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.videoCollectionId
      );
  
      return posts.documents;
    } catch (error) {
      throw new Error(error);
    }
  }

  export async function getLatestPosts() {
    try {
      const posts = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.videoCollectionId,
        [Query.orderDesc("$createdAt"), Query.limit(7)]
      );
  
      return posts.documents;
    } catch (error) {
      throw new Error(error);
    }
  }

export const signIn = async(email, password) => {
    try {
       const session = await account.createEmailPasswordSession(email, password)

       return session;
    } catch (error) {
        throw new Error(error);
    }
}
export async function signOut() {
    try {
      const session = await account.deleteSession("current");
  
      return session;
    } catch (error) {
      throw new Error(error);
    }
  }

  export const getCurrentUser = async () =>{
    try {
        const currentAccount = await account.get();

        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId
            [Query.equal('accountId', currentAccount.$id)]
        )
         

        if (!currentUser) throw Error;

        return currentUser.documents[0];

    } catch (error) {
        console.log(error);
        
    }
  }