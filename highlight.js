document.addEventListener('DOMContentLoaded', function () {
    const destinationButtons = document.querySelectorAll('.button');

    destinationButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const destinationId = this.getAttribute('href').replace('#', '');
            const destination = document.getElementById(destinationId);

            // Remove the 'highlight' class from all detailed containers
            document.querySelectorAll('.detailed').forEach(container => {
                container.classList.remove('highlight');
            });

            // Add the 'highlight' class to the clicked detailed container
            destination.classList.add('highlight');

            // Remove the 'highlight' class after 5 seconds
            setTimeout(function () {
                destination.classList.remove('highlight');
            }, 5000);
        });
    });
});