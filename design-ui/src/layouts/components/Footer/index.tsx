import Button from "../../../components/button";
import Image from "../../../components/image";
import TextHeaderBox from "../../../components/text/TextHeaderBox";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__logo'>
        <Image imageUrl='logo-footer.png' alt='logo' />
      </div>
      <div className='footer__content'>
        <div className='row'>
          <div className='col col-12 col-lg-4'>
            <div className='footer__content--leftbox'>
              <span>We connect, inspire, and empower the world’s entrepreneurs.</span>
              <br />
              <span className='footer__content--space'></span>
              <span className='footer__content--title'>USA Headquarters</span>
              <span className='footer__content--desc'>612 East 6th Street Austin, TX 78701 USA</span>
              <span className='footer__content--space'></span>
              <span className='footer__content--title'>International Headquarters</span>
              <span className='footer__content--desc'>39 Ann Siang Road Singapore 069716</span>
            </div>
          </div>
          <div className='col col-12 col-lg-8'>
            <div className='footer__content--rightbox'>
              <div className='footer__content--whatwedo'>
                <TextHeaderBox className='text-black mb-20px' size='36px'>
                  WHAT WE DO
                </TextHeaderBox>
                <div className='row align-items-center'>
                  <div className='col col-12 col-md-8'>
                    <div className='row'>
                      <div className='col col-6 col-xl-4'>
                        <a className='footer__content--item' href='#'>
                          Community - DEN
                        </a>
                      </div>
                      <div className='col col-6 col-xl-4'>
                        <a className='footer__content--item' href='#'>
                          Academy
                        </a>
                      </div>
                      <div className='col col-6 col-xl-4'>
                        <a className='footer__content--item' href='#'>
                          Partnerships
                        </a>
                      </div>
                      <div className='col col-6 col-xl-4'>
                        <a className='footer__content--item' href='#'>
                          Ventures
                        </a>
                      </div>
                      <div className='col col-6 col-xl-4'>
                        <a className='footer__content--item' href='#'>
                          Services
                        </a>
                      </div>
                      <div className='col col-6 col-xl-4'>
                        <a className='footer__content--item' href='#'>
                          Location Partners
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col d-none md-show col-md-4'>
                    <Button variant='primary' size='small'>
                      Join our community
                    </Button>
                  </div>
                </div>
              </div>
              <div className='footer__space'></div>
              <div className='footer__content--howfar'>
                <TextHeaderBox size='36px' className='text-black'>
                  HOW FAR DO YOU WANT TO GO TODAY?
                </TextHeaderBox>
                <div className='row mt-20px'>
                  <div className='col col-2-5 col-6 col-md-4 col-lg-3'>
                    <a className='footer__content--item' href='#'>
                      Bali
                    </a>
                  </div>
                  <div className='col col-2-5 col-6 col-md-4 col-lg-3'>
                    <a className='footer__content--item' href='#'>
                      Bali
                    </a>
                  </div>
                  <div className='col col-2-5 col-6 col-md-4 col-lg-3'>
                    <a className='footer__content--item' href='#'>
                      Canary Islands
                    </a>
                  </div>
                  <div className='col col-2-5 col-6 col-md-4 col-lg-3'>
                    <a className='footer__content--item' href='#'>
                      Lisbon
                    </a>
                  </div>
                  <div className='col col-2-5 col-6 col-md-4 col-lg-3'>
                    <a className='footer__content--item' href='#'>
                      Lisbon
                    </a>
                  </div>
                  <div className='col col-2-5 col-6 col-md-4 col-lg-3'>
                    <a className='footer__content--item' href='#'>
                      Bangalore
                    </a>
                  </div>
                  <div className='col col-2-5 col-6 col-md-4 col-lg-3'>
                    <a className='footer__content--item' href='#'>
                      Chiang Mai
                    </a>
                  </div>
                  <div className='col col-2-5 col-6 col-md-4 col-lg-3'>
                    <a className='footer__content--item' href='#'>
                      Manila
                    </a>
                  </div>
                  <div className='col col-2-5 col-6 col-md-4 col-lg-3'>
                    <a className='footer__content--item' href='#'>
                      Manila
                    </a>
                  </div>
                  <div className='col col-2-5 col-6 col-md-4 col-lg-3'>
                    <a className='footer__content--item' href='#'>
                      Da Nang
                    </a>
                  </div>
                  <div className='col col-2-5 col-6 col-md-4 col-lg-3'>
                    <a className='footer__content--item' href='#'>
                      Penang
                    </a>
                  </div>
                  <div className='col col-2-5 col-6 col-md-4 col-lg-3'>
                    <a className='footer__content--item' href='#'>
                      Singapore
                    </a>
                  </div>
                  <div className='col col-2-5 col-6 col-md-4 col-lg-3'>
                    <a className='footer__content--item' href='#'>
                      Chiang Mai
                    </a>
                  </div>
                  <div className='col col-2-5 col-6 col-md-4 col-lg-3'>
                    <a className='footer__content--item' href='#'>
                      Manila
                    </a>
                  </div>
                  <div className='col col-2-5 col-6 col-md-4 col-lg-3'>
                    <a className='footer__content--item' href='#'>
                      Manila
                    </a>
                  </div>
                  <div className='col col-2-5 col-6 col-md-4 col-lg-3'>
                    <a className='footer__content--item' href='#'>
                      Da Nang
                    </a>
                  </div>
                  <div className='col col-2-5 col-6 col-md-4 col-lg-3'>
                    <a className='footer__content--item' href='#'>
                      Penang
                    </a>
                  </div>
                  <div className='col col-2-5 col-6 col-md-4 col-lg-3'>
                    <a className='footer__content--item' href='#'>
                      Singapore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer__space'></div>
      </div>
    </footer>
  );
};
export default Footer;
