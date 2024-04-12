import { useState, useEffect } from "react";

function PetToDoApp() {
  const [petId, setPetId] = useState([]);
  const [petName, setPetName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const filteredPets = petId.filter((pet) =>
    pet.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const savedPets = localStorage.getItem("pets");
    if (savedPets) {
      setPetId(JSON.parse(savedPets));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pets", JSON.stringify(petId));
  }, [petId]);

  function handleInputPet(event) {
    setPetName(event.target.value);
    setErrorMessage("");
  }

  function handleAddNewPet() {
    if (petName.trim() === "") {
      setErrorMessage("Please enter a pet name.");
      return;
    }
    setPetId([...petId, petName]);
    setPetName("");
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  function handleDeletePet(index) {
    const updatedPets = petId.filter((_, i) => i !== index);
    setPetId(updatedPets);
  }

  return (
    <div className="container">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Input Pet Name"
          aria-label="Input Pet Name"
          aria-describedby="button-addon2"
          value={petName}
          onChange={handleInputPet}
        />
        <button
          className="btn btn-dark btn-outline-white"
          type="button"
          id="button-addon2"
          onClick={handleAddNewPet}
        >
          Add Pet
        </button>
      </div>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search Pet Name"
          aria-label="Search Pet Name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredPets.map((pet, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{pet}</td>
              <td>
                <button
                  className="btn btn-outline-info --bs-danger-border-subtle"
                  onClick={() => handleDeletePet(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PetToDoApp;
