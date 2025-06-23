import logo from "@/assets/logo.png";
import Container from "@/components/helpers/container";

const header = () => {
  const navLinks = ["home", "skills", "about us", "pricing", "concat"];

  return (
    <header class="py-11">
      <Container>
        <nav class="flex items-center justify-between">
          <img src={logo} alt="" />
          <ul class="flex items-center justify-center gap-5">
            {navLinks.map(link => (
              <li
                key={link}
                class="hover:text-orange-500 cursor-pointer hover:underline"
              >
                {link}
              </li>
            ))}
          </ul>
          <button class="w-[220px] h-[70px] border-[2px] border-[#263238] rounded-[5px]">
            Let’s Talk
          </button>
        </nav>
      </Container>
    </header>
  );
};

export default header;
