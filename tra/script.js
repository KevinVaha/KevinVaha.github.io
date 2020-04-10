//modal

var modal = document.getElementById("loginModal");

// close modal

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function closeModal() {
    modal.style.display = "none";
}

document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        modal.style.display = "none";
    }
};

// open modal

function openModal() {
    modal.style.display = "block";
}

//Modal
var companyName = document.getElementById("companyName");
var emailAddress = document.getElementById("emailAddress")
var phoneNumber = document.getElementById("phoneNumber")
var occupation = document.getElementById("occupation");
var manualOccupation = document.getElementById("manualOccupation");
var description = document.getElementById("description");
var requirements = document.getElementById("requirements");
var category = document.getElementById("category");
var jobLocation = document.getElementById("jobLocation");
var pay = document.getElementById("pay");
var payHM = document.getElementById("payHM");
//Modal

//Close/open modal
var adModal = document.getElementById("adModal");
var modalBtn = document.getElementById("openAd");
var modalClose = document.getElementById("modalClose");

modalBtn.onclick = function () {
    adModal.style.display = "block"
}

modalClose.onclick = function () {
    adModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == adModal) {
        adModal.style.display = "none";
    }
}

document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        adModal.style.display = "none";
    }
};
//Close/open modal

//Create ad
document.getElementById("postAd").onclick = function () {

    if (occupation.value != "" && location.value != "") {

        var jobOffers = document.getElementById("offer");

        var newOfferDiv = document.createElement("div");
        jobOffers.appendChild(newOfferDiv);
        newOfferDiv.classList.add("ad");

        var title = document.createElement("p");
        title.innerHTML = occupation.value + " needed in " + jobLocation.value;
        newOfferDiv.appendChild(title);

        let moreInfo = document.createElement("button");
        moreInfo.innerHTML = "Click for more info";
        moreInfo.addEventListener("click", function () {
            dropDown.classList.toggle("show");
        });
        newOfferDiv.appendChild(moreInfo);

        var dropDown = document.createElement("div");
        dropDown.classList.add("dropdown-content");
        dropDown.setAttribute("id", "dropdown")
        newOfferDiv.appendChild(dropDown);

        var adCompanyName = document.createElement("p");
        adCompanyName.innerHTML = "Company name: " + companyName.value;
        dropDown.appendChild(adCompanyName);

        var adEmailAddress = document.createElement("p");
        adEmailAddress.innerHTML = "Email address: " + emailAddress.value;
        dropDown.appendChild(adEmailAddress);

        var adPhoneNumber = document.createElement("p");
        adPhoneNumber.innerHTML = "Phone number: " + phoneNumber.value;
        dropDown.appendChild(adPhoneNumber);

        var adOccupation = document.createElement("p");
        adOccupation.innerHTML = "Occupation: " + occupation.value;
        dropDown.appendChild(adOccupation);

        var adDescription = document.createElement("p");
        adDescription.innerHTML = "Description: " + description.value;
        dropDown.appendChild(adDescription);

        var adRequirements = document.createElement("p");
        adRequirements.innerHTML = "Requirements: " + requirements.value;
        dropDown.appendChild(adRequirements);

        var adCategory = document.createElement("p");
        adCategory.innerHTML = "Category: " + category.value;
        dropDown.appendChild(adCategory);

        var adLocation = document.createElement("p");
        adLocation.innerHTML = "Location: " + jobLocation.value;
        dropDown.appendChild(adLocation);

        var adPay = document.createElement("p");
        if (pay.value != "") {
            adPay.innerHTML = "Pay before taxes: " + pay.value + "&euro; " + payHM.value;
        } else {
            adPay.innerHTML = "Pay: The salary was not specified by the employer"
        }
        dropDown.appendChild(adPay);

        moreInfo.addEventListener("click", function () {

        });

        
    }

    adModal.style.display = "none"
    companyName.value = "";
    emailAddress.value = "";
    phoneNumber.value = "";
    occupation.value = "";
    manualOccupation.value = "If not included in list write here";
    description.value = "";
    requirements.value = "";
    category.value = "";
    jobLocation.value = "";
    pay.value = "";
    payHM.value = "Per month";
}
//Create ad

//Filter
let users = [
    "Project manager needed in Tallinn",
    "Assistant manager needed in Tallinn",
    "Front-end engineer needed in Tallinn",
    "Software developer needed in Tartu",
    "Project manager needed in Tallinn",
    "Chef needed in Tallinn",
    "Back-end developer needed in Tartu",
    "Java software engineer needed in Tartu",
    "Sales expert needed in Tallinn",
    "Project manager needed in Tallinn",
    "Chef needed in Tallinn",
    "Software engineer needed in Tartu",
    "Truck driver needed in Tartu",
    "Chef needed in Tallinn",
    "Car driver needed in Tartu",
    "Project manager needed in Tallinn",
    "Mechanic needed in Tallinn",
    "Builder needed in Tartu",
    "Chef needed in Tallinn",
    "Assistant manager needed in Tallinn",
    "Java software engineer needed in Tartu",
    "Carpenter needed in Tallinn",
    "Project manager needed in Tallinn",
    "Welder needed in Tartu",
    "Engineer needed in Tartu",
    "Java software engineer needed in Tallinn",
    "Accountan needed in Tallinnt",
    "Customer service needed in Tallinn",
    "Assistant manager needed in Tallinn",
    "Lawyer needed in Tartu",
    "Java software engineer needed in Tallinn",
    "Security guard needed in Tartu",
    "Project manager needed in Tallinn",
    "Java software engineer needed in Pärnu",
    "Bucher needed in Tallinn",
    "Cook needed in Tartu",
    "Chef needed in Tallinn",
    "Java software engineer needed in Tallinn",
    "Assistant manager needed in Tallinn",
    "Project manager needed in Tallinn",
    "Assistant chef needed in Tallinn",
];

ul = document.getElementById("dummy-ads");

let render_lists = function (lists) {
    let li = "";
    for (index in lists) {
        li += "<li>" + lists[index] + "</li>";
    }
    ul.innerHTML = li;
}

render_lists(users);

input = document.getElementById('search');

let filterUsers = function (event) {
    keyword = input.value.toLowerCase();
    filtered_users = users.filter(function (user) {
        user = user.toLowerCase();
        return user.indexOf(keyword) > -1;
    });
    render_lists(filtered_users);
}
input.addEventListener('keyup', filterUsers);
//Filter