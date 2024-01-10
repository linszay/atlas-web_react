// new func returns the current year
export const getFullYear = () => {
    return new Date().getFullYear();
    }

// this func accepts isIndex (bool)
// if true, return Atlas School
// if false, return Atlas School main dashboard
export const getFooterCopy = (isIndex) => {
    if (isIndex) {
        return 'Holberton School';
    } else {
        return 'Holberton School main dashboard';
    }
}
