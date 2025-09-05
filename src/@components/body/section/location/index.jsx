import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

const LocationSection= () => {
  return (
    <>
      <section className="container-location marg-all" id="location">
        <div className="col-left">
          <h2>PT. ALTINDO MITRA PERKASA</h2>
          <div className="text">
            <div className="text-col">
              <span>Alamat</span>
              <p>
                Jl. Benda, RT.003 RW.010, Padurenan, Kec. Mustika Jaya, Kota
                Bekasi, Jawa Barat 17156
              </p>
            </div>
            <div className="text-col">
              <span>Telp</span>
              <a
                className="telp"
                target="_blank "
                href="https://api.whatsapp.com/send?phone=6289601961928"
              >
                0896-0196-1928
              </a>
            </div>
            <div className="text-col sosial-media">
              <span>Sosial Media</span>
              <div className="col-logo">
                <FontAwesomeIcon icon={faInstagram} />
                <a
                  className="link-instagram"
                  target="_blank "
                  href="https://www.instagram.com/altindomitraperkasa/"
                >
                  @altindomitraperkasa
                </a>
              </div>
              <div className="col-logo">
                <FontAwesomeIcon icon={faLinkedin} />
                <a
                  className="link-logo"
                  target="_blank "
                  href="https://www.linkedin.com/in/pt-altindo-mitra-perkasa-7b943a259/"
                >
                  PT ALTINDO MITRA PERKASA
                </a>
              </div>
              <div className="col-logo">
                <FontAwesomeIcon icon={faTiktok} />
                <a
                  className="link-logo"
                  target="_blank "
                  href="https://www.tiktok.com/@altindomitraperkasa?is_from_webapp=1&sender_device=pc"
                >
                  @altindomitraperkasa
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.537439106904!2d106.98914207523933!3d-6.324319293665164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699350b144ee97%3A0x4baa1e7a4c7a867d!2sPT%20ALTINDO%20MITRA%20PERKASA!5e0!3m2!1sid!2sid!4v1738119113966!5m2!1sid!2sid"
            width="600"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <section className="container-location-mobile marg-all">
        <div className="col-top">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.537439106904!2d106.98914207523933!3d-6.324319293665164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699350b144ee97%3A0x4baa1e7a4c7a867d!2sPT%20ALTINDO%20MITRA%20PERKASA!5e0!3m2!1sid!2sid!4v1738119113966!5m2!1sid!2sid"
            width="600"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          >
            <a
              style={{ background: "black", padding: "10px" }}
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.537439106904!2d106.98914207523933!3d-6.324319293665164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699350b144ee97%3A0x4baa1e7a4c7a867d!2sPT%20ALTINDO%20MITRA%20PERKASA!5e0!3m2!1sid!2sid!4v1738119113966!5m2!1sid!2sid"
            ></a>
          </iframe>
        </div>
        <div className="col-bottom">
          <h2>PT. ALTINDO MITRA PERKASA</h2>
          <div className="text">
            <div className="text-col">
              <span>Alamat</span>
              <p>
                Jl. Benda, RT.003 RW.010, Padurenan, Kec. Mustika Jaya, Kota
                Bekasi, Jawa Barat 17156
              </p>
            </div>
            <div className="text-col">
              <span>Telp</span>
              <a
                className="telp"
                target="_blank "
                href="https://api.whatsapp.com/send?phone=6289601961928"
              >
                0896-0196-1928
              </a>
            </div>
            <div className="text-col sosial-media">
              <span>Sosial Media</span>
              <div className="col-logo">
                <FontAwesomeIcon icon={faInstagram} />
                <a
                  className="link-instagram"
                  target="_blank "
                  href="https://www.instagram.com/altindomitraperkasa/"
                >
                  @altindomitraperkasa
                </a>
              </div>
              <div className="col-logo">
                <FontAwesomeIcon icon={faLinkedin} />
                <a
                  className="link-logo"
                  target="_blank "
                  href="https://www.linkedin.com/in/pt-altindo-mitra-perkasa-7b943a259/"
                >
                  PT ALTINDO MITRA PERKASA
                </a>
              </div>
              <div className="col-logo">
                <FontAwesomeIcon icon={faTiktok} />
                <a
                  className="link-logo"
                  target="_blank "
                  href="https://www.tiktok.com/@altindomitraperkasa?is_from_webapp=1&sender_device=pc"
                >
                  @altindomitraperkasa
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LocationSection;
