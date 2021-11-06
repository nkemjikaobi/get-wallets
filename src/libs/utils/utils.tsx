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
