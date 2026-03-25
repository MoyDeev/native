import { initFederation } from '@angular-architects/native-federation';

initFederation({
    'plugin-one': 'http://localhost:4201/remoteEntry.json',
    'plugin-two': 'http://localhost:4202/remoteEntry.json',
    'project-native': 'http://localhost:4203/remoteEntry.json',
    'project-native-two': 'http://localhost:4204/remoteEntry.json'
  })
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
