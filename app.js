 document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('subscribe-form').addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent the default form submission

                // Get the input values
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
             

                // console.log('Name:', name);
                // console.log('Email:', email);
                // objects data store koralm
                const result ={name, email}
        
                console.log(result)

               

                fetch('https://subscription-service-eight.vercel.app/subscribe', {
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