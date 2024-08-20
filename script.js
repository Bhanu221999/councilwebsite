// Function to show suggestions based on input
function showSuggestions() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var suggestionDropdown = document.getElementById("suggestionDropdown");

    var keywords = [
        "services",
        "council taxes",
        "income support",
        "support",
        "road",
        "roadworks",
        "travel and parking",
        "parking",
        "repair",
        "house repair",
        "housing services",
        "rent",
        "house rent",
        "school and learning services",
        "school term dates",
        "term dates school",
        "e-learning",
        "learning",
        "street fault",
        "fault",
        "benefits and supports",
        "benefits and supports services",
        "benefits and claim",
        "report",
        "garden waste",
        "waste",
        "waste and recycling services",
        "bulk waste",
        "road travel and parking services",
        "contact",
        "revenue"
    ];

    // Clear previous suggestions
    suggestionDropdown.innerHTML = "";

    if (input.trim() === "") {
        // Hide the suggestion dropdown if the input is empty
        suggestionDropdown.style.display = "none";
        return;
    }

    // Filter keywords based on input
    var filteredKeywords = keywords.filter(function(keyword) {
        return keyword.startsWith(input);
    });

    // Display suggestions only if there are matching keywords
    if (filteredKeywords.length > 0) {
        suggestionDropdown.style.display = "block";

        // Display filtered suggestions
        filteredKeywords.forEach(function(keyword, index) {
            var listItem = document.createElement("div");
            listItem.textContent = keyword; // Add magnifying lens symbol
            listItem.classList.add("suggestion");
            
            // Add click event listener to set suggestion as search input value
            listItem.addEventListener("click", function() {
                document.getElementById("searchInput").value = listItem.textContent;
                suggestionDropdown.style.display = "none"; // Hide suggestion dropdown after selecting
                searchKeywords(); // Call searchKeywords() after selecting a suggestion
            });
            
            suggestionDropdown.appendChild(listItem);

        });
    } else {
        // Hide the suggestion dropdown if there are no matching keywords
        suggestionDropdown.style.display = "none";
    }
}
            
            // Add horizontal line between suggestions if there are two suggestions
        //     if (filteredKeywords.length > 1 && index < filteredKeywords.length - 1) {
        //         var horizontalLine = document.createElement("hr");
        //         suggestionDropdown.appendChild(horizontalLine);
        //     }
        // });
//     } else {
//         // Hide the suggestion dropdown if there are no matching keywords
//         suggestionDropdown.style.display = "none";
//     }
// }



// Function to handle clicks outside the search input and suggestion dropdown
function handleDocumentClick(event) {
    var searchInput = document.getElementById("searchInput");
    var suggestionDropdown = document.getElementById("suggestionDropdown");
    
    // Check if the clicked element is not the search input or suggestion dropdown
    if (event.target !== searchInput && !searchInput.contains(event.target) &&
        event.target !== suggestionDropdown && !suggestionDropdown.contains(event.target)) {
        // Hide the suggestion dropdown
        suggestionDropdown.style.display = "none";
    }
}

// Add event listener to document body to handle clicks
document.body.addEventListener("click", handleDocumentClick);


// Function to search for keywords
function searchKeywords() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var found = false; // Flag to track if a result is found

    // Check if the input matches a predefined keyword
    if (input.toLowerCase().includes("service")) {
        // Redirect the user to the services page
        window.location.href = "services.html";
        found = true;
    } else if (input.toLowerCase().includes("council")) {
        // Redirect the user to the council taxes page
        window.location.href = "pay.html";
        found = true;
    } else if (input.toLowerCase().includes("support")) {
        // Redirect the user to the road page
        window.location.href = "reportchange.html";
        found = true;
    } else if (input.toLowerCase().includes("parking")) {
        // Redirect the user to the travel and parking page
        window.location.href = "parking.html";
        found = true;
    } else if (input.toLowerCase().includes("fault")) {
        // Redirect the user to the housing page
        window.location.href = "street.html";
        found = true;
    } else if (input.toLowerCase().includes("road")) {
        // Redirect the user to the school and learning page
        window.location.href = "road.html";
        found = true;
    } else if (input.toLowerCase().includes("repair")) {
        // Redirect the user to the benefits and supports page
        window.location.href = "houserepair.html";
        found = true;
    } else if (input.toLowerCase().includes("rent")) {
        // Redirect the user to the waste and recycling page
        window.location.href = "rent.html";
        found = true;
    } else if (input.toLowerCase().includes("school")) {
        // Redirect the user to the waste and recycling page
        window.location.href = "termdates.html";
        found = true;
    } else if (input.toLowerCase().includes("learning")) {
        // Redirect the user to the waste and recycling page
        window.location.href = "virtual.html";
        found = true;
    } else if (input.toLowerCase().includes("benefit")) {
        // Redirect the user to the waste and recycling page
        window.location.href = "benefit.html";
        found = true;
    } else if (input.toLowerCase().includes("report")) {
        // Redirect the user to the waste and recycling page
        window.location.href = "circum.html";
        found = true;
    } else if (input.toLowerCase().includes("garden")) {
        // Redirect the user to the waste and recycling page
        window.location.href = "garden.html";
        found = true;
    } else if (input.toLowerCase().includes("waste")) {
        // Redirect the user to the waste and recycling page
        window.location.href = "bulk.html";
        found = true;
    } else if (input===("road travel and parking services")) {
        // Redirect the user to the waste and recycling page
        window.location.href = "services.html";
        found = true;
    } else if (input ===("housing services")) {
        // Redirect the user to the waste and recycling page
        window.location.href = "rent.html";
        found = true;
    }else if (input ===("school and learning services")) {
        // Redirect the user to the waste and recycling page
        window.location.href = "services.html";
        found = true;
    }else if (input ===("benefits and supports services")) {
        // Redirect the user to the waste and recycling page
        window.location.href = "services.html";
        found = true;
    }else if (input ===("waste and recycling services")) {
        // Redirect the user to the waste and recycling page
        window.location.href = "services.html";
        found = true;
    }else if (input ===("contact")) {
        // Redirect the user to the waste and recycling page
        window.location.href = "contact.html";
        found = true;
    }else if (input ===("revenue")) {
        // Redirect the user to the waste and recycling page
        window.location.href = "revenue.html";
        found = true;
    }

    // If no result is found, display a message
    if (!found) {
        alert("No results found for: " + input);
    }
}

// Enter button for searching
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    // Check if the pressed key is Enter
    if (event.keyCode === 13) {
        // Call the searchKeywords() function
        searchKeywords();
    }
});

// Trigger showSuggestions function when input changes
document.getElementById("searchInput").addEventListener("input", showSuggestions);







