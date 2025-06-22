function adoptPet() { 

    alert("Thank you for your interest in adopting! Our team will contact you soon."); 

} 

 

const pets = [
  { name: "Buddy", type: "dog", age: 3, img: "img/dogs/dog01.jpg" },
  { name: "Buddy", type: "dog", age: 3, img: "img/dogs/dog02.jpg" },
  { name: "Charlie", type: "dog", age: 4, img: "img/dogs/dog03.jpg" },
  { name: "Whiskers", type: "cat", age: 2, img: "img/cats/cat01.jpg" },
  { name: "Mittens", type: "cat", age: 2, img: "img/cats/cat02.jpg" },
  { name: "Shadow", type: "cat", age: 5, img: "img/cats/cat03.jpg" },
  { name: "Coco", type: "capybara", age: 1, img: "img/capybaras/capybara01.jpg" },
  { name: "Nibbles", type: "capybara", age: 2, img: "img/capybaras/capybara02.jpg" },
  { name: "Bubbles", type: "bird", age: 3, img: "img/birds/bird01.jpg" },
  { name: "Tweety", type: "bird", age: 1, img: "img/birds/bird02.jpg" },
];

 

function loadPets() { 

  console.log('Loading pets...'); 

  const petList = document.getElementById('pet-list'); 

  pets.forEach(pet => { 

    const petItem = document.createElement('div'); 

    petItem.className = 'pet'; 

    petItem.innerHTML = ` 

      <img src="${pet.img}" alt="${pet.name}"> 

      <h3>${pet.name}</h3> 

      <p>Type: ${pet.type}</p> 

      <p>Age: ${pet.age} years</p> 

      <button onclick="adoptPet()">Adopt Now</button> 

  `; 

    petList.appendChild(petItem); 

  }); 

} 

function filterPets() {

  console.log("Selected pet type:", $('input[name="pet-type"]:checked'));
  const types = $('input[name="pet-type"]:checked')
    .map(function () {
      return $(this).val();
    })
    .get();

  console.log(types);

  const filteredPets = pets.filter((pet) => types.includes(pet.type));
  console.log(filteredPets);

  const petList = $("#pet-list");
  petList.empty(); // Clear the existing pets
  filteredPets.forEach((pet) => {
    const petItem = $("<div>").addClass("pet").html(`
      <img src="${pet.img}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p>Type: ${pet.type}</p>
      <p>Age: ${pet.age} years</p>
      <button class="adopt-btn">Adopt Now</button>
    `);
    petList.append(petItem);
  });
}


$(document).ready(function () {
  loadPets();

  // Run filterPets when any checkbox is changed
  $('input[name="pet-type"]').change(filterPets);
});


console.log('Pets loaded successfully.'); 