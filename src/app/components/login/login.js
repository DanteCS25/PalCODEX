// // User and admin credentials
// const users = [
//     { username: "Christian", password: "100" },
//     { username: "Dante", password: "200" },
//     { username: "Armand", password: "300" },
//     { username: "Wuusap", password: "400" }
// ];
// const admin = { username: "admin", password: "admin2024now", validationCode: "01523" };

// function authenticate() {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     var validationCode = document.getElementById("validationCode").value;

//     // Check if it's admin
//     if (username === admin.username && password === admin.password) {
//         // Redirect to admin page if validation code is correct
//         if (validationCode === "adminCode") {
//             window.location.href = "/inventory";
//         } else {
//             window.location.href = "/error";
//         }
//         return;
//     }

//     // Check if it's a user
//     const user = users.find(user => user.username === username && user.password === password);
//     if (user) {
//         // Redirect to user page
//         window.location.href = "/home";
//     } else {
//         // Redirect to error page
//         window.location.href = "/error";
//     }
// }