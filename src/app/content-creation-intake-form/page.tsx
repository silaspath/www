import { redirect } from "next/navigation";

export default async function Profile() {
  redirect(
    "https://docs.google.com/forms/d/e/1FAIpQLScp7F6T0PYdpgRyKdFtrElMHaBuFwuteQ_0Rn-rL7lFzmeoXg/viewform?usp=sf_link"
  );
}