export default function MyForm() {
    function handleSubmit(e) {
      // Prevent the browser from reloading the page
      e.preventDefault();
  
      // Read the form data
      const form = e.target;
      const formData = new FormData(form);
  
      // You can pass formData as a fetch body directly:
      fetch('https://tracking.bring.com/api/v2/tracking.json', { method: form.method, body: formData });


    
    }
  
    return (
      <form method="post" onSubmit={handleSubmit}>
        <hr />
        <label>
          <input name="inputValue" className="TrackingNumber" defaultValue="TESTPACKAGEATPICKUPPOINT" />
        </label>
        <button type="submit">Go</button>
        <hr />

      </form>
    );
  }
  