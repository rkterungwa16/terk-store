import { CategoryNames } from "../enums";

export default function HomePage() {
  return <div />;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: `/${CategoryNames.WOMEN}`,
      statusCode: 302,
    },
  };
}
