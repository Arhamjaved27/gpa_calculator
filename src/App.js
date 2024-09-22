
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <div className="container-fluid bg-info" style={{ height: '90vh' }} >
        <div className="bg-success  h-100 p-5">
          <label for="exampleColorInput" className="form-label">Color picker</label>
          <input type="color" className="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color" />


          <div className="mt-2 mb-2 input-group">

            <label className="btn btn-danger mt-2" htmlFor="inputGroupSelect01">Number Of Books...</label>
            <select className="form-select p-1 m-2" id="inputGroupSelect01">
              <option selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3">4</option>
              <option value="3">5</option>
              <option value="3">6</option>
              <option value="3">7</option>
              <option value="3">8</option>
              <option value="3">9</option>
            </select>
          </div>

          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Books</th>
                <th scope="col">Credit hours</th>
                <th scope="col">Grade</th>
                <th scope="col">Grade Points</th>
                <th scope="col">Individual GPA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@sdf</td>
              </tr>

            </tbody>
          </table>
          



        </div>
      </div>

    </>
  );
}

export default App;
