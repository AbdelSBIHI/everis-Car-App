// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl :  "http://localhost:8080/car-api/api/cars",
  AUTH0_CALLBACK_URL: "http://localhost:4200/callback",
  AUTH0_CLIENT_ID: "aLncGh3VIq29SbCTUY3l5P7FblxTBTnV",
  AUTH0_LOGOUT_URL: "http://localhost:4200/",
  AUTH0_HOST: "dev-v4wkhaae.eu.auth0.com/v2"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
