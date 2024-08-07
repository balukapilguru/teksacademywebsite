// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: true,
//   //prod server details
//   // apiurl: 'https://www.beta.teksacademy.com/function.php',
//   // baseUrl: 'https://beta.teksacademy.com',// production server API
//   apiURL: 'https://apiadmin.infozit.com',
//   // // imageHost: 'https://kapilguru.com/images/',
//   // // videoHost: 'https://kapilguru.com/videos/',
//   // webUrl: 'https://beta.teksacademy.com'
// };

export const environment = {
  production: false,
  // apiUrl: 'https://apierp.infozit.com',   //localhost
  apiUrl: 'https://apiadmin.infozit.com'  //live
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
