export const getKeyword = () => {
    const keyword = localStorage.getItem('keyword');
    return keyword ? keyword : "";
}