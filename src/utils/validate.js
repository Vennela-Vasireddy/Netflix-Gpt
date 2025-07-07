const validate = (email, password) => {

    const emailval = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)
    const passwordval = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)

    if(!emailval) return "Invalid email format";
    if(!passwordval) return "Password must be at least 8 characters long and contain at least one letter and one number";

    return null;

}

export default validate;