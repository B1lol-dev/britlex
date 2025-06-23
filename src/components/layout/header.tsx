import logo from "@/assets/logo.png";

const header = () => {
  const navLinks = ["home", "skills", "about us", "pricing", "concat"];

  return (
    <header>
      <div class="container">
        <nav>
          <img src={logo} alt="" />
          <ul></ul>
        </nav>
      </div>
    </header>
  );
};

export default header;
