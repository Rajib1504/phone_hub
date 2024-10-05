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
  //   console.log(data);

  if (status) {
    displayAllPhones(data.data);
  } else {
    displayAllPhones(data.data.slice(0, 6));
  }
};
// handelShowAll
const handelShowAll = () => {
  //   console.log("hello");
  loadAllPhones(true);
};
// display phones
const displayAllPhones = (phones) => {
  //   console.log(phones);
};

const handelSearch = () => {
  //   console.log("im loded");
  document.getElementById("spinner").style.display = "block";
  //   inputbox work
  const searchText = document.getElementById("searchBox");
  searchText.value;
  console.log("searchText");
  setTimeout(function () {
    loadAllPhones(false, searchText);
  }, 3000);
};
