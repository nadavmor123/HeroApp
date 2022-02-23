export const formatDateString = (dateString:string) => {
    let d = new Date(dateString);
    return d.toDateString();
}