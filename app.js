var carList = {
    Honda: {
        Civic: {
            Name: "Honda Civic",
            Price: "1cr",
            Model: 2021,
            Transmission: "Automatic",
            Gates: 4,
            Colors: ["White", "Black", "Red"],
            image: "images/civic.jpg"
        },
        BRV: {
            Name: "Honda BR-V",
            Price: "75Lacs",
            Model: 2022,
            Transmission: "Automatic",
            Gates: 4,
            Colors: ["White", "Black", "Red"],
            image: "images/brv.png"
        },
        City: {
            Name: "Honda City",
            Price: "90Lacs",
            Model: 2018,
            Transmission: "Automatic",
            Gates: 4,
            Colors: ["White", "Black", "Red"],
            image: "images/city.jpg"
        },
        Fit: {
            Name: "Honda Fit",
            Price: "50Lacs",
            Model: 2018,
            Transmission: "Automatic",
            Gates: 4,
            Colors: ["White", "Black", "Red"],
            image: "images/fit.jpg"
        }
    },
    Toyota: {
        Corolla: {
            Name: "Toyota Corolla",
            Price: "80Lacs",
            Model: 2020,
            Transmission: "Automatic",
            Gates: 4,
            Colors: ["White", "Black", "Red"],
            image: "images/corolla.jpg"
        },
        Fortuner: {
            Name: "Toyota Fortuner",
            Price: "2Cr",
            Model: 2022,
            Transmission: "Automatic",
            Gates: 4,
            Colors: ["White", "Black", "Red"],
            image: "images/fortuner.jpg"
        },
        Revo: {
            Name: "Toyota Revo",
            Price: "95Lacs",
            Model: 2012,
            Transmission: "Automatic",
            Gates: 4,
            Colors: ["White", "Black", "Red"],
            image: "images/revo.png"
        },
        Yaris: {
            Name: "Toyota Yaris",
            Price: "38Lacs",
            Model: 2022,
            Transmission: "Automatic",
            Gates: 4,
            Colors: ["White", "Black", "Red"],
            image: "images/yaris.jpg"
        }
    },
    Suzuki: {
        Alto: {
            Name: "Suzuki Alto",
            Price: "45Lacs",
            Model: 2020,
            Transmission: "Automatic",
            Gates: 4,
            Colors: ["White", "Black", "Red"],
            image: "images/alto.png"
        },
        Swift: {
            Name: "Suzuki Swift",
            Price: "20Lacs",
            Model: 2018,
            Transmission: "Automatic",
            Gates: 4,
            Colors: ["White", "Black", "Red"],
            image: "images/swift.jpg"
        },
        Mehran: {
            Name: "Suzuki Mehran",
            Price: "10Lacs",
            Model: 2016,
            Transmission: "Manual",
            Gates: 4,
            Colors: ["White", "Black", "Red"],
            image: "images/mehran.jpeg"
        },
        Cultus: {
            Name: "Suzuki Cultus",
            Price: "30Lacs",
            Model: 2018,
            Transmission: "Automatic",
            Gates: 4,
            Colors: ["White", "Black", "Red"],
            image: "images/cultus.jpeg"
        }
    },
    Kia: {
        Sportage: {
            Name: "Kia Sportage",
            Price: "45Lacs",
            Model: 2020,
            Transmission: "Automatic",
            Gates: 4,
            Colors: ["White", "Black", "Red"],
            image: "images/sportage.jpeg"
        },
        Stonic: {
            Name: "Kia Stonic",
            Price: "30Lacs",
            Model: 2018,
            Transmission: "Automatic",
            Gates: 4,
            Colors: ["White", "Black", "Red"],
            image: "images/stonic.jpg"
        },
        Picanto: {
            Name: "Kia Picanto",
            Price: "20Lacs",
            Model: 2018,
            Transmission: "Automatic",
            Gates: 4,
            Colors: ["White", "Black", "Red"],
            image: "images/picanto.png"
        },
        Sonet: {
            Name: "Kia Sonet",
            Price: "58Lacs",
            Model: 2021,
            Transmission: "Automatic",
            Gates: 4,
            Colors: ["White", "Black", "Red"],
            image: "images/sonet.jpg"
        }
    },
    Audi: {
        A4: {
            Name: "Audi A4",
            Price: "1cr",
            Model: 2018,
            Transmission: "Automatic",
            Gates: 4,
            Colors: ["White", "Black", "Red"],
            image: "images/a4.jpg"
        },
        R8: {
            Name: "Audi R8",
            Price: "3Cr",
            Model: 2022,
            Transmission: "Automatic",
            Gates: 2,
            Colors: ["White", "Black", "Red"],
            image: "images/r8.jpg"
        },
        A3: {
            Name: "Audi A3",
            Price: "90Lacs",
            Model: 2016,
            Transmission: "Automatic",
            Gates: 4,
            Colors: ["White", "Black", "Red"],
            image: "images/a3.jpg"
        },
        Q5: {
            Name: "Audi Q5",
            Price: "1.5Cr",
            Model: 2018,
            Transmission: "Automatic",
            Gates: 4,
            Colors: ["White", "Black", "Red"],
            image: "images/q5.jpg"
        }
    },
    Hyundai: {
        Tucson: {
            Name: "Hyundai Tucson",
            Price: "60Lacs",
            Model: 2010,
            Transmission: "Automatic",
            Gates: 4,
            Colors: ["White", "Black", "Red"],
            image: "images/tucson.png"
        },
        I10: {
            Name: "Hyundai I10",
            Price: "35Lacs",
            Model: 2015,
            Transmission: "Automatic",
            Gates: 4,
            Colors: ["White", "Black", "Red"],
            image: "images/i10.jpeg"
        },
        Elantra: {
            Name: "Hyundai Elantra",
            Price: "70Lacs",
            Model: 2021,
            Transmission: "Automatic",
            Gates: 4,
            Colors: ["White", "Black", "Red"],
            image: "images/elantra.jpg"
        },
        Venue: {
            Name: "Hyundai Venue",
            Price: "75Lacs",
            Model: 2018,
            Transmission: "Automatic",
            Gates: 4,
            Colors: ["White", "Black", "Red"],
            image: "images/venue.jpeg"
        }
    },
}

var company = document.getElementById("company");
var car = document.getElementById("car");
var main = document.getElementById("main");

for (var key in carList) {
    company.innerHTML += `<option value="${key}">${key}</option>`
    for (var key1 in carList[key]) {
        var obj = carList[key][key1];
        var colorDiv = ``;
        for(var i = 0; i < obj.Colors.length; i++){
            colorDiv += `<div class="${obj.Colors[i]}"></div>`;
        }

        main.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12 col-12 gy-4">
            <div class="card">
                <div class="img-container"><img src="${carList[key][key1].image}" class="card-img-top" alt="..."></div>
                <div class="card-body">
                    <h5 class="card-title">${carList[key][key1].Name}</h5>
                    <p class="card-text">Price: ${carList[key][key1].Price}<br />Model: ${carList[key][key1].Model}<br />Transmission: ${carList[key][key1].Transmission}<br />Gates: ${carList[key][key1].Gates}<br /><div class="d-flex gap-2">${colorDiv}</div><br /></p>
                    <a href="#" class="btn btn-primary w-100">Buy Now</a>
                </div>
            </div>
        </div>
    `
    }
}

function select() {
    var value = company.value;
    car.innerHTML = `<option value="" disabled selected>Select Car</option>`;

    for (var key in carList) {
        if (key === value) {
            for (var key1 in carList[key]) {
                car.innerHTML += `<option value="${key1}">${key1}</option>`;
            }
        }
    }
}

function search() {
    var value = car.value;
    main.innerHTML = ``;

    for (var key in carList) {
        for (var key1 in carList[key]) {
            if (key1 === value){
                main.innerHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12 col-12 gy-4">
                    <div class="card">
                        <div class="img-container"><img src="${carList[key][key1].image}" class="card-img-top" alt="..."></div>
                        <div class="card-body">
                            <h5 class="card-title">${carList[key][key1].Name}</h5>
                            <p class="card-text">Price: ${carList[key][key1].Price}<br />Model: ${carList[key][key1].Model}<br />Transmission: ${carList[key][key1].Transmission}<br />Gates: ${carList[key][key1].Gates}<br /><div class="d-flex gap-2">${colorDiv}</div><br /></p>
                            <a href="#" class="btn btn-primary w-100">Buy Now</a>
                        </div>
                    </div>
                </div>`
            }
        }
    }
}