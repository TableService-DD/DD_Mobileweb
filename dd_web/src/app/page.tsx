import nextCookies from "next-cookies";

export default function mainPage({ accessToken, refreshToken }) {
  return (
    <div>
      <div>mainPage</div>
      <div>Access Token: {accessToken}</div>
      <div>Refresh Token: {refreshToken}</div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const allCookies = nextCookies(context);
  const accessToken = allCookies["access_token"];
  const refreshToken = allCookies["refresh_token"];

  return {
    props: {
      accessToken,
      refreshToken,
    },
  };
}
