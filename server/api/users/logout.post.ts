// logout

export default defineEventHandler(async (event) => {
    deleteCookie(event, "userId");
    return { message: 'Logout successful' };
});