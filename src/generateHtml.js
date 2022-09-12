//making the manager card
const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
    <div calss="card h-108">
        <div class="card-header">
            <h3>${manager.name}</h3>
            <h4>Manager</h4><i class="material-icon">paste content</i>
        </div>

        <div class="card-body">
            <p class="id">ID:${manager.id}</p>
            <p class="email">Email: <a href=${manager.email}>${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officceNumber}</p>
        </div>

    </div>
</div>
`;
}

//making the engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
    <div calss="card h-108">
        <div class="card-header">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4><i class="material-icon">glasses</i>
        </div>

        <div class="card-body">
            <p class="id">ID:${engineer.id}</p>
            <p class="email">Email: <a href=${engineer.email}>${engineer.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
</div>
`;
}

// making the intern card
const generateIntern = function(intern) {
    return `
    <div class="col-4 mt-4">
    <div calss="card h-108">
        <div class="card-header">
            <h3>${intern.name}</h3>
            <h4>Intern</h4><i class="material-icon">student</i>
        </div>

        <div class="card-body">
            <p class="id">ID:${intern.id}</p>
            <p class="email">Email: <a href=${intern.email}>${intern.email}</a></p>
            <p class="school">School: ${intern.school} </p>
        </div>
    </div>
</div>    
`;
}

//pushing the array to page
generateHtml = (data) => {
    // arrary for cards
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        // calling manager function
          if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        // calling engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        // calling intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
    }

    // joining strings
    const employeeCards = pageArray.join('');

    //return to the generate page
    const generateTeam = generateTeamPage(employeeCards);

    return generateTeam;

}

//making the html
const generateHtml = function (employeeCards) {
    return `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, inital-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@600&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="member cards">
                    <!--cards list here-->
                    <!-- <h1>Hi world</h1> -->
                </div>
            </div>
        </main>
    
    </body>
    <script src="https://kit.fontawesome.com/b8496dd8dd.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
</html>
`;
}

// to be exported to index.js
modeule.exports = generateHtml