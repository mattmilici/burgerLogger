$(function() {
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
        };
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger,
        }).then(function() {
            // Reload the page to get the updated list
            location.reload();
        });
    });

    $(".devoure").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const id = $(this).data("id");
        const devour = $(this).data("devour");
        const updateDevour = {
            devoured: devour,
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: updateDevour,
        }).then(function() {
            location.reload();
        });
    });
});