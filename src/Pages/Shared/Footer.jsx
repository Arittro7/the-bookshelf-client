import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal items-center bg-yellow-400 text-base-content p-10">
  <aside className="w-[400px] ">
    <img className="rounded-full mb-6 sm:mb-0" src={logo} alt="" />
    <p className="font-semibold uppercase text-xl">THE BOOK SHELF
      <br />
      A reliable hub to connect readers and writers
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  );
};

export default Footer;