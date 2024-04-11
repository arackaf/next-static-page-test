// export const getStaticProps = async () => {
//   return { props: { x: 12 } };
// };

export default function Home(props: any) {
  return (
    <div>
      Yo <span>{props.x}</span>
      <br />
      Foo <span>{props.y}</span>
      <br />
      Blah <span>{props.a}</span>
    </div>
  );
}
