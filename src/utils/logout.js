const logout = () => {
   window.sessionStorage.removeItem("user-auth-token");
   window.location.href = "/auth/signin";
};

module.exports = logout