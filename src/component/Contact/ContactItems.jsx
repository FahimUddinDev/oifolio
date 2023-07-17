function ContactItems() {
  return (
    <section className="contact-item-area">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-item text-center mt-30">
              <div className="icon">
                <img src="assets/images/icon/contact-1.svg" alt="" />
              </div>
              <h4 className="title">Téléphone</h4>
              <ul>
                <li>+212 34 45 45 98</li>
                <li>+212 34 45 45 98</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-item text-center mt-30">
              <div className="icon">
                <img src="assets/images/icon/contact-2.svg" alt="" />
              </div>
              <h4 className="title">Adresse</h4>
              <ul>
                <li>Angle Bd Abdelmoumen & rue </li>
                <li>soumaya, Résidence Shehrazade </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-item text-center mt-30">
              <div className="icon">
                <img src="assets/images/icon/contact-3.svg" alt="" />
              </div>
              <h4 className="title">Email</h4>
              <ul>
                <li>hello@example.com</li>
                <li>hello@example.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactItems;
