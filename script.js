
const cars = [
    {
        name: "Porsche 911 Carrera",
        brand: "Porsche",
        type: "Sports Car",
        price: 125000,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85"
    },
    {
        name: "Mercedes AMG GT",
        brand: "Mercedes",
        type: "Luxury Sports",
        price: 145000,
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=85"
    },
    {
        name: "BMW M4 Competition",
        brand: "BMW",
        type: "Performance",
        price: 85000,
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=85"
    },
    {
        name: "Ferrari F8 Tributo",
        brand: "Ferrari",
        type: "Supercar",
        price: 280000,
        image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=900&q=85"
    },
    {
        name: "Lamborghini Huracan",
        brand: "Lamborghini",
        type: "Supercar",
        price: 260000,
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=85"
    },
    {
        name: "BMW M8 Competition",
        brand: "BMW",
        type: "Luxury Coupe",
        price: 135000,
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=85"
    },
    {
        name: "Mercedes S-Class",
        brand: "Mercedes",
        type: "Luxury Sedan",
        price: 120000,
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=85"
    },
    {
        name: "Porsche Taycan",
        brand: "Porsche",
        type: "Electric Luxury",
        price: 110000,
        image: "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?auto=format&fit=crop&w=900&q=85"
    },
    {
        name: "Ferrari 488 GTB",
        brand: "Ferrari",
        type: "Supercar",
        price: 230000,
        image: "https://images.unsplash.com/photo-1597687210367-a4911b1a2f9e?auto=format&fit=crop&w=900&q=85"
    }
];

const featuredGrid = document.getElementById("carsGrid");
const allCarsGrid = document.getElementById("allCarsGrid");

function createCarCard(car) {
    return `
        <article class="car-card">
            <img src="${car.image}" alt="${car.name}" loading="lazy">
            <div class="car-info">
                <p>${car.type}</p>
                <h3>${car.name}</h3>
                <div class="car-price">
                    $${car.price.toLocaleString("en-US")}
                </div>
                <button class="details-btn"
                    onclick="showCarDetails('${car.name}')">
                    VIEW DETAILS ↗️
                </button>
            </div>
        </article>
    `;
}

function displayFeaturedCars() {
    featuredGrid.innerHTML = cars.slice(0, 3)
        .map(createCarCard).join("");
}

function displayAllCars(list = cars) {
    allCarsGrid.innerHTML = list.map(createCarCard).join("");

    document.getElementById("noResults").hidden = list.length !== 0;
}

function filterCars() {
    const search = document.getElementById("searchInput")
        .value.toLowerCase();

    const brand = document.getElementById("brandFilter").value;
    const sort = document.getElementById("sortFilter").value;

    let filtered = cars.filter(car => {
        const matchesSearch =
            car.name.toLowerCase().includes(search) ||
            car.brand.toLowerCase().includes(search);

        const matchesBrand =
            brand === "all" || car.brand === brand;

        return matchesSearch && matchesBrand;
    });

    if (sort === "low") {
        filtered.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
        filtered.sort((a, b) => b.price - a.price);
    }

    displayAllCars(filtered);
}

function showCarDetails(name) {
    const car = cars.find(item => item.name === name);

    alert(
        car.name + "\n" +
        "Brand: " + car.brand + "\n" +
        "Type: " + car.type + "\n" +
        "Price: $" + car.price.toLocaleString("en-US")
    );
}

document.getElementById("searchInput")
    .addEventListener("input", filterCars);

document.getElementById("brandFilter")
    .addEventListener("change", filterCars);

document.getElementById("sortFilter")
    .addEventListener("change", filterCars);

displayFeaturedCars();
displayAllCars();