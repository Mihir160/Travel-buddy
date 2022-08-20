var carObject = {
    vehicle: "Car",
    imageUrl:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  
    farePerKilo: 3,
    capacity: 4,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
  };
  
  var boatObject = {
      vehicle: "Car",
      imageUrl:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    
      farePerKilo: 3,
      capacity: 4,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
    };
  var bikeObject = {
    vehicle: "Bike",
    imageUrl:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
  
    farePerKilo: 2,
  
    capacity: 2,
  
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
  };
  // farePerKilo -> per kilometer cost for hiring the vehicle
  
  var busObject = {
    vehicle: "Bus",
    imageUrl:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  
    farePerKilo: 3,
    capacity: 30,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
  };

  function displaySevice(service){
  const mainSection = document.getElementById('main-section');
  const stringifiedObj = JSON.stringify(service);
  const div = document.createElement('div');
  div.innerHTML = `
  <div class="card mt-3  mx-auto" style="max-width: 800px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src=${service.imageUrl} class="img-fluid rounded-start h-100" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Transport Mood ${service.vehicle}</h5>
              <p class="card-text">${service.description}</p>
              <p class="card-text"><small class="text-muted">Fare per kilo ${service.farePerKilo}</small> <small class="text-muted">Capacity ${service.capacity}</small></p>
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick='handleBooking(${stringifiedObj})' data-bs-target="#exampleModal">
                    see details
              </button>
            </div>
          </div>
        </div>
</div>
  
  
  
  `
  mainSection.appendChild(div)

}

  displaySevice(carObject);
  displaySevice(busObject);
  displaySevice(bikeObject);



  function handleBooking(obj){

  }