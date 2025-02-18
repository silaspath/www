import { redirect } from "next/navigation";

export default async function Profile() {
  redirect(
    "https://docs.google.com/forms/d/e/1FAIpQLScaqQIR-FSstovo_KQBzb4Jy0AKKGKYCwta1_DZCWl1Iv3kIw/viewform?usp=sf_link"
  );
}