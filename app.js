 document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('subscribe-form').addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent the default form submission

                // Get the input values
                var name = document.getElementById('name').value;
                var email = document.getElementById('email').value;
             

                console.log('Name:', name);
                console.log('Email:', email);
            

                // Now you can use these values as needed, for example, send them via AJAX
                var formData = new FormData();
                formData.append('name', name);
                formData.append('email', email);
             

                fetch('http://localhost:5000/subscribe', {
                    method: 'POST',
                    body: formData
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.status === 'success') {
                        alert('Subscription added database successful');
                        document.getElementById('subscribe-form').reset(); // Reset the form
                    } else {
                        alert('Subscription failed: ' + data.message);
                    }
                })
                .catch(error => {
                    alert('Error: ' + error.message);
                });
            });
        });