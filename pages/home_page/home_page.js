document.addEventListener("DOMContentLoaded", function () {
  // Handle dropdown menu (click instead of hover)
  const dropdown = document.querySelector(".dropdown");
  const dropdownButton = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  // Track if dropdown is open or closed
  let isDropdownOpen = false;

  // Toggle dropdown on button click
  dropdownButton.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent this click from being detected by document

    if (!isDropdownOpen) {
      dropdownContent.style.display = "block";
      isDropdownOpen = true;
    } else {
      dropdownContent.style.display = "none";
      isDropdownOpen = false;
    }
  });

  // Close dropdown when clicking elsewhere on the page
  document.addEventListener("click", function () {
    if (isDropdownOpen) {
      dropdownContent.style.display = "none";
      isDropdownOpen = false;
    }
  });

  // Prevent clicks inside dropdown content from closing the dropdown
  dropdownContent.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // Handle button animations
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      button.classList.remove("pulseSheen");
      void button.offsetWidth;
      button.classList.add("pulseSheen");
    });
  });

  // Handle layouts button
  const layoutsButton = document.getElementById("layoutsButton");
  const layoutShowcase = document.getElementById("layoutShowcase");

  layoutsButton.addEventListener("click", function () {
    // Clear any existing content
    layoutShowcase.innerHTML = "";

    // Define your layouts
    const layouts = [
       //{ name: 'Portfolio Layout', url: 'layouts/portfolio-layout.html', image: 'images/portfolio-layout-thumb.jpg' },
      {
        name: "Business Website",
        url: "../business_layout_page/business_layout.html",
        image: "../../assets/images/Business_website_tile.png",
      },
       //{ name: 'Blog Layout', url: 'layouts/blog-layout.html', image: 'images/blog-layout-thumb.jpg' }
    ];

    // Create layout thumbnails
    layouts.forEach((layout) => {
      const layoutCard = document.createElement("div");
      layoutCard.className = "layout-card";

      const layoutImage = document.createElement("div");
      layoutImage.className = "layout-image";
      layoutImage.style.backgroundImage = `url(${layout.image})`;

      const layoutName = document.createElement("h3");
      layoutName.textContent = layout.name;

      const viewButton = document.createElement("button");
      viewButton.textContent = "View Layout";
      viewButton.addEventListener("click", function () {
        window.location.href = layout.url;
      });

      layoutCard.appendChild(layoutImage);
      layoutCard.appendChild(layoutName);
      layoutCard.appendChild(viewButton);
      layoutShowcase.appendChild(layoutCard);
    });

    // Show the showcase
    layoutShowcase.style.display = "grid";
    if (layouts.length === 1) {
      layoutShowcase.style.gridTemplateColumns = "1fr";
      layoutShowcase.style.justifyItems = "center";
    } else {
      layoutShowcase.style.gridTemplateColumns =
        "repeat(auto-fill, minmax(600px, 1fr))";
    }
  });

  document.getElementById("myAppButton").addEventListener("click", function () {
    window.open("https://myflutterapp-c0fa3.web.app", "_blank");
  });

  // Closing brace for DOMContentLoaded event listener
});
