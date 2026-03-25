const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'project-native-federation',

  remotes: {
    'project-native':  'http://localhost:4203/remoteEntry.json',  
    'project-native-two': 'http://localhost:4204/remoteEntry.json',
  },

  shared: {
    ...shareAll({ 
      singleton: true, 
      strictVersion: false, 
      requiredVersion: 'auto' 
    }),
    
    'library-ui': { 
      singleton: true, 
      strictVersion: false, // Apagamos la paranoia de versiones
      requiredVersion: false, // Le decimos que acepte la del Shell sin chistar
      eager: false // Solo en el Shell cambia esto a true
    }
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

  features: {
    // New feature for more performance and avoiding
    // issues with node libs. Comment this out to
    // get the traditional behavior:
    ignoreUnusedDeps: true
  }
});
