// spiner function
const spinerTarget = () => {
  const inputValue = document.getElementById("brandName").value; //search text
  console.log(inputValue);
  fetchPhones(false, inputValue);
  document.getElementById("spinerContainer").style.display = "none";
};
// load data
const loadAllPhones = () => {
  document.getElementById("spinerContainer").style.display = "block";

  // console.log(brandName);
  setTimeout(() => {
    spinerTarget();
  }, 6000);
};
// defalut phones -6
const fetchPhones = async (status, inputValue) => {
  const responce = await fetch(
    ` https:openapi.programming-hero.com/api/phones?search=${
      inputValue ? inputValue : "iphone"
    } `
  );
  const data = await responce.json();
  // console.log(data);
  if (status) {
    const phonesArr = data.data;
    // console.log(phonesArr);
    displayPhones(phonesArr);
  } else {
    const phonesArr = data.data.slice(0, 6);
    displayPhones(phonesArr);
    // console.log(phonesArr);
  }
};

// display phones
const displayPhones = (phonesArr) => {
  phonesArr.forEach((phones) => {
    const { brand, phone_name, slug, image } = phones;
    // console.log(slug);
    const display = document.getElementById("display");
    const add = document.createElement("div");
    add.innerHTML = `
     <div
          id="phoneCard"
          class="card card-compact bg-base-100 w-96 shadow-xl"
        >
          <figure>
            <img  src="${image}" alt="phone" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">${phone_name}</h2>
            <p>${brand}</p>
            <div class="card-actions justify-end">
              <button id="showDetails" onclick = "phoneDetails('${slug}')" class="btn btn-primar bg-none">Show details</button>
            </div>
          </div>
        </div>
    `;
    display.appendChild(add);
  });
};

// show all btn
const showAll = () => {
  fetchPhones(true);
};

// model action
const phoneDetails = async (slug) => {
  console.log(slug);
  const responce = await fetch(
    `https://openapi.programming-hero.com/api/phone/${slug}`
  );
  const data = await responce.json();
  console.log(data.data);
  const { name, releaseDate, image, brand } = data.data;
  const { storage, displaySize, chipSet, memory } = data.data.mainFeatures;
  console.log(storage);
  const modalContainer = document.getElementById("modalContainer");
  modalContainer.innerHTML = `<dialog id="my_modal_1" class="modal">
          <div class="modal-box grid grid-cols-2 ">
           <div class="">
           <img  src="${image}" alt="">
          </div>
          <div>
            <h3 class="text-xl font-bold">${name}</h3>
            <p class ="border-1 py-1">${brand}</p>
           <p>${releaseDate}</p>
            <p class="">${storage}</p>
            <p class="">${chipSet}</p>
            <p class="">${displaySize}</p>
            <p class="">${memory}</p>
            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">Close</button>
              </form>
            </div>
            </div>
           
          </div>
        </dialog>`;
  my_modal_1.showModal();
};
// const arr = [12, 40, 43, 53, "raj", "rohim", "kiron"];
// const [my_age, n2, ...other] = arr;
// console.log(my_age);
// const loadAllPhones = async () => {
//   console.log(searchText);
//   spiner
// document.getElementById("spinner").style.display = "none";
//   api ..
// const responce = await fetch(
//   `https://openapi.programming-hero.com/api/phones?search=iphone`
// );
// const data = await responce.json();
// console.log(data);

// if (status) {
//   displayAllPhones(data.data);
// } else {
//   displayAllPhones(data.data.slice(0, 6));
// }
// };
// loadAllPhones();
// // handelShowAll
// const handelShowAll = () => {
//   console.log("hello");
//   loadAllPhones(true);
// };
// // display phones
// const displayAllPhones = (phones) => {
//   console.log(phones);
//   const phonesContainer = document.getElementById("phonesContainer");
//   for (const phone of phones) {
//     console.log(phone);
//     const cards = document.createElement("div");
//     cards.innerHTML = `
//  <div class="card card-compact bg-base-100 w-96 shadow-xl">
//         <figure>
//           <img
//             src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//             alt="Shoes" />
//         </figure>
//         <div class="card-body">
//           <h2 class="card-title">Shoes!</h2>
//           <p>If a dog chews shoes whose shoes does he choose?</p>
//           <div class="card-actions justify-end">
//             <button class="btn btn-primary">Buy Now</button>
//           </div>
//         </div>
//       </div>

// `;
//   }
//   phonesContainer.appendChild(cards);
//   //
//   //
//   //     `);
//   //         phonesContainer.appendChild(card);
//   //       });
// };

// const handelSearch = () => {
//   //   console.log("im loded");
//   document.getElementById("spinner").style.display = "block";
//   //   inputbox work
//   const searchText = document.getElementById("searchBox");
//   searchText.classList.value;
//   console.log("searchText");
//   setTimeout(function () {
//     loadAllPhones(false, searchText);
//   }, 3000);
// };
