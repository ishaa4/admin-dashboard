export const userDatabase = [];

export const loginUser = (userObj) => {
    const currentUser = userDatabase.map(item => {
        if(item.email === userObj.email && item.password === userObj.password){
            return item;
        }
    });
    return currentUser[0];
};