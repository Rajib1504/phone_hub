const loadAllPhones = async (status, searchText) => {
  console.log(searchText);
  //   spiner
  document.getElementById("spinner").style.display = "none";
  //   api ..
  const responce = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${
      searchText ? searchText : "iphone"
    }`
  );
  const data = await responce.json();
  console.log(data);

  if (status) {
    displayAllPhones(data.data);
  } else {
    displayAllPhones(data.data.slice(0, 6));
  }
};
// handelShowAll
const handelShowAll = () => {
  console.log("hello");
  loadAllPhones(true);
};
// display phones
const displayAllPhones = (phones) => {
  console.log(phones);
  const phonesContainer = document.getElementById("phonesContainer");
  for (const phone of phones) {
    console.log(phone);
    const cards = document.createElement("div");
    cards.innerHTML = `
 <div class="card card-compact bg-base-100 w-96 shadow-xl">
  //       <figure>
  //         <img
  //           src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
  //           alt="Shoes" />
  //       </figure>
  //       <div class="card-body">
  //         <h2 class="card-title">Shoes!</h2>
  //         <p>If a dog chews shoes whose shoes does he choose?</p>
  //         <div class="card-actions justify-end">
  //           <button class="btn btn-primary">Buy Now</button>
  //         </div>
  //       </div>
  //     </div>

`;
  }
  phonesContainer.appendChild(cards);
  //
  //
  //     `);
  //         phonesContainer.appendChild(card);
  //       });
};

const handelSearch = () => {
  //   console.log("im loded");
  document.getElementById("spinner").style.display = "block";
  //   inputbox work
  const searchText = document.getElementById("searchBox");
  searchText.classList.value;
  console.log("searchText");
  setTimeout(function () {
    loadAllPhones(false, searchText);
  }, 3000);
};
