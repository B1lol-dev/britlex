import Container from "@/components/helpers/container";
import { Button } from "../ui/button";
import hero_girl_img from "@/assets/hero_girl.png";

const hero = () => {
  return (
    <section>
      <Container className="flex justify-between items-center">
        <div>
          <h1 class="font-semibold text-[64px] max-w-[386px]">
            Learn Any Foreign Language
          </h1>
          <p class="text-gray-400 text-2xl max-w-[632px] mt-10">
            With our teachers who write a program for each student, you will be
            able to make your first sketch after the first lesson.
          </p>
          <Button className="px-28 py-10 text-3xl mt-16">Get started</Button>
        </div>
        <div>
          <img src={hero_girl_img} alt="girl" />
        </div>
      </Container>
    </section>
  );
};

export default hero;
