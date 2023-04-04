let dbUsers = [
    {
        username: "anita",
        password: "192329",
        name: "Anita",
        email:"anita@utem.edu.my"
    },
    {
        username: "jeev",
        password: "230500",
        name: "Jeev",
        email:"jeev@utem.edu.my"
    },
    {
        username: "mark",
        password: "190600",
        name: "Mark",
        email:"mark@utem.edu.my"
    }
]

function login(username, password) {
    //let matchUser= dbUsers.find(user => user.username == username)
    let matchUser= dbUsers.find(x => x.username == username)
    if(!matchUser) return "User not found!"
    if(matchUser.password==password){
        return matchUser
    } else {
        return "Invalid password"
    }
    
    //for(let i=0; i< dbUsers.length; i++) {
        //console.log(dbUsers[i])
        //if(dbUsers[i].username)}

}

function register(username, password, name, email) {
    dbUsers.push({
        username: username,
        password: password,
        name: name,
        email: email
    })
}
//try to login
//login("anita","192329") 
console.log(login("jeev","230500"))
console.log(login("mark","190500"))

register("utem", "123456", "fkekk", "fkekk@edu.com.my")

console.log(login("utem","123456"))
