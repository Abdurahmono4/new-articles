import images from "../images/book.webp";

function About() {
  return (
    <div>
      <h1>About</h1>
      <img src={images} alt="" width={400} height={400} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        voluptas odio error in incidunt totam, accusantium itaque corporis sunt
        perferendis excepturi ullam, accusamus asperiores! Nobis culpa minus
        alias odio, quaerat quibusdam necessitatibus quo accusantium aliquam!
        Obcaecati, tenetur quam temporibus at est vero minus aliquam perferendis
        labore, accusamus, fugit exercitationem? Adipisci?
      </p>
    </div>
  );
}

export default About;
