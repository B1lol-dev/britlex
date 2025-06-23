import Container from "@/components/helpers/container";
import { Button } from "../ui/button";

const hero = () => {
  return (
    <section>
      <Container className="flex justify-between">
        <div>
          <h1>Learn Any Foreign Language</h1>
          <p>
            With our teachers who write a program for each student, you will be
            able to make your first sketch after the first lesson.
          </p>
          <Button>Get started</Button>
        </div>
      </Container>
    </section>
  );
};

export default hero;
