var Datastore = require('react-native-local-mongodb')
export default db = new Datastore({ filename: 'asyncStorageKey', autoload: true });