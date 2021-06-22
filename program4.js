/** Program to get the current date 
 * Expected output : dd/mm/yyyy
*/

const formatDate = (date = new Date()) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day}/${month}/${year}` ;
}
console.log(formatDate());