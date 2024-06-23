 document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('subscribe-form').addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent the default form submission

                // Get the input values
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
             

                console.log('Name:', name);
                console.log('Email:', email);
                
                const result ={name, email}
                console.log(result)

                // Now you can use these values as needed, for example, send them via AJAX
                // const formData = new FormData();
   
                // formData.append('name', name);
                // formData.append('email', email);
                // console.log(formData,"form data add")

                fetch('http://localhost:5000/subscribe', {
                    method: "POST", // or 'PUT'
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(result),
                    
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