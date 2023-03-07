function PhoneApp() {
    function Vizov(){
        window.location.href = "tel:+9989341112205"
    }
    return (
    <div>
      <button onClick={Vizov}>
        Telefon
      </button>
    </div>
  );
}

export default PhoneApp;