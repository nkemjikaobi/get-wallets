import axios from 'axios';
// /**
//  * Compose a number of styles together easily
//  * @ty {String} styles Classes/styles to be applied
//  * @returns {String} Combined classes
//  */
export const composeClasses = (...styles: string[]): string => {
  let classes = "";

  styles.forEach((arg) => {
    if (arg) classes += `${arg} `;
  });

  return classes.trim();
};

//Set the global headers to use the secret key
export const setAuthSecret = (secret: any) => {
	if (secret) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${secret}`;
	} else {
		delete axios.defaults.headers.common['Authorization'];
	}
};
